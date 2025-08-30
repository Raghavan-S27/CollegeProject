package com.example.backend.controller;

import com.example.backend.entity.UserProfileEntity;
import com.example.backend.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/hospital")
public class UserProfileCont {

    @Autowired
    UserProfileService userProfileService;

//    @PostMapping("/userprofiledetails")
//    public void saveUserProfileDetails(@RequestBody UserProfileEntity userProfile)
//    {
//        userProfileService.saveUserProfile(userProfile);
//    }

    @PutMapping("/updateuserprofile")
    public UserProfileEntity updateUserProfileDetails(@RequestBody UserProfileEntity userProfile)
    {
        return userProfileService.updateUserProfile(userProfile);
    }


}
