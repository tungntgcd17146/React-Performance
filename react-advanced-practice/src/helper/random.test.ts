/* eslint-disable no-undef */
import { getRandomId, getRandomName, getRandomQuantity, getRandomPrice } from './random';

describe('test random function', () => {
  test('Get random id correctly with chosen length', () => {
    expect(getRandomId(10).length).toEqual(10);
  });

  test('Get random quantity correctly with chosen length', () => {
    expect(getRandomQuantity(3).length).toEqual(3);
  });

  test('Get random name correctly with some name defined', () => {
    const randomRoom = ['Deluxe Room', 'Luxury Room', 'Penhouse Room', 'Executive Room'];
    expect(randomRoom.includes(getRandomName())).toBe(true);
  });

  test('Get random price correctly with some name defined', () => {
    const randomPrice = [50, 100, 150, 200];
    expect(randomPrice.includes(getRandomPrice())).toBe(true);
  });
});
