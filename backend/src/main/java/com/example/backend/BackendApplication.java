package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) throws NoSuchAlgorithmException {
		SpringApplication.run(BackendApplication.class, args);

	}

}
