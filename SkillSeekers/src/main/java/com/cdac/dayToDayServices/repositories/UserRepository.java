package com.cdac.dayToDayServices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.dayToDayServices.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmailAndPassword(String email,String password);
}
//defines a custom method for retrieving a User entity based on  email and password.
/*Spring Data will generate a SQL query that selects a User entity where 
the email and password columns match the provided parameters.*/