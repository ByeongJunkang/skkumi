package com.example.backend.repo;

import com.example.backend.domain.place.Favorite;
import com.example.backend.domain.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepo extends JpaRepository<Favorite,Long> {
    List<Favorite> findByUser (AppUser user);
}
