package com.example.backend.repository;

import com.example.backend.entity.AppointmentEntity;
import com.example.backend.entity.DoctorEntity;
import com.example.backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepo extends JpaRepository<AppointmentEntity,Long> {

    List<AppointmentEntity> findByDoctor(UserEntity doctor);

    List<AppointmentEntity> findByUser(UserEntity user);

    List<AppointmentEntity> findByDoctorAndDate(DoctorEntity doctor, String date);
}
