function addUpcBarcodeCheckDigit(barcode) {
    if (barcode.length !== 11) {
        throw new Error("Barcode must be 11 digits long");
    }

    let sum = 0;
    for (let i = 0; i < barcode.length; i++) {
        const digit = parseInt(barcode[i], 10);
        if (isNaN(digit)) {
            throw new Error("Barcode must contain only digits");
        }
        sum += (i % 2 === 0) ? 3 * digit : digit;
    }

    const checkCode = sum % 10;
    const checkDigit = (10 - checkCode) % 10;

    return barcode + checkDigit;
}

console.log(addUpcBarcodeCheckDigit('03600029145'));
