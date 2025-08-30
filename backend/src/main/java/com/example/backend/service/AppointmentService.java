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


    public void saveAppointments(String doctorName,AppointmentEntity appointmentData) {

        DoctorEntity doctor = doctorRepository.findByName(doctorName);

        appointmentData.setDoctor(doctor);
        String loggedInUsername = SecurityContextHolder.getContext().getAuthentication().getName();


        UserEntity appliedUser = userRepository.findByEmail(loggedInUsername);


        appointmentData.setUser(appliedUser);
        appointmentRepo.save(appointmentData);
    }

    public List<AppointmentEntity> getAppliedUserDetails() {

        String currentlyLoggedInUser=SecurityContextHolder.getContext().getAuthentication().getName();

        UserEntity user=userRepository.findByEmail(currentlyLoggedInUser);
        return appointmentRepo.findByUser(user);
    }

    public List<AppointmentEntity> fetchAppointmentsTime(AppointmentEntity appointment) {

        DoctorEntity doctor=appointment.getDoctor();
        String date=appointment.getDate();

        return appointmentRepo.findByDoctorAndDate(doctor,date);

    }

}
