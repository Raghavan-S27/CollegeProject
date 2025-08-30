package com.example.backend.controller;

import com.example.backend.entity.AppointmentEntity;
import com.example.backend.entity.DoctorEntity;
import com.example.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/hospital")
public class AppointmentsCont {

    @Autowired
    AppointmentService appointmentService;

//    @PostMapping("/fetchappointments")
//    public List<AppointmentEntity> fetchAppointments(@RequestBody AppointmentEntity appointment)
//    {
//
//        System.out.println("Details: "+appointmentService.fetchAppointments(appointment));
//        return appointmentService.fetchAppointments(appointment);
//    }


    @PostMapping("/saveappointments/{doctorname}")
    public void SaveAppointments(@PathVariable String doctorname,@RequestBody AppointmentEntity appointmentData)
    {
        appointmentService.saveAppointments(doctorname,appointmentData);
    }
}
