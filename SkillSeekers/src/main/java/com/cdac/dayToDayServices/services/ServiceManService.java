package com.cdac.dayToDayServices.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dayToDayServices.entities.ServiceMan;
import com.cdac.dayToDayServices.entities.User;
import com.cdac.dayToDayServices.models.SearchRequest;
import com.cdac.dayToDayServices.models.ServiceManRequest;
import com.cdac.dayToDayServices.repositories.ServiceManRepository;
import com.cdac.dayToDayServices.repositories.UserRepository;

@Service
//marks a class as a Spring service that provides business logic and acts as an intermediary between the controller and the repository.
public class ServiceManService {
	@Autowired
	private ServiceManRepository serviceManRepository;
	@Autowired
	private UserRepository userRepository;

	public List<ServiceMan> getAllServiceMan() {
		return serviceManRepository.findAll();
	}

	public ServiceMan getById(int userId) {
		return serviceManRepository.findByUserId(userId);
	}

	public ServiceMan addServiceMan(ServiceManRequest man) {
		User user = userRepository.findById(man.getUserId()).orElse(null);
		ServiceMan serviceMan = new ServiceMan(man.getTitle(), man.getDescription(), man.getAvgCost(), user);
		if (user != null && serviceManRepository.findByUserId(user.getId()) == null
				&& user.getRole().equals("SERVICE_MAN"))
			return serviceManRepository.save(serviceMan);
		return null;
	}

	public List<ServiceMan> addAll(List<ServiceManRequest> serviceMans) {
		List<ServiceMan> list = serviceMans.stream().map(man -> {
			User user = userRepository.findById(man.getUserId()).orElse(null);
			ServiceMan serviceMan = new ServiceMan(man.getTitle(), man.getDescription(), man.getAvgCost(), user);
			return serviceManRepository.save(serviceMan);
		}).collect(Collectors.toList());
		return serviceManRepository.saveAll(list);
	}

	public List<ServiceMan> customerSearchRequest(SearchRequest searchRequest) {
		String text = searchRequest.getSearchRequestString();
		return serviceManRepository
				.findByTitleContainingOrDescriptionContainingOrUserFirstNameContainingOrUserLastNameContaining(text,
						text, text, text);
	}

	public ServiceMan updateServiceMan(ServiceManRequest man, int serviceManId) {
		ServiceMan serviceMan = serviceManRepository.findById(serviceManId).orElse(null);
		if (serviceMan != null) {
			serviceMan.setTitle(man.getTitle());
			serviceMan.setDescription(man.getDescription());
			serviceMan.setAvgCost(man.getAvgCost());
			return serviceManRepository.save(serviceMan);
		}
		return null;
	}

	public void deleteById(int serviceManId) {
		serviceManRepository.deleteById(serviceManId);
	}

}
