package com.example.backend.service;

import com.example.backend.entity.UserEntity;
import com.example.backend.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    AuthRepository authRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    UserProfileService userProfileService;

    public void registerUser(UserEntity userDetails) {

        UserEntity savedUser=authRepository.save(userDetails);
        userProfileService.createProfile(savedUser.getEmail(),savedUser.getUsername());
    }

    public String loginUser(UserEntity user) {

        Authentication authentication=authManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail()
                        ,user.getPassword()));

        if (authentication.isAuthenticated())
        {
           return jwtService.generateToken(user.getEmail());
        }
        return "Failed";
    }

    public UserEntity findUserByEmail(String email) {
        return authRepository.findByEmail(email);
    }
}
