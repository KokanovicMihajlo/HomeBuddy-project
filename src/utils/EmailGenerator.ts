/**
 * Utility class for generating random email addresses for tests
 */
export class EmailGenerator {
  /**
   * Generates a random email address
   * Format: test.randomString@example.com
   */
  static generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 11);
    const timestamp = Date.now();
    return `test.${randomString}.${timestamp}@example.com`;
  }
}
