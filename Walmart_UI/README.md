
# Walmart Sample Application UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for quicker development.

## Requirements

- `Node JS - v10 or higher`<br />
- `Chrome - v80 or higher`

## How to run the application

Please use the following command:

``` javascript
npm install serve && npm run serve // The build folder is already present in the submission. Refer "Available Scripts" for more info
```
It will start the application on port `3000` on the local system

## Available Scripts

In the project directory, you can run:

###  `npm run start`

It will start the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

This will create a production ready minified build for the react application.
The zip file submitted to you already has `build` folder within it.

### `npm run serve`

This is the command to execute. It will act as a static-server and serve the `build` folder.<br />

## Approach Used

1. All the components developed for this Application are `Functional Components`.
2. React `Context` and `Redux` have not been used as the scale of the app didn't require the same.
3. For all the components, `PropTypes` have been provided for better validations.
4. For the purpose of styling [`Bootstrap`](https://getbootstrap.com/) is used.
5. [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) has been used for `API` calls (Will not work in `IE11`).
6. Currently for styling, `CSS` is used.
7. All the `API` calls have been made using [async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntax
8. Current Application is `Responsive` in nature and would behave accordingly for (`Laptop`, `Mobile` and `Tablet`)
9. The view has been divided into two major components
   -  Header (contains the Branding Information and the Search Bar)
   -  Body part except the Header


## Further Scope

-  `Error Handling` - Currently majorly Happy Flow has been implemented. Erro Handling can be done using `ErrorBoundary` and `window.onerror`.
-  `Test Cases` - Test cases can be added for the Unit Level Testing of Components and Integration Level Testing of Components (`Jest`, `Enzyme` can be used)
- `TypeScript` - TypeScript can be used to reduce the probability of errors during development.
- `Style Processors`
   -  For easier styling, `PostCSS`/`SCSS`/`LESS` can be used for ease of developer.
   -  Style library (for fonts, colors, sizing specs can be defined for overall use).
- `Webpack Configuration` - Webpack configuration can be ejected out of the `create-react-app`. This will aid to consume any customized Loader. 
-  Currently as the scale of components is very minor, `lazy-loading` has not been implemented. This could be done using `React Lazy and Suspend`.
