package com.cdac.dayToDayServices.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "serviceMan")
public class ServiceMan {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String title;
	private String description;
	private double avgCost;
	@OneToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id",nullable = false)
	private User user;
	@OneToMany(mappedBy = "serviceMan")
	private List<ServiceDetails> serviceDetails;

	public ServiceMan() {

	}

	public ServiceMan(int id, String title, String description, double avgCost, User user) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.avgCost = avgCost;
		this.user = user;
	}

	public ServiceMan(String title, String description, double avgCost, User user) {
		this.title = title;
		this.description = description;
		this.avgCost = avgCost;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return String.format("ServiceMan [id=%s, title=%s, description=%s, avgCost=%s, user=%s]", id, title,
				description, avgCost, user);
	}

}
