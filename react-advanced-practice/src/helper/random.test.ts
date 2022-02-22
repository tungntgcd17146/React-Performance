/* eslint-disable no-undef */
import { isStringObject, isNumberObject } from 'util/types';
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
  test('get random name', () => {
    expect(isStringObject(getRandomName())).toBe(false);
  });
  test('get random price', () => {
    expect(isNumberObject(getRandomPrice())).toBe(false);
  });
});
