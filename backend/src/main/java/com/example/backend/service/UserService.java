package com.example.backend.service;


import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.UserDto;
import com.example.backend.repo.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public AppUser saveUser(UserDto.SignUpForm signUpForm){

        signUpForm.setPassword(passwordEncoder.encode(signUpForm.getPassword()));
        AppUser appUser = signUpForm.toEntity();
        AppUser newUser = userRepo.save(appUser);
        return newUser;
    }

}
