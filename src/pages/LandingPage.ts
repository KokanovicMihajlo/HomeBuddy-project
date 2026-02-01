import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * LandingPage class represents the main landing page of HomeBuddy application
 * Contains selectors and methods for interacting with the landing page
 */
export class LandingPage extends BasePage {
  // Selectors for landing page elements
  private readonly zipCodeInput = 'input[id="zipCode"]';
  private readonly getEstimateButton = 'button:has-text("Get estimate")';
  private readonly pageHeading = 'h2:has-text("Complete Kitchen Remodeling")';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to the landing page
   */
  async navigateTo(): Promise<void> {
    await this.goto('/');
    await this.waitForPageLoad();
  }

  /**
   * Verify landing page is loaded
   */
  async isPageLoaded(): Promise<boolean> {
    return await this.isVisible(this.pageHeading);
  }

  /**
   * Enter ZIP code in the input field
   */
  async enterZipCode(zipCode: string): Promise<void> {
    await this.fill(this.zipCodeInput, zipCode);
  }

  /**
   * Click the Get Estimate button
   */
  async clickGetEstimate(): Promise<void> {
    await this.click(this.getEstimateButton);
  }

  /**
   * Submit ZIP code and proceed to wizard
   */
  async submitZipCode(zipCode: string): Promise<void> {
    await this.enterZipCode(zipCode);
    
    // Using a more robust approach: click and wait for the wizard element to appear
    // rather than relying solely on waitForNavigation which can be flaky
    await Promise.all([
      this.clickGetEstimate(),
      this.page.waitForSelector('label:has-text("Kitchen cabinets")', { state: 'visible', timeout: 15000 })
    ]);
  }
}
