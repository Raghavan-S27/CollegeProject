package com.example.backend.controller;

import com.example.backend.entity.DoctorEntity;
import com.example.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/hospital")
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @PostMapping("/savedoctors")
    public void saveDoctorDetails(@RequestBody DoctorEntity doctordetails)
    {

        doctorService.saveDoctorDetails(doctordetails);
    }

    @GetMapping("/getdoctors")
    public List<DoctorEntity> getDoctorDetails()
    {
        return doctorService.getDoctorDetails();
    }

    @DeleteMapping("/deletedoctors/{id}")
    public void deleteDoctors(@PathVariable Long id)
    {
        doctorService.deleteDoctorDetails(id);
    }
}
