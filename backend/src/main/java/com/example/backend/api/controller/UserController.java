package com.example.backend.api.controller;

import com.example.backend.auth.AuthenticationRequest;
import com.example.backend.auth.AuthenticationService;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.UserDto;
import com.example.backend.service.UserService;
import com.example.backend.repo.UserRepo;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final AuthenticationService service;
    private final UserService userService;
    private final UserRepo userRepo;

    private final PasswordEncoder passwordEncoder;



    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Valid @RequestBody UserDto.SignUpForm signUpForm
    ){
        //
        userService.saveUser(signUpForm);
        return new ResponseEntity<>(new CMRespDto<>(1, "회원가입이 완료되었습니다", null), HttpStatus.CREATED);

    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request){

        return new ResponseEntity<>(new CMRespDto<>(1, "토큰이 발급되었습니다", service.authenticate(request)), HttpStatus.OK);
    }


    @GetMapping("/username")
    public ResponseEntity<String> register(
            @AuthenticationPrincipal AppUser user
    ){
        System.out.println("user.getUsername() = " + user.getUsername());
        return ResponseEntity.ok("hi");
    }



    @GetMapping("/me")
    public ResponseEntity<?> myInfo(@AuthenticationPrincipal AppUser user){
        UserDto.Response response = userService.getUser(user.getId());
        return new ResponseEntity<>(new CMRespDto<>(1, "내 정보를 받아왔습니다", response), HttpStatus.OK);
    }




    @DeleteMapping("/username/{user_id}")
    public String deleteUser(@PathVariable Long user_id) {
        userRepo.deleteById(user_id);
        return "유저가 삭제되었습니다.";
    }

}