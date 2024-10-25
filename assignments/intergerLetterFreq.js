function integerLetterFrequencies(s) {
    const frequencies = {};
    const length = s.length;
    
    for (let char of s.toUpperCase()) {
        if (char >= 'A' && char <= 'Z') {
            frequencies[char] = (frequencies[char] || 0) + 1;
        }
    }
    
    for (let letter in frequencies) {
        frequencies[letter] = Math.floor((frequencies[letter] / length) * 100);
    }
    
    return frequencies;
}

// Test cases
console.assert(JSON.stringify(integerLetterFrequencies('abca-bcab')) === JSON.stringify({'A': 33, 'B': 33, 'C': 22}));
console.assert(JSON.stringify(integerLetterFrequencies('ABCabc123')) === JSON.stringify({'A': 33, 'B': 33, 'C': 33}));
console.assert(JSON.stringify(integerLetterFrequencies('aAaAaA')) === JSON.stringify({'A': 100}));
console.assert(JSON.stringify(integerLetterFrequencies('abcdefghijklmnopqrstuvwxyz')) === JSON.stringify({
    'A': 3, 'B': 3, 'C': 3, 'D': 3, 'E': 3, 'F': 3, 'G': 3, 'H': 3, 'I': 3, 'J': 3, 'K': 3, 'L': 3, 'M': 3, 
    'N': 3, 'O': 3, 'P': 3, 'Q': 3, 'R': 3, 'S': 3, 'T': 3, 'U': 3, 'V': 3, 'W': 3, 'X': 3, 'Y': 3, 'Z': 3
}));
