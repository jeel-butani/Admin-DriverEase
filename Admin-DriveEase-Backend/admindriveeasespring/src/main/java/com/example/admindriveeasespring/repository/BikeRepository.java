package com.example.admindriveeasespring.repository;
//
//public interface BikeRepository {
//}

import com.example.admindriveeasespring.model.Bike;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BikeRepository extends MongoRepository<Bike, String> {
    List<Bike> findByBikeName(String bikeName);
    List<Bike> findByFuelType(String fuelType);
    List<Bike> findByTransmissionType(String transmissionType);
    List<Bike> findByCompanyName(String companyName);
    List<Bike> findByAmountLessThan(double amount);
    List<Bike> findByAvailableCountGreaterThan(int count);
    int countByCompanyName(String companyName);
}
