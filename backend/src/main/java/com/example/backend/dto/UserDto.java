package com.example.backend.dto;

import com.example.backend.domain.user.AppUser;
import com.example.backend.domain.user.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

public class UserDto {


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
//    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class SignUpForm {
        @NotBlank
        private String nickname;
        @NotBlank
        private String username;
        @NotBlank
        private String password;

        @NotBlank
        private String email;


        public AppUser toEntity() {
            return AppUser.builder()
                    .nickname(this.nickname)
                    .username(this.username)
                    .password(this.password)
                    .email(this.email)
                    .role(Role.USER)
                    .build();
        }
    }


    @Getter
    @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Response {
        private Long id;
        private String nickname;
        private String username;


        public Response(AppUser user) {
            this.id = user.getId();
            this.nickname = user.getNickname();
            this.username = user.getUsername();
        }

    }

}
