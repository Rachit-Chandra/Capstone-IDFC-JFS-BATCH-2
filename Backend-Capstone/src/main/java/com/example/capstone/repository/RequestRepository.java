package com.example.capstone.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.model.Request;

@Repository
public interface RequestRepository extends MongoRepository<Request, Integer> {

}
