package com.example.backend.repo;

import com.example.backend.domain.place.Pin;
import com.example.backend.domain.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PinRepo extends JpaRepository<Pin,Long> {


    List<Pin> findByUser(AppUser user);

}
