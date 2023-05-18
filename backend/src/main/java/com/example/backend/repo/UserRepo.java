package com.example.backend.repo;


import com.example.backend.domain.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.EntityGraph;

import java.util.Optional;

public interface UserRepo extends JpaRepository<AppUser,Long> {
    Optional <AppUser> findByUsername(String username);

    @EntityGraph(attributePaths = "authorities")
    Optional<AppUser> findOneWithAuthoritiesByUsername(String username);
}
