package com.example.backend.service;

import com.example.backend.entity.AppointmentEntity;
import com.example.backend.entity.DoctorEntity;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.AppointmentRepo;
import com.example.backend.repository.DoctorRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
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


    public void saveAppointments(String doctorName,AppointmentEntity appointmentData) {

        DoctorEntity doctor = doctorRepository.findByName(doctorName);
        System.out.println();
        System.out.println(doctor);
        appointmentData.setDoctor(doctor);

        appointmentRepo.save(appointmentData);
    }

//    public List<AppointmentEntity> fetchAppointments(AppointmentEntity appointment) {
//
//        UserEntity doctor =appointment.getDoctor();
//
//        List<AppointmentEntity>appointmentByDoctor=appointmentRepo.findByDoctor(doctor);
//
//        return appointmentByDoctor;
//    }
}
