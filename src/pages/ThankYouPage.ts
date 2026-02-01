import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ThankYouPage class represents the confirmation page after wizard completion
 * Contains selectors and methods for verifying the thank you page
 */
export class ThankYouPage extends BasePage {
  // Selectors for thank you page elements
  // The final page often uses a large heading for "Thank you"
  private readonly thankYouHeading = 'h4:has-text("Thank you"), h1:has-text("Thank you"), div:has-text("Thank you")';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Verify thank you page is displayed
   */
  async isThankYouPageDisplayed(): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.thankYouHeading, { timeout: 10000 });
      return await this.isVisible(this.thankYouHeading);
    } catch (e) {
      return false;
    }
  }

  /**
   * Get the confirmation message text
   */
  async getConfirmationMessage(): Promise<string> {
    return await this.getText(this.thankYouHeading);
  }
}
