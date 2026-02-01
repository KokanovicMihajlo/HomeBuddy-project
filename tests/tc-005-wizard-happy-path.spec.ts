import { test, expect } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { WizardPage } from '../src/pages/WizardPage';
import { ThankYouPage } from '../src/pages/ThankYouPage';
import { PhoneGenerator } from '../src/utils/PhoneGenerator';
import { EmailGenerator } from '../src/utils/EmailGenerator';

/**
 * Test Case TC-005: Verify successful completion of the multi-step wizard (Happy Path)
 */
test.describe('TC-005: Multi-Step Wizard Happy Path - End-to-End', () => {
  let landingPage: LandingPage;
  let wizardPage: WizardPage;
  let thankYouPage: ThankYouPage;

  test.beforeEach(async ({ page }) => {
    // Initialize page objects
    landingPage = new LandingPage(page);
    wizardPage = new WizardPage(page);
    thankYouPage = new ThankYouPage(page);

    // Navigate to landing page
    await landingPage.navigateTo();
  });

  test('should complete the entire wizard flow successfully with valid data', async ({ page }) => {
    // Step 1: Submit ZIP code to access wizard
    const testZipCode = '10001';
    console.log(`Submitting ZIP code: ${testZipCode}`);
    await landingPage.submitZipCode(testZipCode);

    // Step 2: Complete the wizard with test data
    const testData = {
      kitchenSize: '150',
      name: 'John Doe',
      email: EmailGenerator.generateRandomEmail(),
      phone: PhoneGenerator.generateRandomAmericanPhone()
    };

    console.log('Completing wizard steps...');
    await wizardPage.completeWizard(
      testData.kitchenSize,
      testData.name,
      testData.email,
      testData.phone
    );

    // Step 3: Verify thank you page is displayed
    console.log('Verifying final confirmation page...');
    const isThankYouPageDisplayed = await thankYouPage.isThankYouPageDisplayed();
    
    if (!isThankYouPageDisplayed) {
      console.error(`Verification failed. Current URL: ${page.url()}`);
    }
    
    expect(isThankYouPageDisplayed, 'Thank You page should be displayed').toBeTruthy();

    // Step 4: Verify confirmation message is present
    const confirmationMessage = await thankYouPage.getConfirmationMessage();
    expect(confirmationMessage.toLowerCase()).toContain('thank you');
  });
});
