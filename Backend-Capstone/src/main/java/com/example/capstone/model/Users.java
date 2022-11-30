package com.example.capstone.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@Component
@ToString
@Document("users")
public class Users {
	
	@Id
	private String email;
	private String firstname;
	private String lastname;
	private String phoneno;
	private String password;

}

