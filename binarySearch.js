function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        //console.log("l, r, m", left, right, mid);
        //console.log("array value, target value", arr[mid], target);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Target not found 
}

const sortedArray = [1, 3, 5, 7, 9];
console.log(binarySearch(sortedArray, 5)); // Expected output: 2
console.log(binarySearch(sortedArray, 8)); // Expected output: -1
console.log(binarySearch(sortedArray, 7)); // Expected output: 3


export default binarySearch;