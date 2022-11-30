package com.example.capstone.model;

import java.lang.reflect.Array;
import java.util.Map;

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
@Document("orderRecord")
public class OrderRecord {
	
	private String name;
	private String email;
	private String phone;
	private String country;
	private String address;
	private String postalCode;
	private String productsBuyed;
	private int totalAmount;
	private int totalQuantity;

}
