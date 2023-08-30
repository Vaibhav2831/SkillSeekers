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

import com.cdac.dayToDayServices.entities.ServiceMan;
import com.cdac.dayToDayServices.models.Response;
import com.cdac.dayToDayServices.models.SearchRequest;
import com.cdac.dayToDayServices.models.ServiceManRequest;
import com.cdac.dayToDayServices.services.ServiceManService;

@RestController
@CrossOrigin("*")
@RequestMapping("/serviceMan")
@SuppressWarnings("rawtypes")
public class ServiceManController {
	@Autowired
	private ServiceManService service;

	@PostMapping("/addServiceMan")
	public ResponseEntity addServiceMan(@RequestBody ServiceManRequest man) {
		ServiceMan serviceMan = service.addServiceMan(man);
		if (serviceMan != null)
			return Response.success(serviceMan);
		else
			return Response.error("Service Man not added");
	}
	
	@PostMapping("/updateServiceMan/{serviceManId}")
	public ResponseEntity updateServiceMan(@RequestBody ServiceManRequest man,@PathVariable int serviceManId) {
		ServiceMan serviceMan = service.updateServiceMan(man,serviceManId);
		if (serviceMan != null)
			return Response.success(serviceMan);
		else
			return Response.error("Service Man not added");
	}
	
	@GetMapping("/getByUserId/{userId}")
	public ResponseEntity getByServiceManId(@PathVariable int userId) {
		ServiceMan serviceMan = service.getById(userId);
		if (serviceMan != null)
			return Response.success(serviceMan);
		else
			return Response.error("Service Man not found");
	}
	
	@PostMapping("/customerSearchRequest")
	public ResponseEntity customerSearchRequest(@RequestBody SearchRequest searchRequest) {
		List<ServiceMan> serviceMans = service.customerSearchRequest(searchRequest);
		if (!serviceMans.isEmpty())
			return Response.success(serviceMans);
		else
			return Response.error("Service Man not found");
	}

	@GetMapping("/getAll")
	public ResponseEntity getAll() {
		List<ServiceMan> list = service.getAllServiceMan();
		if (list.isEmpty())
			return Response.error("No Service Man available");
		else {
			return Response.success(list);
		}
	}
	

	@PostMapping("/addAll")
	public ResponseEntity addServiceMan(@RequestBody List<ServiceManRequest> serviceManRequests) {
		List<ServiceMan> serviceMans = service.addAll(serviceManRequests);
		if (!serviceMans.isEmpty())
			return Response.success(serviceMans);
		else
			return Response.error("Service Mans not added");
	}

	@DeleteMapping("/delete/{serviceManId}")
	public ResponseEntity deleteUser(@PathVariable int serviceManId) {
		service.deleteById(serviceManId);
		return Response.success("Delete service man called successfully !!!");
	}
}
