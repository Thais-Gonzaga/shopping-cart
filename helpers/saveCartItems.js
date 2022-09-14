const saveCartItems = (cartItem) => {
  const local = localStorage.setItem('cartItem', cartItem); 
  return local;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
