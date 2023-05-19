# Javascript Domain Assertions

## Description

This repo contains small steps to write tests that describe our domain business rules 
with the ubiquitous language and not only data comparison failure messages.

- **01 Simple Expect:** A common test example without ubiquitous language, using plain jest assertions
- **02 Custom Failure Message:** A common test example but using a jest extension library to customize the error message
- **03 Extract Expect:** By extracting expect functions, we can make the test code more expressive about our business rules (still, error messages not fully expressive)
- **04 Custom Assertion:** By using jest's custom assertions, our test code and the failure messages express our business rules
