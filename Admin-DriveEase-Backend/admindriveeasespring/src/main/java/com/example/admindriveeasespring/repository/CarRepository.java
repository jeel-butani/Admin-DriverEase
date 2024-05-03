package com.example.admindriveeasespring.repository;

//public class CarRepository {
//}


import com.example.admindriveeasespring.model.Car;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository extends MongoRepository<Car, ObjectId> {
    List<Car> findByCarName(String carName);
    List<Car> findByFuelType(String fuelType);
    List<Car> findByTransmissionType(String transmissionType);
    List<Car> findByCompanyName(String companyName);
    List<Car> findByAmountLessThan(double amount);
    List<Car> findByAvailableCountGreaterThan(int count);
    int countByAvailableCountGreaterThan(int count);
}
