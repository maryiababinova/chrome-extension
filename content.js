let storage = window.localStorage;

//checking the category of the item
const body = document.getElementsByTagName('body');
let utag_data = body[0].children[0].innerHTML;
const idx = utag_data.indexOf('page_breadcrumb');
let category = utag_data
  .slice(idx)
  .split(':')
  .splice(1, 1)
  .toString()
  .split(',')
  .splice(0, 1)
  .toString()
  .replace(/[^a-z-]/g, '');

//checking for the CSE_Challenge value in the local storage
//and updating the affinity score
let affinity = storage.getItem('CSE_Challenge');
if (affinity) {
  affinity = JSON.parse(affinity);
} else {
  affinity = {
    'womens-clothing': 0,
    'mens-clothing': 0,
    home: 0,
    lifestyle: 0,
    beauty: 0,
  };
}
affinity[category]++;
storage.setItem('CSE_Challenge', JSON.stringify(affinity));

//checking if the item was added to cart and updating the score accordingly
const addToCart = document.getElementsByClassName(
  'js-add-to-cart o-button-basket c-product-add-to-cart__button'
);

addToCart[0].addEventListener('click', () => {
  affinity[category] += 3;
  storage.setItem('CSE_Challenge', JSON.stringify(affinity));
});
