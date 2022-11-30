package com.example.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.model.Request;
import com.example.capstone.repository.RequestRepository;
import com.example.capstone.service.RequestService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RequestController {

	@Autowired
	private RequestRepository repo;
	
	@Autowired
	private RequestService reqService;
	
//	@PostMapping("/request")
	@PutMapping("/request")
	public Request medicine(@RequestBody Request request) {
		
		return repo.save(request);
	}
}
