package com.example.backend.service;

import com.example.backend.entity.PatientEntity;
import com.example.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;

    public void savePatientDetails(PatientEntity patientDetails) {
        patientRepository.save(patientDetails);
    }

    public List<PatientEntity> getPatientDetails() {
        return patientRepository.findAll();
    }

    public void deletePatient(Long id) {

        if(patientRepository.existsById(id))
        {
            patientRepository.deleteById(id);
        }
        else
        {
            throw new RuntimeException("Patient Not Found");
        }
    }
}
