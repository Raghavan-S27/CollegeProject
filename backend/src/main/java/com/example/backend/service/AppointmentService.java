package com.example.backend.service;

import com.example.backend.entity.AppointmentEntity;
import com.example.backend.entity.DoctorEntity;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.AppointmentRepo;
import com.example.backend.repository.DoctorRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepo appointmentRepo;

    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    UserRepository userRepository;

//    public List<AppointmentEntity> fetchAppointments(DoctorEntity doctorDetails) {
//        DoctorEntity DoctorByDept=doctorRepository.findByNameAndSpecialization
//                (doctorDetails.getName(),doctorDetails.getSpecialization());
//
//        List<AppointmentEntity> doctorInAppointment=appointmentRepo.findByDoctor(DoctorByDept);
//        return doctorInAppointment;
//    }


    public void saveAppointments(AppointmentEntity appointmentData) {

        String currentlyLoggedInDoctor= SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity currentDoctor= userRepository.findByEmail(currentlyLoggedInDoctor);
        System.out.println("Doctor From backend:"+currentDoctor);
        appointmentData.setDoctor(currentDoctor);
        System.out.println("Doctor: "+appointmentData.getDoctor());
        appointmentRepo.save(appointmentData);
    }
}
