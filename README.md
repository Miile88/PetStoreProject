# PetStore QA Automation Project

## Overview
This project implements automated testing for the PetStore API using Postman and Playwright to ensure functionality and reliability. 
BaseUrl: https://petstore.swagger.io/#/


## Features

- 🔒 Tests the Petstore UI login and user creation flows
- 📋 Validates JSON responses rendered on the UI
- 📷 Automatically captures screenshots and traces on test failure
- 💡 Uses Page Object Model for clean and reusable test structure
- ⚙️ Configurable via `.env` file for  credentials

### Prerequisites
This project requires the following dependencies:
- **Programming Language**: JavaScript
- **Package Manager**: Npm
- **Testing Framework**: Playwright


## Install Node.js
 
 https://nodejs.org/en


 ## Add a .env.example File
  Copy `.env.example` to `.env` and update with your own values


  
## Run Project

Clone the project

```bash
  git clone https://github.com/Milli08/PetStoreProject
```

Go to the project directory

```bash
  cd PetStoreProject
```

Install dependencies

```bash
  npm install
```

install playwright

```bash
  npx playwright install --with-deps
```


## Run test

Run All Test
```bash
  npx playwright test
```
    
Run a single test file
```bash
  npx playwright test tests/user.test.js
```

Generate and view a detailed HTML report
```bash
  npx playwright show-report
```
