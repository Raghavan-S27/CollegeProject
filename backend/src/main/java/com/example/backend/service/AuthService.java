package com.example.backend.service;

import com.example.backend.entity.UserEntity;
import com.example.backend.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    AuthRepository authRepository;
    public void registerUser(UserEntity userDetails) {

        authRepository.save(userDetails);
    }
}
