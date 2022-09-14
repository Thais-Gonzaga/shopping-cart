const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('1.1 Verifique se a função saveCartItems com argumento "cartItem",o localStorage.setItem é chamado', () => {
    saveCartItems('MLB1341706310')
    expect(localStorage.setItem).toHaveBeenCalled()
  });
   
  it('1.2 Verifique se a função saveCartItems com argumento "cartItem",o localStorage.setItem é chamado dois parametros', () => {
    const cartItem = 'MLB1341706310'
    saveCartItems(cartItem)
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem',cartItem)
  });
   
  // it('1.1 Verifique se ', () => {
  //   saveCartItems('MLB1341706310')
  //   expect(localStorage.setItem).toHaveBeenCalled()
  // });
   
   
});
