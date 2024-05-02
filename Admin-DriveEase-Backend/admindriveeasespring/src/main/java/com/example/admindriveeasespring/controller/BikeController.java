//package com.example.admindriveeasespring.controller;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@CrossOrigin(origins="*")
//@RequestMapping("api/bikes")
//public class BikeController {
//}

package com.example.admindriveeasespring.controller;

import com.example.admindriveeasespring.model.Bike;
import com.example.admindriveeasespring.service.BikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bikes")
public class BikeController {

    @Autowired
    private BikeService bikeService;

    @PostMapping("/")
    public ResponseEntity<Bike> createBike(@RequestBody Bike bike) {
        Bike savedBike = bikeService.saveBike(bike);
        return new ResponseEntity<>(savedBike, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Bike>> getAllBikes() {
        List<Bike> bikes = bikeService.getAllBikes();
        return new ResponseEntity<>(bikes, HttpStatus.OK);
    }

    @GetMapping("/{bikeId}")
    public ResponseEntity<Bike> getBikeById(@PathVariable("bikeId") String bikeId) {
        Optional<Bike> optionalBike = bikeService.getBikeById(bikeId);
        return optionalBike.map(bike -> new ResponseEntity<>(bike, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{bikeId}")
    public ResponseEntity<Bike> updateBike(@PathVariable("bikeId") String bikeId, @RequestBody Bike bike) {
        Bike updatedBike = bikeService.updateBike(bikeId, bike);
        return new ResponseEntity<>(updatedBike, HttpStatus.OK);
    }

    @DeleteMapping("/{bikeId}")
    public ResponseEntity<HttpStatus> deleteBike(@PathVariable("bikeId") String bikeId) {
        bikeService.deleteBike(bikeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
