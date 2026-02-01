import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * WizardPage class represents the multi-step lead generation wizard.
 * It follows the Page Object Model to encapsulate interactions for each step.
 */
export class WizardPage extends BasePage {
  // --- Selectors ---
  
  // Step 1: Project Elements
  private readonly kitchenCabinetsOption = 'label:has-text("Kitchen cabinets")';
  private readonly nextButton = 'button:has-text("Next")';
  
  // Step 2: Cabinet Service Type
  private readonly replaceCabinetsOption = 'label:has-text("Replace all or most cabinets")';
  
  // Step 3: Property Type
  private readonly singleFamilyOption = 'label:has-text("Single family home")';
  
  // Step 4: Mobile Home Check
  private readonly mobileHomeNoOption = 'label:has-text("No")';
  
  // Step 5: Homeowner Status
  private readonly homeownerYesOption = 'label:has-text("Yes")';
  
  // Step 6: Kitchen Size
  private readonly sizeInput = 'input[id="squareFeet"]';
  
  // Step 7: Budget Estimation
  private readonly budgetOption = 'label:has-text("$10K to $30K")';
  
  // Step 8: Contact Details
  private readonly nameInput = 'input[id="fullName"]';
  private readonly emailInput = 'input[id="email"]';
  
  // Step 9: Phone Number Entry
  private readonly phoneInput = 'input[id="phoneNumber"]';
  private readonly submitRequestButton = 'button:has-text("Submit my request")';
  
  // Step 10: Phone Number Confirmation
  private readonly confirmPhoneButton = 'button:has-text("Phone number is correct")';

  constructor(page: Page) {
    super(page);
  }

  // --- Step Actions ---

  async selectKitchenElements(): Promise<void> {
    await this.click(this.kitchenCabinetsOption);
    await this.click(this.nextButton);
  }

  async selectCabinetOptions(): Promise<void> {
    await this.click(this.replaceCabinetsOption);
    await this.click(this.nextButton);
  }

  async selectPropertyType(): Promise<void> {
    await this.click(this.singleFamilyOption);
    await this.click(this.nextButton);
  }

  async selectMobileHomeOption(): Promise<void> {
    await this.click(this.mobileHomeNoOption);
    await this.click(this.nextButton);
  }

  async selectHomeownerStatus(): Promise<void> {
    await this.click(this.homeownerYesOption);
    await this.click(this.nextButton);
  }

  async enterKitchenSize(size: string): Promise<void> {
    await this.fill(this.sizeInput, size);
    await this.page.keyboard.press('Enter');
  }

  async selectBudget(): Promise<void> {
    await this.click(this.budgetOption);
    await this.click(this.nextButton);
  }

  async enterContactInfo(name: string, email: string): Promise<void> {
    await this.fill(this.nameInput, name);
    await this.fill(this.emailInput, email);
    await this.click(this.nextButton);
  }

  async enterPhoneAndSubmit(phone: string): Promise<void> {
    await this.fill(this.phoneInput, phone);
    await this.click(this.submitRequestButton);
  }

  async confirmPhoneNumber(): Promise<void> {
    await this.waitForElement(this.confirmPhoneButton);
    await this.click(this.confirmPhoneButton);
  }

  /**
   * Orchestrates the entire wizard flow from start to final confirmation.
   * @param size - Kitchen size in square feet
   * @param name - User's full name
   * @param email - User's email address
   * @param phone - Phone number
   */
  async completeWizard(size: string, name: string, email: string, phone: string): Promise<void> {
    await this.selectKitchenElements();
    await this.selectCabinetOptions();
    await this.selectPropertyType();
    await this.selectMobileHomeOption();
    await this.selectHomeownerStatus();
    await this.enterKitchenSize(size);
    await this.selectBudget();
    await this.enterContactInfo(name, email);
    await this.enterPhoneAndSubmit(phone);
    await this.confirmPhoneNumber();
  }
}
