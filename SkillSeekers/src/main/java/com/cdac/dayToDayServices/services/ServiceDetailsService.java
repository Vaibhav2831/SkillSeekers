package com.cdac.dayToDayServices.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dayToDayServices.entities.Address;
import com.cdac.dayToDayServices.entities.ServiceDetails;
import com.cdac.dayToDayServices.entities.ServiceMan;
import com.cdac.dayToDayServices.entities.User;
import com.cdac.dayToDayServices.models.ServiceDetailsRequest;
import com.cdac.dayToDayServices.repositories.AddressRepository;
import com.cdac.dayToDayServices.repositories.ServiceDetailsRepository;
import com.cdac.dayToDayServices.repositories.ServiceManRepository;
import com.cdac.dayToDayServices.repositories.UserRepository;

@Service
public class ServiceDetailsService {
	@Autowired
	private ServiceDetailsRepository serviceDetailsRepository;
	@Autowired
	private ServiceManRepository serviceManRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private AddressRepository addressRepository;

	public List<ServiceDetails> getAllServiceDetails() {
		return serviceDetailsRepository.findAll();
	}

	public ServiceDetails addServiceDetails(ServiceDetailsRequest serviceDetailsRequest) {
		User customer = userRepository.findById(serviceDetailsRequest.getCustomerId()).orElse(null);
		ServiceMan serviceMan = serviceManRepository.findById(serviceDetailsRequest.getServiceManId()).orElse(null);
		Address address = addressRepository.findById(serviceDetailsRequest.getCustomerAddressId()).orElse(null);
		if (customer != null && customer.getRole().equals("CUSTOMER") && serviceMan != null
				&& serviceMan.getUser().getRole().equals("SERVICE_MAN") && address != null) {
			ServiceDetails newServiceDetails = new ServiceDetails();
			newServiceDetails.setServiceDescription(serviceDetailsRequest.getServiceDescription());
			newServiceDetails.setCustomer(customer);
			newServiceDetails.setServiceMan(serviceMan);
			newServiceDetails.setAddress(address);
			newServiceDetails.setStatus("PENDING FOR SERVICE MAN APPROVAL");
			return serviceDetailsRepository.save(newServiceDetails);
		} else
			return null;
	}

	public ServiceDetails updateServiceCost(ServiceDetailsRequest serviceDetailsRequest) {
		ServiceDetails details = serviceDetailsRepository.findById(serviceDetailsRequest.getServiceDetailsId())
				.orElse(null);
		if (details != null) {
			details.setServiceCost(serviceDetailsRequest.getServiceCost());
			details.setStatus("APPROVED FROM SERVICE MAN");
			return serviceDetailsRepository.save(details);
		} else
			return null;
	}

	public ServiceDetails changeServiceStatus(ServiceDetailsRequest serviceDetailsRequest) {
		ServiceDetails details = serviceDetailsRepository.findById(serviceDetailsRequest.getServiceDetailsId())
				.orElse(null);
		if (details != null) {
			details.setStatus(serviceDetailsRequest.getStatus());
			return serviceDetailsRepository.save(details);
		} else
			return null;
	}

	public List<ServiceDetails> getByCustomerId(int customerId) {
		return serviceDetailsRepository.findByCustomerId(customerId);
	}

	public List<ServiceDetails> getByStatusAndServiceManId(int serviceManId) {
		return serviceDetailsRepository.findByStatusAndServiceManId("PENDING FOR SERVICE MAN APPROVAL",serviceManId);
	}

	public List<ServiceDetails> getByStatusNotAndServiceManId(int serviceManId) {
		List<String> statuses = new ArrayList<String>();
		statuses.add("PENDING FOR SERVICE MAN APPROVAL");
		statuses.add("APPROVED FROM SERVICE MAN");
		return serviceDetailsRepository.findByStatusNotInAndServiceManId(statuses, serviceManId);
	}
	
	public void deleteById(int serviceDetailsId) {
		serviceDetailsRepository.deleteById(serviceDetailsId);
		
	}
}
