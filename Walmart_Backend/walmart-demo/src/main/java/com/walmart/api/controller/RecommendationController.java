package com.walmart.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.walmart.api.model.ProductList;
import com.walmart.api.stub.RecommendationStub;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecommendationController {
	
	@Autowired
	private RecommendationStub recommendationStub;
	
	
	@GetMapping(path="/recommendations", produces = "application/json")
	public ProductList getProducts(@RequestParam(value = "currentProduct", defaultValue = "*") String productId) {
//		System.out.println("Recommendations for " + productId);
		return recommendationStub.getRecommendations();
	}

}
