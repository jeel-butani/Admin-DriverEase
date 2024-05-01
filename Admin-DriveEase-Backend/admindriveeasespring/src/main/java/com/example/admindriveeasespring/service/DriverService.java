//package com.example.admindriveeasespring.service;
//
//public class DriverService {
//}

package com.example.admindriveeasespring.service;

import com.example.admindriveeasespring.model.Driver;
import com.example.admindriveeasespring.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepository;

    public Driver saveDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    public Optional<Driver> getDriverById(String driverId) {
        return driverRepository.findById(driverId);
    }

    public Driver updateDriver(String driverId, Driver driver) {
        driver.setDriverId(driverId);
        return driverRepository.save(driver);
    }

    public void deleteDriver(String driverId) {
        driverRepository.deleteById(driverId);
    }
}
