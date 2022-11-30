package com.example.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.model.OrderRecord;
import com.example.capstone.repository.OrderRecordRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

	@Autowired
	private OrderRecordRepository repo;
	
	@PostMapping("/order")
	public OrderRecord saveData(@RequestBody OrderRecord order) {
		
		
		System.out.println(order.getProductsBuyed());
//			System.out.println(order);
		return repo.save(order);
	}
}
