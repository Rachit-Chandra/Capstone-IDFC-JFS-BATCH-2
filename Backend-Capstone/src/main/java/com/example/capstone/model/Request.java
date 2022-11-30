package com.example.capstone.model;

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
@Document("request")
public class Request {

	private String name;
	private String email;
	private String phoneno;
	private String medicineName;
	private String description;
	private String fileLink;
}
