package com.example.backend.controller;

import com.example.backend.entity.UserEntity;
import com.example.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/hospital")
public class AuthController {

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    AuthService authService;

    @PostMapping("/register")
    public void registerUser(@RequestBody UserEntity userDetails)
    {
        userDetails.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        authService.registerUser(userDetails);
    }

    @PostMapping("/login")
    public Map<String, String> loginUser(@RequestBody UserEntity user)
    {
        Map<String,String> respone=new HashMap<>();

        respone.put("accessToken", authService.loginUser(user));
        return respone;
    }

    @GetMapping("/verify")
    public String verify()
    {
        return "Success";
    }
}
