function searchRotatedArray() {
    const inputArray = document.getElementById('inputArray').value;
    const inputTarget = document.getElementById('inputTarget').value;

    // Convert input string to array
    const nums = inputArray.split(',').map(num => parseInt(num.trim(), 10));
    
    const target = parseInt(inputTarget, 10);

    const result = searchRotatedArrayIndex(nums, target);

    const resultElement = document.getElementById('result');

    if (result !== -1) {
        resultElement.textContent = `Result: ${result}`;
    } else {
        resultElement.textContent = 'Target not found in the rotated sorted array.';
    }
}

function searchRotatedArrayIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // Target not found
}