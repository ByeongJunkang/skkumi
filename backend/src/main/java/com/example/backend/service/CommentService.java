package com.example.backend.service;


import com.example.backend.domain.place.Pin;
import com.example.backend.domain.place.Comment;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.CommentDto;
import com.example.backend.repo.CommentRepo;
import com.example.backend.repo.PinRepo;
import com.example.backend.repo.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CommentService {
    private final PinRepo pinRepo;
    private final CommentRepo commentRepo;
    private final UserRepo userRepo;

    @Transactional
    public void write(AppUser user, CommentDto.PostRequest dto){
        Pin pin = pinRepo.findById(dto.getPinId()).orElseThrow();
        Comment comment =dto.toEntity(user,pin);
        commentRepo.save(comment);

    }
    @Transactional
    public void delete(Long comment_id){
        commentRepo.deleteById(comment_id);
    }

}