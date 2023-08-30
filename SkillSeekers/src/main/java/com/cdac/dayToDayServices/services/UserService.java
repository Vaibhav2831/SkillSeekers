package com.cdac.dayToDayServices.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dayToDayServices.entities.User;
import com.cdac.dayToDayServices.models.ChangePasswordRequest;
import com.cdac.dayToDayServices.repositories.UserRepository;

@Service
//Spring service component
public class UserService {
	@Autowired
	//automatically injected by Spring using the @Autowired annotation
	private UserRepository repository;

	public User getUserByEmailAndPassword(String email, String password) {
		return repository.findByEmailAndPassword(email, password);
	}

	public User addUser(User user) {
		return repository.save(user);
	}

	public User updatePassword(ChangePasswordRequest passwordRequest) {
		User user = repository.findById(passwordRequest.getUserId()).orElse(null);
		if (user != null && user.getPassword().equals(passwordRequest.getOldPassword())) {
			user.setPassword(passwordRequest.getNewPassword());
			return repository.save(user);
		} else
			return null;
	}

	public List<User> addAll(List<User> users) {
		return repository.saveAll(users);
	}

	public List<User> getAll(){
		return repository.findAll();
	}
	
	public void deleteById(int userId) {
		 repository.deleteById(userId);
	}
}
