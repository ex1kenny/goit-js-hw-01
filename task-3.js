function getElementWidth(content, padding, border) {
  const contentInt = parseInt(content);
  const paddingInt = parseInt(padding);
  const borderInt = parseFloat(border);
  const totalSum = contentInt + (paddingInt * 2 + borderInt * 2);
  return totalSum;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
