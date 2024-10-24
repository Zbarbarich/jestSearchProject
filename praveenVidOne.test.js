// longestCommonPrefix.test.js
import longestCommonPrefix from './longestCommonPrefix';

describe('Longest Common Prefix Function', () => {
    test('finds the longesty common prefix in ["flower", "flow", "flight"]', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    test('returns an empty string for ["dog", "racecar", "car"]', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    test('finds the longest common prefix in ["interspecies", "interstellar", "interstate"]', () => {
        expect(longestCommonPrefix(["interspecies", "interstellar", "interstate"])).toBe("inters")
    });

    test('returns an empty string for an empty array', () => {
        expect(longestCommonPrefix([])).toBe("");
    });
});