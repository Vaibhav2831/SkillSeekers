package com.cdac.dayToDayServices.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dayToDayServices.entities.User;
import com.cdac.dayToDayServices.models.ChangePasswordRequest;
import com.cdac.dayToDayServices.models.Credential;
import com.cdac.dayToDayServices.models.Response;
import com.cdac.dayToDayServices.services.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
@SuppressWarnings("rawtypes")
public class UserController {
	@Autowired
	private UserService service;

	@PostMapping("/signUp")
	public ResponseEntity signUp(@RequestBody User user) {
		user.setStatus("ACTIVE");
		try {
			return Response.success(service.addUser(user));
		} catch (Exception e) {
			e.printStackTrace();
			
			return Response.error("Something went wrong !!!");
		}
	}

	@PostMapping("/signIn")
	public ResponseEntity signin(@RequestBody Credential credential) {
		User user = service.getUserByEmailAndPassword(credential.getEmail(), credential.getPassword());
		if (user != null) {
			return Response.success(user);
		} else
			return Response.error("Incorrect email/password !!!");
	}

	
	@PostMapping("/changePassword")
	public ResponseEntity changePassword(@RequestBody ChangePasswordRequest passwordRequest) {
		User user = service.updatePassword(passwordRequest);
		if (user != null) {
			return Response.success(user);
		} else
			return Response.error("Password not Updated !!!");
	}

	
	@PostMapping("/addAll")
	public ResponseEntity addAll(@RequestBody List<User> users) {
		users.forEach(user -> user.setStatus("ACTIVE"));
		try {
			return Response.success(service.addAll(users));
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error("Something went wrong !!!");
		}
	}
	
	@GetMapping("/getAll")
	public ResponseEntity getAll() {
		List<User> allUsers = service.getAll();
		if(allUsers != null && !allUsers.isEmpty()) {
			return Response.success(allUsers);
		} else {
			return Response.error("Something went wrong !!!");
		}
	}
	
	@DeleteMapping("/delete/{userId}")
	public ResponseEntity deleteUser(@PathVariable int userId) {
		service.deleteById(userId);
		return Response.success("Delete user called successfully !!!");
	}
}
