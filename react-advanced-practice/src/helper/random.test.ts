/* eslint-disable no-undef */
import { getRandomId, getRandomName, getRandomQuantity, getRandomPrice } from './random';

describe('test random function', () => {
  test('get random id', () => {
    expect(getRandomId(10).length).toEqual(10);
  });
  test('get random id', () => {
    expect(getRandomId(5).length).toEqual(5);
  });
  test('get random id', () => {
    expect(getRandomId(15).length).toEqual(15);
  });
  test('get random quantity', () => {
    expect(getRandomQuantity(2).length).toEqual(2);
  });
  test('get random quantity', () => {
    expect(getRandomQuantity(3).length).toEqual(3);
  });
  test('get random quantity', () => {
    expect(getRandomQuantity(4).length).toEqual(4);
  });

  const randomRoom = ['Deluxe Room', 'Luxury Room', 'Penhouse Room', 'Executive Room'];
  test('get random name', () => {
    expect(randomRoom.includes(getRandomName())).toBe(true);
  });

  const randomPrice = [50, 100, 150, 200];
  test('get random price', () => {
    expect(randomPrice.includes(getRandomPrice())).toBe(true);
  });
});
