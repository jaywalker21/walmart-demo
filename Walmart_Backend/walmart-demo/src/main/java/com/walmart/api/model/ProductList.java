package com.walmart.api.model;

import java.util.ArrayList;
import java.util.List;

public class ProductList {
	
	private List<ProductInfo> prodList;
	
	public List<ProductInfo> getProductList() {
		if(prodList == null) {
			return new ArrayList<>();
		}
		return prodList;
	}
	
	
	public void setProductList(List<ProductInfo> prodList) {
		this.prodList = prodList;
	}
	
	

}
