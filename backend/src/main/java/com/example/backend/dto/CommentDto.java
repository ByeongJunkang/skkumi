package com.example.backend.dto;

import com.example.backend.domain.place.Pin;
import com.example.backend.domain.place.Comment;
import com.example.backend.domain.user.AppUser;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CommentDto {


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class PostRequest {

        @JsonProperty
        @NotNull
        private Long pinId;

        private String comment;


        public Comment toEntity(AppUser user, Pin pin
        ) {
            return Comment.builder()
                    .user(user)
                    .pin(pin)
                    .comment(this.comment)
                    .build();
        }
    }
}