package com.example.backend.api.controller;


import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.PlaceDto;
import com.example.backend.dto.UserDto;
import com.example.backend.service.PlaceService;
import com.example.backend.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/place")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;



    @PostMapping("")
    public ResponseEntity<?> register(
            @Valid @RequestBody PlaceDto.PostRequest dto
    ){
        //
        placeService.registerPlace(dto);
        return new ResponseEntity<>(new CMRespDto<>(1, "장소 등록이 완료되었습니다", null), HttpStatus.CREATED);

    }
}
