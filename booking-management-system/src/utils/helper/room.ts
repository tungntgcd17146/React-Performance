import { PostRoom } from '../../interface/roomCategory';

export const convertArrayToObject = (array: PostRoom[], key: string) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};
