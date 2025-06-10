export const checkPassword =
  /^(?=.*[!@#.$%^&*-])(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const emailRegex = RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
);
export const checkSpecialCharacter = RegExp(
  /[`!@#$%£^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
);
export const checkPasslength = RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,50}$/);
export const checkUppercase = RegExp(/^(?=.*[A-Z])/);
export const checkNumberInPass = RegExp(/^(?=.*\d.*\d)/);
export const checkName = RegExp(/^[A-Za-z-]{2,20}$/);

export const checkFullName = RegExp(/^[A-Za-z][A-Za-z\s-]*[A-Za-z]$/);
