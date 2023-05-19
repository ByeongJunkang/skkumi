package com.example.backend.api.controller;

import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.CommentDto;
import com.example.backend.dto.PinDto;
import com.example.backend.dto.PlaceDto;
import com.example.backend.service.CommentService;
import com.example.backend.service.PinService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    @PostMapping("")
    public ResponseEntity<?> register(
            @Valid @RequestBody CommentDto.PostRequest dto,
            @AuthenticationPrincipal AppUser user

    ){
        //
        commentService.write(user, dto);
        return new ResponseEntity<>(new CMRespDto<>(1, "댓글 등록이 완료되었습니다", null), HttpStatus.CREATED);

    }

    @DeleteMapping("/{comment_id}")
    public String deletePin(@PathVariable Long comment_id){
        commentService.delete(comment_id);
        return "댓글이 삭제되었습니다.";

    }

}