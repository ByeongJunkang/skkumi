package com.example.backend.repo;

import com.example.backend.domain.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<AppUser,Long> {
    Optional <AppUser> findByUsername(String username);
}
