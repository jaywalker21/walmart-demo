# Walmart Sample Application Backend

This project has been bootstraped using [spring-starter](https://start.spring.io/) for quicker development.

## Requirements

- `JDK 1.8`

## How to run the application

Please use the following command:

If you are using Github

```shell
 cd walmart-demo
 ./mvnw clean package // for Unix System (Linux/iOS) (will generate Jar)
 ./mvnwcmd clean package // for Windows (will generate Jar)
 java -jar ./target/walmart-demo-0.0.1-SNAPSHOT.jar
```

If you are using zip file
``` shell
  java -jar ./walmart-demo/target/walmart-demo-0.0.1-SNAPSHOT.jar
```

This will start a Spring Boot Application at port `8080`

## Approach Used

- Standard `Model` and `Controller` folders to manage different models and rest-endpoints.
- `CORS` has been enabled for `UI` assuming it is running on Port `3000`.
- Currently, a `stub` layer has been made to retrieve the `Product List` and `Recommendations`. Going ahead it can be replaced with `service` layer when the  `Walmart Open APIs` are available for consumption.

## Further Scope
- The Configurations for URL Whitelisting for CORS can be moved to a [Sprint Cloud Config Server](https://cloud.spring.io/spring-cloud-config/reference/html/) for future Microservices. 
- Test Cases
  - `JUnit5` can be used for writing Unit Test Cases
  -  `SpringBootTest` can be used for Integration Tests
  -  `MockBin` can be used to test behaviors to API Response
- Error Handling has not currently been done for the different layers of API. Standard Error Templates can be made for reuse across different Microservices.
- Integration with Client Secret Manager to store `API_KEY` and `API_SECRET`.
