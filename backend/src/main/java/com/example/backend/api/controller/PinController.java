package com.example.backend.api.controller;

import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.FavoriteDto;
import com.example.backend.dto.PinDto;
import com.example.backend.dto.PlaceDto;
import com.example.backend.service.PinService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


import java.util.List;


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


    @GetMapping("")
    public ResponseEntity<?> getMyPin(@AuthenticationPrincipal AppUser user){

        List<PinDto.Response> responses = pinService.getMyPin(user);
        return new ResponseEntity<>(new CMRespDto<>(1,"내가 등록한 핀 조회 완료",responses),HttpStatus.OK);
    }

    @PostMapping("/favorite")
    public ResponseEntity<?> favorite(
            @Valid @RequestBody FavoriteDto.PostRequest dto,
            @AuthenticationPrincipal AppUser user

    ){
        //
        pinService.addFavorite(user, dto);
        return new ResponseEntity<>(new CMRespDto<>(1, "공감한 핀 생성 완료", null), HttpStatus.CREATED);

    }

    @GetMapping("/favorite")
    public ResponseEntity<?> getMyFavoritePin(@AuthenticationPrincipal AppUser user){

        List<FavoriteDto.Response> responses = pinService.getMyFavoritePin(user);
        return new ResponseEntity<>(new CMRespDto<>(1,"내가 공감한 핀 조회 완료",responses),HttpStatus.OK);
    }

    @DeleteMapping("/{pin_id}")
    public String deletePin(@PathVariable Long pin_id){
        pinService.delete(pin_id);
        return "핀이 삭제되었습니다.";

    }


}
