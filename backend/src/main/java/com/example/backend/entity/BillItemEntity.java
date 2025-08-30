package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
public class BillItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private double amount;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private BillEntity bill;
}
