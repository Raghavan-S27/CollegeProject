package com.example.backend.service;

import com.example.backend.entity.DoctorEntity;
import com.example.backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    public void saveDoctorDetails(DoctorEntity doctordetails) {
        doctorRepository.save(doctordetails);
    }

    public List<DoctorEntity> getDoctorDetails() {
        return doctorRepository.findAll();
    }

    public void deleteDoctorDetails(Long id) {

        if(doctorRepository.existsById(id))
        {
            doctorRepository.deleteById(id);
        }
        else {
            throw new RuntimeException("Doctor Not Found");
        }
    }
}
