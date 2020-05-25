package com.walmart.api.model;

public class ProductInfo {
	
	private String productId;
	private String productName;
	private String price;
	private String imageUrl;
	private int productRating;
	
	public ProductInfo() {
		
	}
	
	public ProductInfo(String productId, String productName, String price, String imageUrl, int productRating) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.price = price;
		this.imageUrl = imageUrl;
		this.productRating = productRating;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public int getProductRating() {
		return productRating;
	}

	public void setProductRating(int productRating) {
		this.productRating = productRating;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String id) {
		this.productId = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	

}
