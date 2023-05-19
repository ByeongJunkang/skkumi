package com.example.backend.repo;

import com.example.backend.domain.mission.Badge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BadgeRepo extends JpaRepository<Badge,Long> {

}
