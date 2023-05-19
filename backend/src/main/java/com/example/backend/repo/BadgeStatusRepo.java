package com.example.backend.repo;

import com.example.backend.domain.mission.BadgeStatus;
import com.example.backend.domain.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BadgeStatusRepo extends JpaRepository<BadgeStatus,Long> {

    List<BadgeStatus> findByUser(AppUser user);
}
