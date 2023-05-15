package com.example.backend.api.controller;

import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.PinDto;
import com.example.backend.dto.PlaceDto;
import com.example.backend.service.PinService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pin")
@RequiredArgsConstructor
public class PinController {

    private final PinService pinService;
    @PostMapping("")
    public ResponseEntity<?> register(
            @Valid @RequestBody PinDto.PostRequest dto,
            @AuthenticationPrincipal AppUser user

    ){
        //
        pinService.write(user, dto);
        return new ResponseEntity<>(new CMRespDto<>(1, "핀 등록이 완료되었습니다", null), HttpStatus.CREATED);

    }
}
