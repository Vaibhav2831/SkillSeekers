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

import com.cdac.dayToDayServices.entities.ServiceDetails;
import com.cdac.dayToDayServices.models.Response;
import com.cdac.dayToDayServices.models.ServiceDetailsRequest;
import com.cdac.dayToDayServices.services.ServiceDetailsService;

@RestController
//marks a class as a controller that returns the response body directly, without the need for a view template
@CrossOrigin("*")
@RequestMapping("/serviceDetails")
@SuppressWarnings("rawtypes")
public class ServiceDetailsController {
	@Autowired
	private ServiceDetailsService service;

	@PostMapping("/bookService")
	public ResponseEntity bookService(@RequestBody ServiceDetailsRequest serviceDetailsRequest) {
		ServiceDetails newServiceDetails = service.addServiceDetails(serviceDetailsRequest);
		if (newServiceDetails != null)
			return Response.success(newServiceDetails);
		else
			return Response.error("Can not book service");
	}

	@PostMapping("/approveWithServiceCost")
	public ResponseEntity updateServiceCost(@RequestBody ServiceDetailsRequest serviceDetailsRequest) {
		ServiceDetails newServiceDetails = service.updateServiceCost(serviceDetailsRequest);
		if (newServiceDetails != null)
			return Response.success(newServiceDetails);
		else
			return Response.error("Can not approve service");
	}

	@PostMapping("/changeServiceStatus")
	public ResponseEntity changeServiceStatus(@RequestBody ServiceDetailsRequest serviceDetailsRequest) {
		ServiceDetails newServiceDetails = service.changeServiceStatus(serviceDetailsRequest);
		if (newServiceDetails != null)
			return Response.success(newServiceDetails);
		else
			return Response.error("Can not change service status");
	}
	
	@GetMapping("/getByCustomerId/{customerId}")
	public ResponseEntity getByCustomerId(@PathVariable int customerId) {
		List<ServiceDetails> list = service.getByCustomerId(customerId);
		if(list.isEmpty())
			return Response.error("No service history available");
		else
		return Response.success(list);
	}
	
	@GetMapping("/getForServiceManHome/{serviceManId}")
	public ResponseEntity getForServiceManHome(@PathVariable int serviceManId) {
		List<ServiceDetails> list = service.getByStatusAndServiceManId(serviceManId);
		if(list.isEmpty())
			return Response.error("No service history available");
		else
		return Response.success(list);
	}
	
	@GetMapping("/getForServiceManBookings/{serviceManId}")
	public ResponseEntity getForServiceManBookings(@PathVariable int serviceManId) {
		List<ServiceDetails> list = service.getByStatusNotAndServiceManId(serviceManId);
		if(list.isEmpty())
			return Response.error("No pending service available");
		else
		return Response.success(list);
	}

	@GetMapping("/getAll")
	public ResponseEntity getAll() {
		return Response.success(service.getAllServiceDetails());
	}
	
	@DeleteMapping("/delete/{serviceDetailsId}")
	public ResponseEntity deleteUser(@PathVariable int serviceDetailsId) {
		service.deleteById(serviceDetailsId);
		return Response.success("Delete service details called successfully !!!");
	}
	
	
}
