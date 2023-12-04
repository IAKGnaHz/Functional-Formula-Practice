/**
 * 题目难度：中等
 * 
 * 题目内容：实现一个函数，接收一个数组作为参数，返回数组中所有偶数的平均值。
 * 
 * @param arr 数组
 * @returns 平均值
 */
export const calculateAverageOfEvenNumbers = (arr: number[]): number => {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / evenNumbers.length;
    return average;
};

// 调用示例
export const arr = [1, 2, 3, 4, 5, 6];
const average = calculateAverageOfEvenNumbers(arr);
console.log(average);


/* 题目难度：困难
 * 
 * 题目内容：实现一个函数，接收一个字符串数组作为参数，返回数组中所有字符串的长度之和。
 * 
 * @param arr 字符串数组
 * @returns 长度之和
 */
export const calculateSumOfStringLengths = (arr: string[]): number => {
    const lengths = arr.map(str => str.length);
    const sum = lengths.reduce((acc, curr) => acc + curr, 0);
    return sum;
};

// 调用示例
const arr2 = ["hello", "world", "GitHub", "Copilot"];
const sum = calculateSumOfStringLengths(arr2);
console.log(sum);


/**
 * 题目难度：简单
 * 
 * 题目内容：实现一个函数，判断一个整数是否是回文数。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * @param num 整数
 * @returns 是否是回文数
 */
export const isPalindromeNumber = (num: number): boolean => {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

// 调用示例
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(-121)); // false
console.log(isPalindromeNumber(10)); // false

