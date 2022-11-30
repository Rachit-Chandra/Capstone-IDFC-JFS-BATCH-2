package com.example.capstone.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.model.OrderRecord;

@Repository
public interface OrderRecordRepository extends MongoRepository<OrderRecord, Integer> {

}
