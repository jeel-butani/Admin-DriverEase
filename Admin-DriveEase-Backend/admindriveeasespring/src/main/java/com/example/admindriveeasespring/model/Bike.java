//package com.example.admindriveeasespring.model;
//
//public class Bike {
//}

package com.example.admindriveeasespring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.*;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@Entity
@Data
@Document(collection = "bikes")
public class Bike {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String bikeId;

    @NotBlank(message = "Bike name is mandatory")
    private String bikeName;

    @NotBlank(message = "Fuel type is mandatory")
    private String fuelType;

    @NotBlank(message = "Transmission type is mandatory")
    private String transmissionType;

    @NotBlank(message = "Number of seats is mandatory")
    private String seats;

    @NotBlank(message = "Registration number is mandatory")
    private String registrationNumber;

    @NotBlank(message = "Company name is mandatory")
    private String companyName;

    @NotNull(message = "Amount is mandatory")
    private double amount;

    @NotBlank(message = "URL of bike image is mandatory")
    private String imageUrl;

    @NotNull(message = "Total bike count is mandatory")
    private int totalCount;

    @NotNull(message = "Available bike count is mandatory")
    private int availableCount;

    // Getters and setters

    public String getBikeId() {
        return bikeId;
    }

    public void setBikeId(String bikeId) {
        this.bikeId = bikeId;
    }

    public String getBikeName() {
        return bikeName;
    }

    public void setBikeName(String bikeName) {
        this.bikeName = bikeName;
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
