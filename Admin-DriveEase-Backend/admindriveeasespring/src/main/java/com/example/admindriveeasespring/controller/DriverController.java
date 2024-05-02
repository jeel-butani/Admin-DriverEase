//package com.example.admindriveeasespring.controller;
//
//public class DriverController {
//}

package com.example.admindriveeasespring.controller;

import com.example.admindriveeasespring.model.Driver;
import com.example.admindriveeasespring.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/drivers")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping("/")
    public ResponseEntity<Driver> createDriver(@RequestBody Driver driver) {
        Driver savedDriver = driverService.saveDriver(driver);
        return new ResponseEntity<>(savedDriver, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Driver>> getAllDrivers() {
        List<Driver> drivers = driverService.getAllDrivers();
        return new ResponseEntity<>(drivers, HttpStatus.OK);
    }

    @GetMapping("/{driverId}")
    public ResponseEntity<Driver> getDriverById(@PathVariable("driverId") String driverId) {
        Optional<Driver> optionalDriver = driverService.getDriverById(driverId);
        return optionalDriver.map(driver -> new ResponseEntity<>(driver, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{driverId}")
    public ResponseEntity<Driver> updateDriver(@PathVariable("driverId") String driverId, @RequestBody Driver driver) {
        Driver updatedDriver = driverService.updateDriver(driverId, driver);
        return new ResponseEntity<>(updatedDriver, HttpStatus.OK);
    }

    @DeleteMapping("/{driverId}")
    public ResponseEntity<HttpStatus> deleteDriver(@PathVariable("driverId") String driverId) {
        driverService.deleteDriver(driverId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
