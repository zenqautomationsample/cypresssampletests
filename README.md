About this repo
----------------
This repository contains automated tests built for https://adactin.com/HotelApp/ using Cypress.io 

Following are the core features of this test framework

1.	Cypress.io
2.	Javascript
3.	Jasmine
4.	Page object model

The following tests are automated

pageValidation.spec.js - This test Navigates and asserts different pages in the application. 

dateError.spec.js - This test asserts the error message when invalid or past dates are given while booking a hotel 

searchHotel.spec.js - This test searches for required hotel and asserts the result. 

bookHotel.spec.js - This test searches for a hotel, books the required hotel and then asserts the booking confirmation. 


Running the tests
------------------
Pre-requisites to be installed 
NodeJs  - Version:10.16.1 or higher 

Steps
1.	Clone this repo 
2.	Launch command terminal and navigate to root path of this repo
3.	Type “npm install” 
4.	After installing all packages, Type “npm run cypress:open”
5.	On Cypress test runner, click on “Run” to run the selected or all tests
6.	Click on required test case to run or click on run all specs to run all tests. 
