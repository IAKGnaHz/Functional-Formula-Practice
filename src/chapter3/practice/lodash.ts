/**
 * 创建一个数组，其值是经过转换函数处理原数组中的每个元素的结果。
 * @param array 要遍历的数组
 * @param iteratee 转换函数
 * @returns 返回一个新的数组
 */
function map<T, R>(array: T[], iteratee: (value: T, index: number, array: T[]) => R): R[] {
  const result: R[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(iteratee(array[i], i, array));
  }
  return result;
}
