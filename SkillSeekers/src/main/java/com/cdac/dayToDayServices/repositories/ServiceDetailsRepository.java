package com.cdac.dayToDayServices.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.dayToDayServices.entities.ServiceDetails;

public interface ServiceDetailsRepository extends JpaRepository<ServiceDetails, Integer> {
	List<ServiceDetails> findByCustomerId(int customerId);

	List<ServiceDetails> findByStatusAndServiceManId(String status, int serviceManId);

	List<ServiceDetails> findByStatusNotInAndServiceManId(List<String> statuses, int serviceManId);

	int countByIsSatisfied(boolean isSatisfied);
}
