const onlyNumber = (number: any) => {
  console.log("number", number);
  const test = number.replace(/\D/g, "");
  return test;
};

export { onlyNumber };
