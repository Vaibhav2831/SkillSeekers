package com.cdac.dayToDayServices.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	private String recipientsName;
	private String recipientsPhone;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String postalCode;
	private String state;
	private String country;

	@OneToMany(mappedBy = "address" , cascade = CascadeType.REMOVE)
	private List<ServiceDetails> details;

	public Address() {

	}

	public Address(int id, User user, String recipientsName, String recipientsPhone, String addressLine1,
			String addressLine2, String city, String postalCode, String state, String country) {
		this.id = id;
		this.user = user;
		this.recipientsName = recipientsName;
		this.recipientsPhone = recipientsPhone;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.postalCode = postalCode;
		this.state = state;
		this.country = country;
	}

	public Address(User user, String recipientsName, String recipientsPhone, String addressLine1, String addressLine2,
			String city, String postalCode, String state, String country) {
		this.user = user;
		this.recipientsName = recipientsName;
		this.recipientsPhone = recipientsPhone;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.postalCode = postalCode;
		this.state = state;
		this.country = country;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getRecipientsName() {
		return recipientsName;
	}

	public void setRecipientsName(String recipientsName) {
		this.recipientsName = recipientsName;
	}

	public String getRecipientsPhone() {
		return recipientsPhone;
	}

	public void setRecipientsPhone(String recipientsPhone) {
		this.recipientsPhone = recipientsPhone;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return String.format(
				"Address [id=%s, user=%s, recipientsName=%s, recipientsPhone=%s, addressLine1=%s, addressLine2=%s, city=%s, postalCode=%s, state=%s, country=%s]",
				id, user, recipientsName, recipientsPhone, addressLine1, addressLine2, city, postalCode, state,
				country);
	}

}
