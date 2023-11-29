
/**
 * 函数名称: chunk
 * 难度: 中等
 * 要求:
 *   - 接收一个数组和一个数字作为参数
 *   - 将数组拆分成指定大小的多个块
 *   - 返回一个新的二维数组，包含拆分后的块
 * 
 * 示例：
 * chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
 * chunk([1, 2, 3, 4, 5], 1) => [[1], [2], [3], [4], [5]]
 * 
 * @param array 要拆分的数组
 * @param size 拆分的块大小
 * @returns 拆分后的二维数组
 */
function chunk(array: any[], size: number): any[][] {
  // BEGIN: Your code here
  const chunkedArray: any[][] = [];
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
  // END: Your code here
}

// 调用示例
const arr1 = [1, 2, 3, 4, 5];
const result1 = chunk(arr1, 1);
console.log(result1)
