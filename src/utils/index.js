const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


export const validateField = (value, type) => {
  if (type === 'email') {
    return isValidEmail.test(value);
  }
  if (type === 'phone') {
    return value.length > 1
  }
}

export const validateToken = (token) => {
  if (!token || token.length < 25) {
    return false;
  }
  else {
    return true;
  }
}