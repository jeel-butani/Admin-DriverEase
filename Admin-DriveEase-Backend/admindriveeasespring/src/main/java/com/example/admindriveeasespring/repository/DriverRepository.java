//package com.example.admindriveeasespring.repository;
//
//public interface DriverRepository {
//}

package com.example.admindriveeasespring.repository;

import com.example.admindriveeasespring.model.Driver;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DriverRepository extends MongoRepository<Driver, String> {
    List<Driver> findByName(String name);
    List<Driver> findByLocation(String location);
    List<Driver> findByTypeOfVehicle(String typeOfVehicle);
    List<Driver> findByPriceLessThan(double price);
    int countByLocation(String location);
}
