package com.example.backend.repo;

import com.example.backend.domain.place.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepo extends JpaRepository<Place,Long> {
}
