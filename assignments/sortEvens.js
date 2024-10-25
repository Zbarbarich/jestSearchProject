function sortEvens(arr) {

    const evens = arr.filter(num => num % 2 === 0);

    evens.sort((a, b) => a - b);

    let evenIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (L[i] % 2 === 0) {
            L[i] = evens[evenIndex++];
        }
    }
}



