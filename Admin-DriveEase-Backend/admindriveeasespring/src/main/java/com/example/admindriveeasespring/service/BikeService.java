//package com.example.admindriveeasespring.service;
//
//public class BikeService {
//}

package com.example.admindriveeasespring.service;

import com.example.admindriveeasespring.model.Bike;
import com.example.admindriveeasespring.repository.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BikeService {

    @Autowired
    private BikeRepository bikeRepository;

    public Bike saveBike(Bike bike) {
        return bikeRepository.save(bike);
    }

    public List<Bike> getAllBikes() {
        return bikeRepository.findAll();
    }

    public Optional<Bike> getBikeById(String bikeId) {
        return bikeRepository.findById(bikeId);
    }

    public Bike updateBike(String bikeId, Bike bike) {
        bike.setBikeId(bikeId);
        return bikeRepository.save(bike);
    }

    public void deleteBike(String bikeId) {
        bikeRepository.deleteById(bikeId);
    }
}
