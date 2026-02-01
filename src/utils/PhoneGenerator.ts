/**
 * Utility class for generating random data for tests
 */
export class PhoneGenerator {
  /**
   * Generates a random 10-digit American phone number
   * Format: NXXNXXXXXX where N is 2-9 and X is 0-9
   */
  static generateRandomAmericanPhone(): string {
    const areaCode = Math.floor(Math.random() * 800) + 200; // 200-999
    const exchangeCode = Math.floor(Math.random() * 800) + 200; // 200-999
    const subscriberNumber = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    
    return `${areaCode}${exchangeCode}${subscriberNumber}`;
  }
}