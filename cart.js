const addToCartButton = document.querySelector('.add-to-cart');
const cart = document.querySelector('.cart ul');
let cartTotal = 0;

addToCartButton.addEventListener('click', function() {
  const productName = this.parentNode.querySelector('h2').textContent;
  const productPrice = parseFloat(this.parentNode.querySelector('p').textContent.replace('$', ''));
  const cartItem = document.createElement('li');
  cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
  cart.appendChild(cartItem);
  cartTotal += productPrice;
  document.querySelector('.cart p').textContent = `Total: $${cartTotal.toFixed(2)}`;
});
