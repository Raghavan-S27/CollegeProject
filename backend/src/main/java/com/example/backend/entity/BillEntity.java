package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class BillEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private int age;
    private String contact;
    private String diagnosis;
    private LocalDate date;

    private double total;

    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL)
    private List<BillItemEntity> items;
}
