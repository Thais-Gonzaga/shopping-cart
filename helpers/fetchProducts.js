const fetchProducts = async (product) => {
  if (!product) { throw new Error('You must provide an url'); }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(endpoint);
  const listProducts = await response.json();
  return listProducts;
};

// fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
