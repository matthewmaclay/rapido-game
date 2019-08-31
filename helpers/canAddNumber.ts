const canAddNumber = (
  lengthOfUserInput: number,
  requiredOfUserInput: number,
  indexOfValueInExistUserInput: number
) =>
  lengthOfUserInput < requiredOfUserInput ||
  indexOfValueInExistUserInput !== -1;

export default canAddNumber;
