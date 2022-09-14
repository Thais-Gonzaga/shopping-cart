const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('1.1 Verifique se ao chamar função getSavedCartItems, o localStorage.getItem é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled()
  });
   
  it('1.2 Verifique se ao chamar função getSavedCartItems,o localStorage.getItem é com parametro "cartItem"', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  });
});
