package com.example.admindriveeasespring.model;

//public class Car {
//}

//package com.example.driveease.beans;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "cars")
public class Car {
    @Id
    private ObjectId id;

    @NotBlank(message = "Car name is mandatory")
    @Field(name = "car_name")
    private String carName;

    @NotBlank(message = "Fuel type is mandatory")
    @Field(name = "fuel_type")
    private String fuelType;

    @NotBlank(message = "Transmission type is mandatory")
    @Field(name = "transmission_type")
    private String transmissionType;

    @NotBlank(message = "Number of seats is mandatory")
    @Field(name = "seats")
    private String seats;

    @NotBlank(message = "Registration number is mandatory")
    @Field(name = "registration_number")
    private String registrationNumber;

    @NotBlank(message = "Company name is mandatory")
    @Field(name = "company_name")
    private String companyName;

    @NotNull(message = "Amount is mandatory")
    @Field(name = "amount")
    private double amount;

    @NotBlank(message = "URL of car image is mandatory")
    @Field(name = "image_url")
    private String imageUrl;

    @NotNull(message = "Total car count is mandatory")
    @Field(name = "total_count")
    private int totalCount;

    @NotNull(message = "Available car count is mandatory")
    @Field(name = "available_count")
    private int availableCount;

    // Getters and setters

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(String transmissionType) {
        this.transmissionType = transmissionType;
    }

    public String getSeats() {
        return seats;
    }

    public void setSeats(String seats) {
        this.seats = seats;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public int getAvailableCount() {
        return availableCount;
    }

    public void setAvailableCount(int availableCount) {
        this.availableCount = availableCount;
    }
}

