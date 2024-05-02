//package com.example.admindriveeasespring.controller;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//@CrossOrigin(origins = "http://localhost:5173")
//public class CompanyController {
//
//}

package com.example.admindriveeasespring.controller;

import com.example.admindriveeasespring.model.Company;
import com.example.admindriveeasespring.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/")
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        Company savedCompany = companyService.saveCompany(company);
        return new ResponseEntity<>(savedCompany, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @GetMapping("/{companyId}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("companyId") String companyId) {
        Optional<Company> optionalCompany = companyService.getCompanyById(companyId);
        return optionalCompany.map(company -> new ResponseEntity<>(company, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{companyId}")
    public ResponseEntity<Company> updateCompany(@PathVariable("companyId") String companyId, @RequestBody Company company) {
        Company updatedCompany = companyService.updateCompany(companyId, company);
        return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
    }

    @DeleteMapping("/{companyId}")
    public ResponseEntity<HttpStatus> deleteCompany(@PathVariable("companyId") String companyId) {
        companyService.deleteCompany(companyId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
