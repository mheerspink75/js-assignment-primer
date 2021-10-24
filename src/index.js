export const calculateTotal = (items, tax) => {
  let itemTotal = 0;
  let taxTotal = 0;

  if (tax < 0) {
    tax = tax * -1;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].taxable === true) {
      taxTotal += items[i].price * tax;
    }
    itemTotal += items[i].price;
  }

  let total = itemTotal + taxTotal;

  return total;
};
