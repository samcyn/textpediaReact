/**
 * created by Samson Iyanda on 10-10-2018
 */
//

const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validateField = (value, type) => {
  if (type === "email") {
    return isValidEmail.test(value);
  }
  if (type === "phone") {
    return value.length > 1;
  }
};

export const validateToken = token => {
  if (!token || token.length < 25) {
    return false;
  } else {
    return true;
  }
};

export const errorHandler = err => {
  // N E T W O R K - E R R O R
  if (err.message === "Network Error" && err.response === undefined) {
    return "You are offline, try again when you're online!";
  }
  // S E R V E R - E R R O R
  else if (err.response && err.response.status) {
    return err.response.data;
  }
  // A N Y - O T H E R - I S S U E
  else {
    return "There seems to be an issue with the request. Try again later."
  }
};
