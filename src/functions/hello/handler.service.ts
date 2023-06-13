/**
 * Generates a random number between 1000 and 9999.
 *
 * @returns {number} - A random number between 1000 and 9999.
 */
export function generateRandomNumber(): number {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}
