const getSavedCartItems = () => {
  const local = localStorage.getItem('cartItems');
  return local;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
