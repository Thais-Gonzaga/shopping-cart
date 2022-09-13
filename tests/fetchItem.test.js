require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('1.1 Verifique se fetchItem é uma função.', async () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('1.2 Verifique se fetchItem é chamada com argumento "MLB1615760527";.', async () => {
    expect.assertions(1);
    const fectch = fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('1.3 Verifique se fetchItem foi chamada com o endpoint correto', async () => {
    expect.assertions(1);
    const fectch = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('1.4 Verifique se fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    expect.assertions(1);
    const fetch = await fetchItem('MLB1615760527');
    expect(fetch).toMatchObject(item);
  });

  it('1.5 Verifique se fetchProducts ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(fetchItem()).rejects.toThrow('You must provide an url')
  });

});
