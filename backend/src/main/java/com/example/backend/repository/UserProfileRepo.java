package com.example.backend.repository;

import com.example.backend.entity.UserProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepo extends JpaRepository<UserProfileEntity,Long> {

}
