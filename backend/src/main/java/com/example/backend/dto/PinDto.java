package com.example.backend.dto;

import com.example.backend.domain.place.Pin;
import com.example.backend.domain.place.Place;
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

public class PinDto {


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class PostRequest {

        @JsonProperty
        @NotNull
        private Long placeId;

        private String title;

        private String content;




        public Pin toEntity(AppUser user, Place place
        ) {
            return Pin.builder()
                    .user(user)
                    .place(place)
                    .title(this.title)
                    .content(this.content)
                    .build();
        }
    }
}
