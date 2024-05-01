package com.example.admindriveeasespring.repository;//package com.example.admindriveeasespring.repository;
//
//public interface UserRepository {
//}

import com.example.admindriveeasespring.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String name);
    List<User> findByEmail(String email);
    List<User> findByPhoneNumber(String phoneNumber);
    List<User> findByLocation(String location);
    List<User> findByAadharCard(String aadharCard);
    int countByPhoneNumber(String phoneNumber);
}
