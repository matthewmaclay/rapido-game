const generate = (amount: number, maxNumber: number, array: any = []): any => {
  if (array.length >= amount) {
    return array;
  }
  const mySet = new Set([...array, Math.floor(Math.random() * maxNumber)]);
  return generate(amount, maxNumber, [...Array.from(mySet)]); // тс не поддерживает spread на set
};

export default generate;
