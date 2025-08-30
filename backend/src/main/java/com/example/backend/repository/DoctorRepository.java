package com.example.backend.repository;

import com.example.backend.entity.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorEntity,Long> {

    DoctorEntity findByNameAndSpecialization(String name, String specialization);

    List<DoctorEntity> findBySpecialization(String specialization);

    @Query("select d from DoctorEntity d where "+
    "lower(d.name) like lower(concat('%',:keyword,'%')) or "+
    "lower(d.email) like lower(concat('%',:keyword,'%')) or "+
    "lower(d.specialization) like lower(concat('%',:keyword,'%'))")
    List<DoctorEntity> searchDoctors(String keyword);

    DoctorEntity findByEmail(String currentlyLoggedInDoctor);
}
