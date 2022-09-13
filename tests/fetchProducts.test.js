require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('1.1 Verifique se fetchProducts é uma função.', async () => {
    expect.assertions(1);
    
    expect(typeof fetchProducts).toBe('function');
  });

  it('1.2 Verifique se fetchProducts foi chamada com o endpoint correto', async () => {
    expect.assertions(1);
    const fectch = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('1.3 Verifique se fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect.assertions(1);
    const fetch = await fetchProducts('computador');
    expect(fetch).toMatchObject(computadorSearch);
  });

  it('1.4 Verifique se fetchProducts ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(fetchProducts()).rejects.toThrow('You must provide an url')
  });
});
