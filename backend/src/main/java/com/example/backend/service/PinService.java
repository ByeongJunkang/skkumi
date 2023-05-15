package com.example.backend.service;


import com.example.backend.domain.place.Pin;
import com.example.backend.domain.place.Place;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.PinDto;
import com.example.backend.repo.PinRepo;
import com.example.backend.repo.PlaceRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PinService {
    private final PinRepo pinRepo;
    private final PlaceRepo placeRepo;

    @Transactional
    public void write(AppUser user, PinDto.PostRequest dto){
        Place place = placeRepo.findById(dto.getPlaceId()).orElseThrow();
        Pin pin =dto.toEntity(user,place);
        pinRepo.save(pin);

    }

}
