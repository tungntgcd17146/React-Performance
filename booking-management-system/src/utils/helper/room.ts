import { Room } from '../../interface/roomCategory';
import { Info } from '../../interface/bookingContent';

export const convertArrayToObject = (array: (Room | Info)[]) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item.id]: item
    };
  }, initialValue);
};
