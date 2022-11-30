package com.example.capstone.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.model.Users;
import com.example.capstone.repository.UserRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	@Autowired
	private UserRepository repo;
	
	
	@PostMapping("/signup")
	public Users signup(@RequestBody Users user) {
		String temp = user.getEmail();
		if(repo.existsById(temp) == true) {
			System.out.println("Email already exists");
			return null;
		}
		else {
		System.out.println(user);
		System.out.println("Data Saved");
		return repo.save(user);
		}
	}
	
	@GetMapping("/login/{email}")
	public Optional<Users> login(@PathVariable String email){
		if(repo.existsById(email) == true) {
			System.out.println(email);
			return repo.findById(email);		
		}
		else {
			System.out.println("data Not found");
			return null;
		}
	}
	
	@DeleteMapping("/delete/{email}")
	public String deleteUser(@PathVariable String email) {
		repo.deleteById(email);
		return "User Deleted -> "+email;
	}

	
}
