// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const [items] = document.getElementsByClassName('items');
const [cartItems] = document.getElementsByClassName('cart__items');
const idItem = document.getElementsByClassName('item_id');
const itemAdd = document.getElementsByClassName('item__add');
const cart = document.getElementsByClassName('cart')[0];
console.log(cart);

const elementPrice = document.createElement('p');
elementPrice.className = 'total-price';
cart.appendChild(elementPrice); 

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 let priceProduct = 0;
 const creteTotalSoma = (price) => {
   priceProduct += price;
   elementPrice.innerText = `Total: ${priceProduct}`;
 };
 
 const createTotalSub = (price) => {
  priceProduct -= +price;
  elementPrice.innerText = `Total: ${priceProduct}`;
};

 const removeLocalStorege = (key) => {
  const oldList = getSavedCartItems();
  const newList = oldList.filter(({ key: saveKey }) => saveKey !== key);
  saveCartItems(newList);  
 };
 // console.log((element.innerText.split('|')[0]).split(' ')[1]);
 // console.log((element.innerText.replace());
 
 const cartItemClickListener = (event) => {
  const element = event.target;
  const priceRemove = (element.innerText.split('|')[2]).split('$')[1];
  cartItems.removeChild(element);
  removeLocalStorege(element.id);
  createTotalSub(priceRemove);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createList = async (products) => {
  const array = await fetchProducts(products);
  array.forEach((item) => items.appendChild(createProductItemElement(item)));
};

const date = async (id) => {
  const { title, price } = await fetchItem(id);
  const atual = getSavedCartItems();
  const key = `${Math.random()}`.replace('.', '');
  atual.push({ id, title, price, key });
  saveCartItems(atual);
  const element = createCartItemElement({ id, title, price });
  element.id = key;
  cartItems.appendChild(element);
  creteTotalSoma(price);
};

window.onload = async () => {
  await createList('computador');
  [...itemAdd].forEach((btn, index) => {
    btn.addEventListener('click', () => { 
      const id = idItem[index].innerText;
      date(id);
    });
  });
  const saveList = getSavedCartItems();
  saveList.forEach(({ id, title, price, key }) => {
    const element = createCartItemElement({ id, title, price });
    element.id = key;
    creteTotalSoma(price);
    cartItems.appendChild(element);
  });
};
