package com.example.backend.api.controller;

import com.example.backend.domain.mission.Badge;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.BadgeDto;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.PinDto;
import com.example.backend.service.BadgeService;
import com.example.backend.service.PinService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/badge")
@RequiredArgsConstructor
public class BadgeController {

    private final BadgeService badgeService;
    @PostMapping("")
    public ResponseEntity<?> register(@Valid @RequestBody BadgeDto.PostRequest dto, @AuthenticationPrincipal AppUser user){
        badgeService.register(user,dto);
        return new ResponseEntity<>(new CMRespDto<>(1, "뱃지가 발급되었습니다", null), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<?> getMyBadge(@AuthenticationPrincipal AppUser user){
        List<BadgeDto.Response> responses = badgeService.getMyBadge(user);
        return new ResponseEntity<>(new CMRespDto<>(1, "뱃지 조회를 완료했습니다.", responses), HttpStatus.OK);

    }


}
