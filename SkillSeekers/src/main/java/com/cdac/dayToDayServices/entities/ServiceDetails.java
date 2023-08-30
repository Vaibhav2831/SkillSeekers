package com.cdac.dayToDayServices.entities;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "serviceDetails")
public class ServiceDetails {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String serviceDescription;
	private double serviceCost;
	private String paymentType;
	private String paymentStatus;
	private String status;
	private boolean isSatisfied;
	@ManyToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "id")
	private User customer;
	@ManyToOne
	@JoinColumn(name = "customer_address_id", referencedColumnName = "id")
	private Address address;
	@ManyToOne
	@JoinColumn(name = "service_man_id", referencedColumnName = "id")
	private ServiceMan serviceMan;
	@Column(nullable = false, updatable = false)
	@CreationTimestamp
	private Date createdTimestamp;

	public ServiceDetails() {
		// TODO Auto-generated constructor stub
	}

	public ServiceDetails(int id, String serviceDescription, double serviceCost, String paymentType,
			String paymentStatus, String status, boolean isSatisfied, User customer, Address address,
			ServiceMan serviceMan, Date createdTimestamp) {
		this.id = id;
		this.serviceDescription = serviceDescription;
		this.serviceCost = serviceCost;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.status = status;
		this.isSatisfied = isSatisfied;
		this.customer = customer;
		this.address = address;
		this.serviceMan = serviceMan;
		this.createdTimestamp = createdTimestamp;
	}

	public ServiceDetails(String serviceDescription, double serviceCost, String paymentType, String paymentStatus,
			String status, boolean isSatisfied, User customer, Address address, ServiceMan serviceMan,
			Date createdTimestamp) {
		this.serviceDescription = serviceDescription;
		this.serviceCost = serviceCost;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.status = status;
		this.isSatisfied = isSatisfied;
		this.customer = customer;
		this.address = address;
		this.serviceMan = serviceMan;
		this.createdTimestamp = createdTimestamp;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getServiceDescription() {
		return serviceDescription;
	}

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}

	public double getServiceCost() {
		return serviceCost;
	}

	public void setServiceCost(double serviceCost) {
		this.serviceCost = serviceCost;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public boolean isSatisfied() {
		return isSatisfied;
	}

	public void setSatisfied(boolean isSatisfied) {
		this.isSatisfied = isSatisfied;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public ServiceMan getServiceMan() {
		return serviceMan;
	}

	public void setServiceMan(ServiceMan serviceMan) {
		this.serviceMan = serviceMan;
	}

	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	@Override
	public String toString() {
		return String.format(
				"ServiceDetails [id=%s, serviceDescription=%s, serviceCost=%s, paymentType=%s, paymentStatus=%s, status=%s, isSatisfied=%s, customer=%s, address=%s, serviceMan=%s, createdTimestamp=%s]",
				id, serviceDescription, serviceCost, paymentType, paymentStatus, status, isSatisfied, customer, address,
				serviceMan, createdTimestamp);
	}

}
