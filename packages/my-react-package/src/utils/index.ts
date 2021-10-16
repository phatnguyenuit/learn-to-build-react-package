import difference from 'lodash/difference';

export const myFn = <TItem>(
  arr: TItem[],
  arr2: TItem[],
  ...restArr: TItem[][]
) => {
  return difference(arr, arr2, ...restArr);
};
