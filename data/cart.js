export const cart = [];

export function addToCart (productId) {
  const quantitySelected = document.querySelector(`.js-product-quantity-${productId}`);
  const selectedQuantity = Number(quantitySelected.value);
  let matchingItem = '';

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += selectedQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: selectedQuantity
    });
  }
}