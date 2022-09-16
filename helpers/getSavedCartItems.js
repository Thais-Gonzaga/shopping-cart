const getSavedCartItems = () => {
  const local = localStorage.getItem('cartItems') || '[]';
  return JSON.parse(local);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
