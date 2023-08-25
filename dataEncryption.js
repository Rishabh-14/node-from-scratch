const crypto = require("crypto");
const secret = require("secret");

function encrypt(data) {
  const cipher = crypto.createCipher("aes-256-cbc", secret);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(data) {
  const decipher = crypto.createDecipher("aes-256-cbc", secret);
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
