package com.walmart.api.stub;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.walmart.api.model.ProductInfo;
import com.walmart.api.model.ProductList;

@Repository
public class RecommendationStub {
	
	private static ProductList recommendations = new ProductList();
	
	static {
		ArrayList<ProductInfo> prodList = new ArrayList<ProductInfo>();
		prodList.add(new ProductInfo("1", "Slumber 1 by Zinus 8\" Spring Mattress-in-a-box, Twin", "$99.00", "https://i5.walmartimages.com/asr/09c437fd-3320-4569-a1c7-8d7d1c06b371_1.1bbe1eae0b0020faa1085f4b59e57008.jpeg", 4));
		prodList.add(new ProductInfo("2", "Lucid Bounder 7\" Innerspring Mattress with Quilted Fabric Cover", "$129.00", "https://i5.walmartimages.com/asr/50787a0c-4d9c-4575-9018-1094c39ea1e0_1.31577eace3e5ddc9364f73db35d12484.jpeg", 4));
		prodList.add(new ProductInfo("3", "Slumber 1 by Zinus - Cooling Fusion Gel and Spring", "$79.00", "https://i5.walmartimages.com/asr/41f613cf-5ef1-47e6-aec8-b1b477ef4b03_1.882ea982556e71a7d098a1a431efa27e.jpeg", 3));
		prodList.add(new ProductInfo("4", "Slumber 1 by Zinus 8\" Support Spring Mattress", "$79.00", "https://i5.walmartimages.com/asr/4418a7da-0586-4427-877b-8e6da609090a_1.2842419c82664c3babb9d1f7984644ed.jpeg", 3));
		prodList.add(new ProductInfo("5", "The Casper Snug Mattress", "$69.00", "https://i5.walmartimages.com/asr/d8260fe4-372e-4c19-a164-3b6d41e991d6_4.c96fa731e3d473f37e02694281ffa95a.jpeg", 2));
		prodList.add(new ProductInfo("6", "Modern Sleep 7\" Innerspring Mattress", "$49.00", "https://i5.walmartimages.com/asr/6d4aa131-cc48-4cb0-b011-6de048a315d1_2.60e652d6c996f4a33f265a9448333219.jpeg", 1));
		prodList.add(new ProductInfo("7", "Slumber 1 by Zinus Youth 6\" Bunk Bed Mattress", "$179.00", "https://i5.walmartimages.com/asr/a67b3b82-0f63-4092-adbb-19e7c9912bd9_1.6673f27fe414c87d5a655c18f9edcc4c.jpeg", 5));
		prodList.add(new ProductInfo("8", "LUCID 5\" Gel Memory Foam Mattress", "$70.00", "https://i5.walmartimages.com/asr/234d8cdf-860f-4630-ab58-8176df4738ba_1.a86ec1edaa2e1da4f66dd282ef932719.jpeg", 4));
		prodList.add(new ProductInfo("9", "Mainstays 6\" Innerspring Coil Mattress", "$74.00", "https://i5.walmartimages.com/asr/bfa5de9f-88db-4afe-ab68-6cbaa2aa5c84_1.1e043d5a1f2ea18b65c34ca0798bf306.jpeg", 3));
		prodList.add(new ProductInfo("10", "Modern Sleep Cool Gel 10.5-Inch, 12-Inch or 14-Inch", "$85.00", "https://i5.walmartimages.com/asr/a86297b7-ce77-429d-94cd-bdcc828fd7cb_2.0993117f1e0a5b444898c2cc19be6078.jpeg", 5));		
		recommendations.setProductList(prodList);
	}
	
	public ProductList getRecommendations() {
		return recommendations;
	}
}
