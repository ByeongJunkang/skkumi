package com.example.backend.auth;

import com.example.backend.domain.user.AppUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest  request
    ){
        //
        return ResponseEntity.ok(service.register(request));

    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody AuthenticationRequest  request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }


    @GetMapping("/username")
    public ResponseEntity<String> register(
            @AuthenticationPrincipal AppUser user
    ){
        System.out.println("user.getUsername() = " + user.getUsername());
        return ResponseEntity.ok("hi");
    }
}
