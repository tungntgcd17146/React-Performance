export const getRandomId = (length: number) => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
};

export const getRandomName = () => {
  const randomChars = ['Deluxe Room', 'Luxury Room', 'Penhouse Room', 'Executive Room'];
  const result = Math.floor(Math.random() * randomChars.length);
  return randomChars[result];
};

export const getRandomPrice = () => {
  const randomChars = [50, 100, 150, 200];
  const result = Math.floor(Math.random() * randomChars.length);
  return randomChars[result];
};

export const getRandomQuantity = (length: number) => {
  const randomChars = '123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
};
