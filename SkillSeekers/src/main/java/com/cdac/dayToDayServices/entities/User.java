package com.cdac.dayToDayServices.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String firstName;
	private String lastName;
	@Column(unique = true)
	private String email;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	private String role;
	private String status;
	@OneToOne(mappedBy = "user", cascade = CascadeType.REMOVE)
	private ServiceMan serviceMan;
	@OneToMany(mappedBy = "customer", cascade = CascadeType.REMOVE)
	private List<ServiceDetails> serviceDetails;
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Address> addresses;

	public User() {

	}

	public User(int id, String firstName, String lastName, String email, String password, String role, String status) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return String.format("User [id=%s, firstName=%s, lastName=%s, email=%s, password=%s, role=%s, status=%s]", id,
				firstName, lastName, email, password, role, status);
	}

}