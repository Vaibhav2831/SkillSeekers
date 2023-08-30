package com.cdac.dayToDayServices.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.dayToDayServices.entities.ServiceMan;

public interface ServiceManRepository extends JpaRepository<ServiceMan, Integer> {
	ServiceMan findByUserId(int userId);
	List<ServiceMan> findByTitleContainingOrDescriptionContainingOrUserFirstNameContainingOrUserLastNameContaining(String title,String description,String firstName,String lastName);
}
