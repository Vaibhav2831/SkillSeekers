package com.cdac.dayToDayServices.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dayToDayServices.entities.Address;
import com.cdac.dayToDayServices.models.AddressRequest;
import com.cdac.dayToDayServices.models.Response;
import com.cdac.dayToDayServices.services.AddressService;

@RestController
@CrossOrigin("*")
@RequestMapping("/address")
@SuppressWarnings("rawtypes")
public class AddressController {
	@Autowired
	private AddressService service;

	@PostMapping("/addOrUpdateAddress")
	public ResponseEntity addOrUpdateAddress(@RequestBody AddressRequest addressRequest) {
		Address address = service.addOrUpdateAddress(addressRequest);
		if (address != null)
			return Response.success(address);
		else
			return Response.error("Can not add/edit address");
	}

	@GetMapping("/getByUserId/{id}")
	public ResponseEntity getByUserId(@PathVariable int id) {
		List<Address> addresses = service.getByUserId(id);
		if (addresses.isEmpty())
			return Response.error("No address found for the user");
		else
			return Response.success(addresses);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity getAll() {
		List<Address> list = service.getAllAddresses();
		if (list.isEmpty())
			return Response.error("No Addresses available");
		else {
			return Response.success(list);
		}
	}
	
	@DeleteMapping("/delete/{addressId}")
	public ResponseEntity deleteUser(@PathVariable int addressId) {
		service.deleteById(addressId);
		return Response.success("Delete address called successfully !!!");
	}
}
