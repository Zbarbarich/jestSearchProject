function isNearlySorted(arr) {
    if (arr.every((val, i, arr) => i === 0 || val >= arr[i - 1])) {
        return false;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            for (let j = i + 1; j < arr.length; j++) {
                const tempArr = [...arr];
                [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
                if (tempArr.every((val, k, a) => k === 0 || val >= a[k - 1])) {
                    return [i, j];
                }
            }
            return false;
        }
    }
    return false;
}

console.assert(JSON.stringify(isNearlySorted([2, 7, 5, 4])) === JSON.stringify([1, 3]));
console.assert(isNearlySorted([2, 3, 1]) === false);
console.assert(isNearlySorted([1, 2, 3]) === false);
console.assert(JSON.stringify(isNearlySorted([-1, 1, 0, 5])) === JSON.stringify([1, 2]));
console.assert(JSON.stringify(isNearlySorted([5, 6, 9, 8, 8])) === JSON.stringify([2, 4]));
console.assert(JSON.stringify(isNearlySorted([2, 1])) === JSON.stringify([0, 1]));
