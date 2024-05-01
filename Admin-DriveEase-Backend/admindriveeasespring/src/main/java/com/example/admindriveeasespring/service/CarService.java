package com.example.admindriveeasespring.service;

import com.example.admindriveeasespring.model.Car;
import com.example.admindriveeasespring.repository.CarRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public Car saveCar(Car car) {
        return carRepository.save(car);
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Optional<Car> getCarById(String id) {
        return carRepository.findById(new ObjectId(id));
    }

    public Car updateCar(String id, Car car) {
        car.setId(new ObjectId(id));
        return carRepository.save(car);
    }

    public void deleteCar(String id) {
        carRepository.deleteById(new ObjectId(id));
    }
}
