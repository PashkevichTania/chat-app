const aes256 = require('aes256');

const secret_key = process.env.REACT_APP_SECRET_KEY;

export const toEncrypted = (text: string) => {
  return aes256.encrypt(secret_key, text);
};

export const toDecrypted = (cipher: string, username: string) => {
  return aes256.decrypt(secret_key, cipher);
};