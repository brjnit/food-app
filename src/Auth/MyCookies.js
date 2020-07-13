import Cookies from 'js-cookie';
import Encryption from './encrypt';

const readCookie = (key) => {
    const encryptedValue = Cookies.get(key)
    console.log("encryptedValue ",encryptedValue)
    return encryptedValue ? Encryption.Decrypt(encryptedValue) : ""
}

const setCookie = (key, value) => {
    console.log("key value ", key, value)
    const encryptedValue = value ? Encryption.Encrypt(value): value;
    Cookies.set(key, encryptedValue)
}

export default {
    setCookie,
    readCookie
}

