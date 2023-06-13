import { generateRandomNumber } from '@functions/hello/handler.service';

describe('generateRandomNumber', () => {
    test('deve retornar um número aleatório entre 1000 e 9999', () => {
        const randomNumber = generateRandomNumber();
        expect(randomNumber).toBeGreaterThanOrEqual(1000);
        expect(randomNumber).toBeLessThanOrEqual(9999);
    });
});
