package com.example.backend.dto;

import com.example.backend.domain.place.Place;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class PlaceDto {


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
//    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class PostRequest {
        @NotBlank
        private String name;

        private Double xcoordinate;

        private Double ycoordinate;


        public Place toEntity() {
            return Place.builder()
                    .name(this.name)
                    .xcoordinate(this.xcoordinate)
                    .ycoordinate(this.ycoordinate)
                    .build();
        }
    }

}
