export const calculateTotal = (items, tax) => {
  tax < 0 ? tax = tax * -1 : tax;

  let itemTotal = 0;
  let taxTotal = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].taxable === true) {
      taxTotal += items[i].price * tax;
    }
    itemTotal += items[i].price;
  }

  let total = itemTotal + taxTotal;

  return total;
};
