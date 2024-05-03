//package com.example.admindriveeasespring.model;
//
//public class User {
//}


package com.example.admindriveeasespring.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:5173")
@Document(collection = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String userId;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Birthdate is mandatory")
    private String birthdate;

    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is mandatory")
    private String email;

    @Pattern(regexp="[0-9]{10}", message="Phone number should be 10 digits")
    private String phoneNumber;

    private String location;

    @Pattern(regexp="[0-9]{12}", message="Aadhar card should be 12 digits")
    private String aadharCard;

    private String aadharCardImageUrl;

    @NotBlank(message = "Password is mandatory")
    private String password;

    // getters and setters

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAadharCard() {
        return aadharCard;
    }

    public void setAadharCard(String aadharCard) {
        this.aadharCard = aadharCard;
    }

    public String getAadharCardImageUrl() {
        return aadharCardImageUrl;
    }

    public void setAadharCardImageUrl(String aadharCardImageUrl) {
        this.aadharCardImageUrl = aadharCardImageUrl;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
