package com.example.backend.service;


import com.example.backend.domain.place.Favorite;
import com.example.backend.domain.place.Pin;
import com.example.backend.domain.place.Place;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.BadgeDto;
import com.example.backend.dto.FavoriteDto;
import com.example.backend.dto.PinDto;
import com.example.backend.repo.FavoriteRepo;
import com.example.backend.repo.PinRepo;
import com.example.backend.repo.PlaceRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PinService {
    private final PinRepo pinRepo;
    private final PlaceRepo placeRepo;
    private final FavoriteRepo favoriteRepo;

    @Transactional
    public void write(AppUser user, PinDto.PostRequest dto){
        Place place = placeRepo.findById(dto.getPlaceId()).orElseThrow();
        Pin pin =dto.toEntity(user,place);
        pinRepo.save(pin);
    }

    @Transactional
    public void addFavorite(AppUser user, FavoriteDto.PostRequest dto){

        Pin pin = pinRepo.findById(dto.getPinId()).orElseThrow();
        Favorite favorite = dto.toEntity(user,pin);
        favoriteRepo.save(favorite);
    }

    @Transactional
    public List<PinDto.Response> getMyPin(AppUser user) {

        return pinRepo.findByUser(user)
                .stream()
                .map(pin -> new PinDto.Response(
                        pin
                )).collect(Collectors.toList());
    }

    @Transactional
    public List<FavoriteDto.Response> getMyFavoritePin(AppUser user) {

        return favoriteRepo.findByUser(user)
                .stream()
                .map(favorite -> new FavoriteDto.Response(
                        favorite
                )).collect(Collectors.toList());
    }



}
