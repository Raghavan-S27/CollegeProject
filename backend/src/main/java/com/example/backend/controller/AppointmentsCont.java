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

    @PostMapping("/fetchappointmentstime")
    public List<AppointmentEntity> fetchAppointmentsTime(@RequestBody AppointmentEntity appointment)
    {

        return appointmentService.fetchAppointmentsTime(appointment);
    }


    @PostMapping("/saveappointments/{doctorname}")
    public void SaveAppointments(@PathVariable String doctorname,@RequestBody AppointmentEntity appointmentData)
    {
        appointmentService.saveAppointments(doctorname,appointmentData);
    }

    @GetMapping("/fetchappliedusers")
    public List<AppointmentEntity> getAppliedUser()
    {
        return appointmentService.getAppliedUserDetails();
    }
}
