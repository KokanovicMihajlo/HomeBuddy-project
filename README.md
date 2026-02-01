# HomeBuddy Automation Test Suite

This project contains automated tests for the HomeBuddy Kitchen Remodeling application using Playwright and TypeScript.

## Project Structure

```
homebuddy-automation/
├── documentation/
│   ├── 10 Detailed Test Cases for HomeBuddy App.md
│   ├── Identified Bugs List.md
│   ├── Scenario Selection for Automation.md
│   ├── Test Suite Structure for HomeBuddy Application.md
│   └── Top 3 Bug Reports.md
│
├── src/
│   └── pages/
│       ├── BasePage.ts          # Base class for all page objects
│       ├── LandingPage.ts       # Landing page object model
│       ├── WizardPage.ts        # Multi-step wizard object model
│       └── ThankYouPage.ts      # Confirmation page object model
├── tests/
│   └── tc-005-wizard-happy-path.spec.ts  # Test cases for TC-005
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Installation

1. **Clone or extract the project**
   ```bash
   cd homebuddy-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (if not already installed)
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser window)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### View test report
```bash
npm run test:report
```

## Test Cases Implemented

### TC-005: Multi-Step Wizard Happy Path

This test suite verifies the successful completion of the HomeBuddy wizard flow:

1. **Test 1: Complete Wizard Flow Successfully**
   - Navigates to landing page
   - Enters ZIP code 10001
   - Completes all wizard steps with valid data
   - Verifies successful redirect to Thank You page

2. **Test 2: Maintain Data Integrity Through Wizard Steps**
   - Verifies that data entered in one step is preserved
   - Tests step progression with various inputs
   - Confirms successful completion

3. **Test 3: Handle Different Valid Inputs**
   - Tests the wizard with alternative valid data
   - Verifies flexibility of the system
   - Confirms successful completion with different inputs

## Page Object Model

The project implements the Page Object Model (POM) design pattern for maintainability and reusability:

- **BasePage**: Contains common methods used across all pages (navigation, clicking, filling, etc.)
- **LandingPage**: Handles landing page interactions (ZIP code submission)
- **WizardPage**: Manages all wizard steps and transitions
- **ThankYouPage**: Verifies confirmation page elements

## Configuration

### Playwright Configuration (`playwright.config.ts`)

- **Base URL**: `https://hb-test.stage.sirenltd.dev`
- **Browser**: Chromium
- **Reporters**: HTML, JSON, JUnit XML
- **Screenshots**: Captured on failure
- **Videos**: Retained on failure
- **Traces**: Enabled on first retry

### Test Data

Default test data used in tests:
- **ZIP Code**: 10001
- **Kitchen Size**: 150 sq. ft.
- **Name**: John Doe
- **Email**: john.doe@example.com
- **Phone**: 2025550123

## Locators Used

All locators are based on real components of the test environment:

### Landing Page
- ZIP Code Input: `input[id="zip"]`
- Get Estimate Button: `button:has-text("Get estimate")`

### Wizard Steps
- Kitchen Elements: `label:has-text("Kitchen cabinets")`, `label:has-text("Countertop(s)")`
- Cabinet Action: `label:has-text("Replace all or most cabinets")`
- Property Type: `label:has-text("Single family home")`
- Mobile Home: `label:has-text("No")`
- Homeowner: `label:has-text("Yes")`
- Kitchen Size: `input[id="squareFeet"]`
- Budget: `label:has-text("$10K to $30K")`
- Name: `input[id="name"]`
- Email: `input[id="email"]`
- Phone: `input[id="phone"]`

### Common Elements
- Next Button: `button:has-text("Next")`
- Submit Button: `button:has-text("Submit my request")`
- Back Button: `button:has-text("Back")`

## Test Reports

After running tests, reports are generated in the following formats:

- **HTML Report**: `playwright-report/index.html`
- **JSON Report**: `test-results/results.json`
- **JUnit XML**: `test-results/junit.xml`

View the HTML report with:
```bash
npm run test:report
```

## Best Practices Implemented

1. **Page Object Model**: Separates test logic from page interactions
2. **TypeScript**: Provides type safety and better IDE support
3. **Async/Await**: Uses modern async patterns for better readability
4. **Descriptive Selectors**: Uses semantic selectors that are maintainable
5. **Comprehensive Comments**: Includes JSDoc comments for all methods
6. **Test Data Separation**: Keeps test data separate from test logic
7. **Error Handling**: Includes proper waits and error handling
8. **Reusable Methods**: Common actions are abstracted into reusable methods

## Troubleshooting

### Tests timing out
- Increase timeout in `playwright.config.ts`
- Check if the application is accessible at the base URL
- Verify network connectivity

### Locators not found
- Verify that the application UI hasn't changed
- Update locators in the page object files
- Use `npx playwright codegen` to generate new locators

### Browser not found
- Run `npx playwright install` to install browsers
- Ensure you have sufficient disk space

## Contributing

When adding new tests:

1. Create a new page object if testing a new page
2. Extend `BasePage` for common functionality
3. Use descriptive test names
4. Add JSDoc comments
5. Keep test data in test methods or configuration
6. Use the Page Object Model pattern

## Contact

For questions or issues, contact the QA team.
