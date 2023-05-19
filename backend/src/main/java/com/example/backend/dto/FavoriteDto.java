package com.example.backend.dto;

import com.example.backend.domain.mission.Badge;
import com.example.backend.domain.mission.BadgeStatus;
import com.example.backend.domain.place.Favorite;
import com.example.backend.domain.place.Pin;
import com.example.backend.domain.user.AppUser;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class FavoriteDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)

    public static class PostRequest {

        @JsonProperty
        @NotNull
        private Long pinId;

        public Favorite toEntity(AppUser user, Pin pin) {
            return Favorite.builder()
                    .user(user)
                    .pin(pin)
                    .build();
        }
    }

    @Getter
    public static class Response {

        private Long id;
        private String content;
        private String title;
        private String place;

        public Response(Favorite favorite){
            this.id = favorite.getId();
            this.content = favorite.getPin().getContent();
            this.title = favorite.getPin().getTitle();
            this.place = favorite.getPin().getPlace().getName();
        }
    }
}
