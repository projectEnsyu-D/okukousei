function money_total() {
  let total = 0;
  const quantities = document.querySelectorAll('input[type="number"]');
  quantities.forEach(quantity => {
      const price = parseInt(quantity.dataset.price, 10);
      const count = parseInt(quantity.value, 10);
      total += price * count;
  });
  document.totalForm.total.value = `¥${total}`;
}

function increaseValue(id) {
  const quantityInput = document.getElementById(id);
  quantityInput.value = parseInt(quantityInput.value, 10) + 1;
  money_total();
}

function decreaseValue(id) {
  const quantityInput = document.getElementById(id);
  if (quantityInput.value > 0) {
      quantityInput.value = parseInt(quantityInput.value, 10) - 1;
      money_total();
  }
}