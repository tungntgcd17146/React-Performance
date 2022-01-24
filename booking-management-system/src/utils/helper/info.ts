import { PostInfo } from '../../interface/bookingContent';

export const convertArrayToObject = (array: PostInfo[], key: string) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};
