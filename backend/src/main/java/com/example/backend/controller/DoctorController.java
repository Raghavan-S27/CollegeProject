package com.example.backend.controller;

import com.example.backend.entity.DoctorEntity;
import com.example.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
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

    @PutMapping("/updatedoctors/{id}")
    public void updateDoctorDetails(@PathVariable Long id,@RequestBody DoctorEntity doctorDetails)
    {
        doctorService.updateDoctorDetails(id,doctorDetails);
    }

    @DeleteMapping("/deletedoctors/{id}")
    public void deleteDoctors(@PathVariable Long id)
    {
        doctorService.deleteDoctorDetails(id);
    }

    @PostMapping("/doctorbyspecialization/{specialization}")
    public List<DoctorEntity> fetchDoctorsBySpl(@PathVariable String specialization)
    {
        return doctorService.fetchDoctorsBySpl(specialization);
    }

    @PostMapping("/searchdoctors/{keyword}")
    public List<DoctorEntity> searchDoctorDetails(@PathVariable String keyword)
    {
        return doctorService.searchDoctors(keyword);
    }
}
