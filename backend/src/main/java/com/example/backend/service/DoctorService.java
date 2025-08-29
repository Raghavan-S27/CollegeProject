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

    public void updateDoctorDetails(Long id, DoctorEntity doctorDetails) {

        if(doctorRepository.existsById(id))
        {
            DoctorEntity existingDoctor=doctorRepository.findById(id).orElseThrow();

            existingDoctor.setEmail(doctorDetails.getEmail());
            existingDoctor.setDegree(doctorDetails.getDegree());
            existingDoctor.setGender(doctorDetails.getGender());
            existingDoctor.setExperienceYears(doctorDetails.getExperienceYears());
            existingDoctor.setSpecialization(doctorDetails.getSpecialization());
            existingDoctor.setPhoneNumber(doctorDetails.getPhoneNumber());
            existingDoctor.setName(doctorDetails.getName());

            doctorRepository.save(existingDoctor);
        }

    }

    public List<DoctorEntity> fetchDoctorsBySpl(String specialization) {
        return doctorRepository.findBySpecialization(specialization);
    }

    public List<DoctorEntity> searchDoctors(String keyword) {
        return doctorRepository.searchDoctors(keyword);
    }
}
