
/**
 * 使用 TypeScript 实现 Lodash 中的数组切片方法 slice
 * @param array 要切片的数组
 * @param start 开始索引
 * @param end 结束索引（可选）
 * @returns 返回切片后的新数组
 */
function slice<T>(array: T[], start: number, end?: number): T[] {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  const result: T[] = [];
  while (start < (end ?? length)) {
    result.push(array[start++]);
  }
  return result;
}
