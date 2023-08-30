package com.cdac.dayToDayServices.models;

import org.springframework.stereotype.Component;

@Component
public class ServiceDetailsRequest {
	private int serviceDetailsId;
	private String serviceDescription;
	private double serviceCost;
	private String paymentType;
	private String paymentStatus;
	private String status;
	private boolean isSatisfied;
	private int customerId;
	private int customerAddressId;
	private int serviceManId;

	public ServiceDetailsRequest() {
		// TODO Auto-generated constructor stub
	}

	public ServiceDetailsRequest(int serviceDetailsId, String serviceDescription, double serviceCost,
			String paymentType, String paymentStatus, String status, boolean isSatisfied, int customerId,
			int customerAddressId, int serviceManId) {
		this.serviceDetailsId = serviceDetailsId;
		this.serviceDescription = serviceDescription;
		this.serviceCost = serviceCost;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
		this.status = status;
		this.isSatisfied = isSatisfied;
		this.customerId = customerId;
		this.customerAddressId = customerAddressId;
		this.serviceManId = serviceManId;
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

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getCustomerAddressId() {
		return customerAddressId;
	}

	public void setCustomerAddressId(int customerAddressId) {
		this.customerAddressId = customerAddressId;
	}

	public int getServiceManId() {
		return serviceManId;
	}

	public void setServiceManId(int serviceManId) {
		this.serviceManId = serviceManId;
	}

	public int getServiceDetailsId() {
		return serviceDetailsId;
	}

	public void setServiceDetailsId(int serviceDetailsId) {
		this.serviceDetailsId = serviceDetailsId;
	}

	@Override
	public String toString() {
		return String.format(
				"ServiceDetailsRequest [serviceDetailsId=%s, serviceDescription=%s, serviceCost=%s, paymentType=%s, paymentStatus=%s, status=%s, isSatisfied=%s, customerId=%s, customerAddressId=%s, serviceManId=%s]",
				serviceDetailsId, serviceDescription, serviceCost, paymentType, paymentStatus, status, isSatisfied,
				customerId, customerAddressId, serviceManId);
	}

}
