package com.example.backend.service;

import com.example.backend.domain.place.Place;
import com.example.backend.dto.PlaceDto;
import com.example.backend.repo.PlaceRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PlaceService {

    private final PlaceRepo placeRepo;

    public Place registerPlace(PlaceDto.PostRequest dto){

        Place place = dto.toEntity();
        Place newPlace = placeRepo.save(place);
        return newPlace;



    }
    @Transactional
    public void delete(Long place_id){
        placeRepo.deleteById(place_id);
    }
}
