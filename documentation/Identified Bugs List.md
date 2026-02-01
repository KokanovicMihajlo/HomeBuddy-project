# Identified Bugs List (Updated)

This document lists all the bugs identified during the exploratory testing of the HomeBuddy Kitchen Remodeling application, categorized by severity.

## Critical Bugs

| Bug ID | Title | Description | Severity |
|---|---|---|---|
| HB-001 | **Irrelevant Content on Landing Page** | A section titled "Benefits Of Asphalt Shingles" is displayed on the kitchen remodeling landing page. This content is completely irrelevant to kitchen remodeling and creates a confusing and unprofessional user experience. | Critical |

## High Bugs

| Bug ID | Title | Description | Severity |
|---|---|---|---|
| HB-002 | **Wizard Access Blocker (Data Issue)** | The primary user flow is blocked for most ZIP codes (e.g., 90210, 46220, 12345) as they show a "no matching contractors" message. While ZIP 10001 works, this indicates a severe data configuration issue that prevents the application from functioning in most areas. | High |
| HB-003 | **Wizard Logic Flaw: Forced Kitchen Cabinets Selection** | When a user selects elements other than "Kitchen cabinets" and chooses to continue after the warning, the wizard forces them into a cabinet-focused flow. This contradicts the user's initial selection and creates a confusing and illogical user journey. | High |
| HB-004 | **Wizard Functional Blocker: Kitchen Size 'Not Sure' Loop** | When a user selects 'Not sure' for kitchen size and clicks 'Next', the wizard returns to the same step without clear feedback or allowing progression. This creates a functional loop, blocking users who do not know their kitchen size from proceeding. | High |

## Medium Bugs

| Bug ID | Title | Description | Severity |
|---|---|---|---|
| HB-005 | **Incorrect Footer Link Navigation** | The "Terms Of Use" link in the page footer incorrectly navigates to the "Privacy Policy" page. This is a functional bug that prevents users from accessing the terms of use. | Medium |
| HB-006 | **Missing ZIP Code Validation** | The ZIP code input field does not display any validation error message when the "Get estimate" button is clicked with an empty field. This provides poor user feedback. | Medium |
| HB-007 | **Improper ZIP Code Input Validation** | The ZIP code input field allows non-numeric characters (letters, special characters) to be entered. While the `type="tel"` attribute is used, it does not prevent non-numeric input on desktop browsers. | Medium |
| HB-008 | **Hardcoded Name on Thank You Page** | The "Thank You" page uses a hardcoded name ("Andrew") instead of the name entered by the user in the previous step ("John Doe"). This is a personalization failure and provides a poor user experience. | Medium |
| HB-009 | **Wizard UI/UX Flaw: Budget 'Not Sure' Checkbox Restriction** | The 'Not sure' checkbox for the budget step is unresponsive and cannot be selected unless one of the specific budget range options is already chosen. This is counter-intuitive and creates a confusing user experience, as 'Not sure' should be an alternative to selecting a range. | Medium |

## Low Bugs

| Bug ID | Title | Description | Severity |
|---|---|---|---|
| HB-010 | **Typographical Error in Review** | There is a typographical error in a customer review from "Nick F.". The text reads "wher professional" instead of "were professional". | Low |
| HB-011 | **Inconsistent ZIP Code Field Labels** | The placeholder text and labels for the ZIP code input fields are inconsistent across the landing page. For example, some have a question mark at the end and some do not. | Low |
| HB-012 | **Landing Page UI Glitch: Visible Citation Marker** | The 'Materials warranty' item in the 'Complete Kitchen Remodeling' section on the landing page displays a visible citation marker '[1]'. This is a cosmetic issue that affects the professional appearance of the page. | Low |
