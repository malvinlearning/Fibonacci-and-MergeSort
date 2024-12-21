function fibs(n) {
    let array = [];
    array.push(0,1);
    for(let i = 2; i < n; i++) {
        array.push(array[i-1] + array[i-2]);      
    }
    return array;
}



function fibsRec(n) {

    if (n === 1) return [0]; // Base case for 1
    if (n === 2) return [0, 1]; // Base case for 2

    const array = fibsRec(n - 1); // Recursive call for n-1
    const nextFib = array[array.length - 1] + array[array.length - 2];
    array.push(nextFib);
    return array; 
}

console.log(fibsRec(8));

function mergeSort(array) {
    // Base case: If the array has one or no elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const middleIndex = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middleIndex);
    const rightHalf = array.slice(middleIndex);
    console.log('LEFT', leftHalf);
    console.log('RIGHT', rightHalf);
    // Recursively sort each half
    const sortedLeft = mergeSort(leftHalf);
    
    const sortedRight = mergeSort(rightHalf);
    console.log('sortedLeft', leftHalf);
    console.log('sortedRight', rightHalf);
    // Merge the sorted halves directly here
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both halves and push the smaller one to the result
    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
            result.push(sortedLeft[leftIndex]);
            console.log('RESULT LEFT', result);
            leftIndex++;
        } else {
            result.push(sortedRight[rightIndex]);
            console.log('RESULT RIGHT', result);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left half
    while (leftIndex < sortedLeft.length) {
        result.push(sortedLeft[leftIndex]);
        console.log('self RIGHT', result);
        leftIndex++;
    }

    // Add any remaining elements from the right half
    while (rightIndex < sortedRight.length) {
        result.push(sortedRight[rightIndex]);
        rightIndex++;
    }
    

    return result;
}

console.log(mergeSort([105, 79, 100, 110]));