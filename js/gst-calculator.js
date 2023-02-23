const gstRate = 0.05

const calculateGST = function(subTotal) {
  // Move repeated code here
  const gst = subTotal * gstRate;
  const total = subTotal + gst;
  return total;
}
// Refactor the following code so that gst totals are calculated by invoking calculateGST(). Example:
// calculateGST(subTotal1);

// Sub Total 1
const subTotal1 = 40;
const totalOne = calculateGST(subTotal1)
console.log(totalOne)

// Sub Total 2
const subTotal2 = 55;
console.log ('55')

// Sub Total 3
const subTotal3 = 32.45;
console.log(calculateGST(subTotal3))

// function // Argument
calculateGST(subTotal1);
calculateGST(subTotal2);
calculateGST(subTotal3);