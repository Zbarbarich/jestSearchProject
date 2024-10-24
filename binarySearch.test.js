import binarySearch from './binarySearch';

describe('Binary Search Function', () => {
    test('finds the index of 5 in [1, 3, 5, 7, 9]', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    test('returns -1 for 8 in [1, 3, 5, 7, 9]', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 8)).toBe(-1);
    });

    test('finds the index of 7 in [1, 3, 5, 7, 9]', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    test('returns -1 for 0 in [1, 3, 5, 7, 9]', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 0)).toBe(-1);
    });
});