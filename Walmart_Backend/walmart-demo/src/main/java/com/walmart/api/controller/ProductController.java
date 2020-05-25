package com.walmart.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.walmart.api.model.ProductList;
import com.walmart.api.stub.ProductListStub;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductListStub productListStub;
	
	
	@GetMapping(path="/products", produces = "application/json")
	public ProductList getProducts(@RequestParam(value = "searchText", defaultValue = "all") String searchText) {
//		System.out.println("Search Text " + searchText);
		return productListStub.getProducts();
	}
	
}
