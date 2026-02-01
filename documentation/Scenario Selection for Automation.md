# Scenario Selection for Automation (Updated)

This document identifies the test cases from the updated list that offer the highest Return on Investment (ROI) for automation.

## Criteria for Selection

The following criteria were used to select the test cases for automation:

*   **Criticality:** Does the test case cover a critical business function or user path?
*   **Repetitiveness:** Is the test case likely to be executed frequently (e.g., in every regression cycle)?
*   **Stability:** Is the feature under test stable and unlikely to change frequently?
*   **End-to-End Coverage:** Does the test cover the entire user journey?

## Selected Test Cases for Automation

The following 3 test cases have been selected as providing the highest ROI for automation:

| Test Case ID | Title | Justification for Automation |
|---|---|---|
| **TC-001** | Verify Landing Page Loads Successfully (Smoke) | This is the most fundamental **smoke test** and must be run with every deployment to ensure the application is available. It is highly repetitive and provides immediate feedback on the basic health of the application. |
| **TC-005** | Verify successful completion of the multi-step wizard (Happy Path) | This is the **most critical end-to-end test** of the entire application. Automating this ensures the core business process—from ZIP code entry to final request submission—is functional. It is a high-value test for every regression cycle. |
| **TC-007** | Verify phone number validation (Negative) | This test validates a key **input validation** and **data quality** requirement at the final step of the funnel. It is a stable, high-frequency test that ensures the application is collecting valid data before submission. |

These three test cases cover the application's availability, the entire critical user journey, and a crucial functional logic point, making them the ideal candidates for the initial automation suite.
