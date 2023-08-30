package com.cdac.dayToDayServices.models;

public class AddressRequest {
	private int id;
	private int userId;
	private String recipientsName;
	private String recipientsPhone;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String postalCode;
	private String state;
	private String country;

	public AddressRequest() {
	
	}

	public AddressRequest(int id, int userId, String recipientsName, String recipientsPhone, String addressLine1,
			String addressLine2, String city, String postalCode, String state, String country) {
		this.id = id;
		this.userId = userId;
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

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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
				"AddressRequest [id=%s, userId=%s, recipientsName=%s, recipientsPhone=%s, addressLine1=%s, addressLine2=%s, city=%s, postalCode=%s, state=%s, country=%s]",
				id, userId, recipientsName, recipientsPhone, addressLine1, addressLine2, city, postalCode, state,
				country);
	}

}
