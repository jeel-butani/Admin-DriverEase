//package com.example.admindriveeasespring.repository;
//
//public interface CompanyRepository {
//}

package com.example.admindriveeasespring.repository;

import com.example.admindriveeasespring.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
    List<Company> findByCompanyName(String companyName);
    List<Company> findByGstNumber(String gstNumber);
    List<Company> findByEmail(String email);
    List<Company> findByOwnerName(String ownerName);
    List<Company> findByLocation(String location);
    int countByLocation(String location);
}
