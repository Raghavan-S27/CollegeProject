package com.example.backend.service;

import com.example.backend.entity.UserEntity;
import com.example.backend.entity.UserProfileEntity;
import com.example.backend.repository.UserProfileRepo;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {

    @Autowired
    UserProfileRepo userProfileRepo;

    @Autowired
    UserRepository userRepository;

//    public void saveUserProfile(UserProfileEntity userProfile) {
//
//        userProfileRepo.save(userProfile);
//    }


    public void updateUserProfile(UserProfileEntity userProfile) {
        UserProfileEntity existing = userProfileRepo.findById(userProfile.getId())
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        existing.setName(userProfile.getName());
        existing.setEmail(userProfile.getEmail());
        existing.setPhone(userProfile.getPhone());
        existing.setAge(userProfile.getAge());
        existing.setGender(userProfile.getGender());
        existing.setBloodGroup(userProfile.getBloodGroup());

        userProfileRepo.save(existing);

        UserEntity user = existing.getUser();
        user.setEmail(userProfile.getEmail());
        userRepository.save(user);
    }

    public void createProfile(String email, String username) {

        UserEntity user=userRepository.findByEmail(email);
        UserProfileEntity profile=new UserProfileEntity();
        if (user == null)
            throw new RuntimeException("User not found for email: " + email);

        profile.setUser(user);
        profile.setName(username);
        profile.setEmail(email);

        userProfileRepo.save(profile);
    }
}
