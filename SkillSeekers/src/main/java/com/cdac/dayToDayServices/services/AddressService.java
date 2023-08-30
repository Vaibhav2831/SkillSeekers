package com.cdac.dayToDayServices.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dayToDayServices.entities.Address;
import com.cdac.dayToDayServices.entities.User;
import com.cdac.dayToDayServices.models.AddressRequest;
import com.cdac.dayToDayServices.repositories.AddressRepository;
import com.cdac.dayToDayServices.repositories.UserRepository;

@Service
public class AddressService {

	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private UserRepository userRepository;

	public List<Address> getByUserId(int userId) {
		return addressRepository.findByUserId(userId);
	}

	public Address addOrUpdateAddress(AddressRequest addressRequest) {
		User user = userRepository.findById(addressRequest.getUserId()).orElse(null);
		if (user != null) {
			Address address = new Address();
			if (addressRequest.getId() != 0)
				address.setId(addressRequest.getId());
			address.setUser(user);
			address.setRecipientsName(addressRequest.getRecipientsName());
			address.setRecipientsPhone(addressRequest.getRecipientsPhone());
			address.setAddressLine1(addressRequest.getAddressLine1());
			address.setAddressLine2(addressRequest.getAddressLine2());
			address.setCity(addressRequest.getCity());
			address.setPostalCode(addressRequest.getPostalCode());
			address.setState(addressRequest.getState());
			address.setCountry(addressRequest.getCountry());
			return addressRepository.save(address);
		}
		return null;
	}

	public List<Address> getAllAddresses() {
		return addressRepository.findAll();
	}

	public void deleteById(int addressId) {
		addressRepository.deleteById(addressId);
		
	}
}
