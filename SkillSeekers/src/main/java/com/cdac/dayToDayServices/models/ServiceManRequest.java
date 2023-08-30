package com.cdac.dayToDayServices.models;

import org.springframework.stereotype.Component;

@Component
// marks a class as a Spring component that can be auto-detected and registered as a bean in the Spring application context
public class ServiceManRequest {
	private String title;
	private String description;
	private double avgCost;
	private int userId;

	public ServiceManRequest() {
		// TODO Auto-generated constructor stub
	}

	public ServiceManRequest(String title, String description, double avgCost, int userId) {
		this.title = title;
		this.description = description;
		this.avgCost = avgCost;
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getAvgCost() {
		return avgCost;
	}

	public void setAvgCost(double avgCost) {
		this.avgCost = avgCost;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return String.format("ServiceManRequest [title=%s, description=%s, avgCost=%s, userId=%s]", title, description,
				avgCost, userId);
	}

}
