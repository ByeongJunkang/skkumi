package com.example.backend.service;

import com.example.backend.common.MockTest;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.UserDto;
import com.example.backend.repo.UserRepo;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.util.ReflectionTestUtils;

import java.io.UnsupportedEncodingException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

public class UserServiceTest extends MockTest {
    @InjectMocks
    private UserService userService;
    @Mock
    private UserRepo userRepo;
    @Mock
    private PasswordEncoder passwordEncoder;

    @Before
    public void setUp() {
        ReflectionTestUtils.setField(userService, "passwordEncoder", passwordEncoder);
    }

    @Test
    public void saveUser_성공() throws UnsupportedEncodingException {
        //given
        AppUser userReturnedByRepo = AppUser.builder()
                .id(1L).nickname("user").username("user111").password("encoderPassword").email("freudbj@naver.com")
                .build();
        UserDto.SignUpForm signUpForm = new UserDto.SignUpForm("user", "user111", "1234", "1234");

        given(passwordEncoder.encode(anyString())).willReturn("encoderPassword");
        given(userRepo.save(any())).willReturn(userReturnedByRepo);
        //doNothing().when(emailService).sendEmail(signUpForm.getEmail());

        //when
        AppUser savedUser = userService.saveUser(signUpForm);

        //then
        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getNickname()).isEqualTo(signUpForm.getNickname());
        assertThat(savedUser.getUsername()).isEqualTo(signUpForm.getUsername());
        assertThat(savedUser.getPassword()).isEqualTo("encoderPassword");
        //verify(emailService, times(1)).sendEmail(signUpForm.getEmail());
    }
}

