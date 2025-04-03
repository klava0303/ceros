This test suite focuses on 3 critical paths of the SauceDemo web application: 
1. Login 
2. Adding a product to the shopping cart 
3. Placing an order 
Additionally, it checks sorting the main inventory page by price and by name. 

The suite contains a Github Actions workflow, to allow running the tests from Github. 

In order to run the tests locally, you need to follow the next steps: 

## Clone The Repo

```
git clone https://github.com/klava0303/ceros.git
```

## Install Dependencies
Download and install Nodejs https://nodejs.org/en

## Run all tests via CLI 
```
npx playwright test 
```

By default Playwright will run all tests in Chrome, Firefox and Webkit in headless mode. 
To specify a browser, tag with: 
```
npx playwright test --project=chromium 
```
(alternatively: firefox, webkit)

To run tests in headed mode, tag with: 
```
npx playwright test --headed 
```

## Run a specific test file
```
npx playwright test login.spec.ts --project=chromium --headed
```

## Reporting 
To see full test report 
```
npx playwright show-report
```
