function encodeSubstitutionCipher(msg, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return [...msg].map(char => {
        const index = alphabet.indexOf(char.toUpperCase());
        return index !== -1 ? key[index][char === char.toUpperCase() ? 'toUpperCase' : 'toLowerCase']() : char;
    }).join('');
}

function decodeSubstitutionCipher(encodedMsg, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return [...encodedMsg].map(char => {
        const index = key.indexOf(char.toUpperCase());
        return index !== -1 ? alphabet[index][char === char.toUpperCase() ? 'toUpperCase' : 'toLowerCase']() : char;
    }).join('');
}
