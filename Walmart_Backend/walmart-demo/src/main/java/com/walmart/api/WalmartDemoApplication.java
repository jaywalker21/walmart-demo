package com.walmart.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.walmart.api")
public class WalmartDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WalmartDemoApplication.class, args);
	}

}
