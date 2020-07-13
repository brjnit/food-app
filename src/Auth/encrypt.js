const CryptoJS = require("crypto-js");
const secretKey = "key@123";
//Encrypt
const Encrypt = (value) => {
   return CryptoJS.AES.encrypt(value.toString(), secretKey).toString();
}
// Decrypt
const Decrypt = (encryptedValue) => {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
 }

 export default {
    Encrypt,
    Decrypt
 }
