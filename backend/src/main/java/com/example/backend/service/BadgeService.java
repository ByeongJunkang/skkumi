package com.example.backend.service;

import com.example.backend.domain.mission.Badge;
import com.example.backend.domain.mission.BadgeStatus;
import com.example.backend.domain.user.AppUser;
import com.example.backend.dto.BadgeDto;
import com.example.backend.repo.BadgeRepo;
import com.example.backend.repo.BadgeStatusRepo;
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
public class BadgeService {

    private final BadgeStatusRepo badgeStatusRepo;
    private final BadgeRepo badgeRepo;

    @Transactional
    public void register(AppUser user, BadgeDto.PostRequest dto) {

        Badge badge = badgeRepo.findById(dto.getBadgeId()).orElseThrow();
        BadgeStatus badgeStatus = dto.toEntity(user, badge);
        badgeStatusRepo.save(badgeStatus);

    }

    @Transactional
    public void delete(AppUser user, BadgeDto.PostRequest dto) {

        Badge badge = badgeRepo.findById(dto.getBadgeId()).orElseThrow();
        BadgeStatus badgeStatus = dto.toEntity(user, badge);
        badgeStatusRepo.delete(badgeStatus);

    }


    @Transactional
    public List<BadgeDto.Response> getMyBadge(AppUser user) {

        return badgeStatusRepo.findByUser(user)
                .stream()
                .map(badgeStatus -> new BadgeDto.Response(
                        badgeStatus
                )).collect(Collectors.toList());
    }

}
