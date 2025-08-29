package com.example.backend.service;

import com.example.backend.entity.AppointmentEntity;
import com.example.backend.entity.DoctorEntity;
import com.example.backend.repository.AppointmentRepo;
import com.example.backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepo appointmentRepo;

    @Autowired
    DoctorRepository doctorRepository;

    public List<AppointmentEntity> fetchAppointments(DoctorEntity doctorDetails) {
        DoctorEntity DoctorByDept=doctorRepository.findByNameAndSpecialization
                (doctorDetails.getName(),doctorDetails.getSpecialization());

        List<AppointmentEntity> doctorInAppointment=appointmentRepo.findByDoctor(DoctorByDept);
        return doctorInAppointment;
    }
}
