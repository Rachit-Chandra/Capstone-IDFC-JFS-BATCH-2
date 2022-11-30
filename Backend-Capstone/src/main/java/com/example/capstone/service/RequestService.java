package com.example.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.repository.RequestRepository;

@Service
public class RequestService {

	@Autowired
	private RequestRepository requestRepo;
	
	
}
