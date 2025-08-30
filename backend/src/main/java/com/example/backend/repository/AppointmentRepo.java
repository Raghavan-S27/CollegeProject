package com.example.backend.repository;

import com.example.backend.entity.AppointmentEntity;
import com.example.backend.entity.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepo extends JpaRepository<AppointmentEntity,Long> {
   
}
