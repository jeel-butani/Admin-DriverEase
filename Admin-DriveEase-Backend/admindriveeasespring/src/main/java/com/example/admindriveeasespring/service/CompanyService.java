//package com.example.admindriveeasespring.service;
//
//public class CompanyService {
//}

package com.example.admindriveeasespring.service;

import com.example.admindriveeasespring.model.Company;
import com.example.admindriveeasespring.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> getCompanyById(String companyId) {
        return companyRepository.findById(companyId);
    }

    public Company updateCompany(String companyId, Company company) {
        company.setCompanyId(companyId);
        return companyRepository.save(company);
    }

    public void deleteCompany(String companyId) {
        companyRepository.deleteById(companyId);
    }
}
