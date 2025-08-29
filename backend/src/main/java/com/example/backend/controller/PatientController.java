package com.example.backend.controller;

import com.example.backend.entity.PatientEntity;
import com.example.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/hospital")
public class PatientController {

    @Autowired
    PatientService patientService;

    @PostMapping("/savepatientdetails")
    public void savePatientDetails(@RequestBody PatientEntity patientDetails)
    {
        patientService.savePatientDetails(patientDetails);
    }

    @GetMapping("/getpatientdetails")
    public List<PatientEntity> getPatientDetails()
    {
        return patientService.getPatientDetails();
    }

    @DeleteMapping("/deletepatient/{id}")
    public void deletePatient(@PathVariable Long id)
    {
        patientService.deletePatient(id);
    }
}
