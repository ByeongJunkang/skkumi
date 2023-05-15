package com.example.backend.repo;

import com.example.backend.domain.place.Pin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PinRepo extends JpaRepository<Pin,Long> {
}
