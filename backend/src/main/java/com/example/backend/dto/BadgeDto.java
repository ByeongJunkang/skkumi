package com.example.backend.dto;

import com.example.backend.domain.mission.Badge;
import com.example.backend.domain.mission.BadgeStatus;
import com.example.backend.domain.place.Pin;
import com.example.backend.domain.place.Place;
import com.example.backend.domain.user.AppUser;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class BadgeDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)

    public static class PostRequest {

        @JsonProperty
        @NotNull
        private Long badgeId;


        public BadgeStatus toEntity(AppUser user, Badge badge) {
            return BadgeStatus.builder()
                    .user(user)
                    .badge(badge)
                    .build();
        }
    }


    @Getter
    public static class Response {

        private Long id;
        private String content;
        private String name;

        public Response(BadgeStatus badgeStatus){
            this.id = badgeStatus.getId();
            this.content = badgeStatus.getBadge().getContent();
            this.name = badgeStatus.getBadge().getName();
        }
    }
}
