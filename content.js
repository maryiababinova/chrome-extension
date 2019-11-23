let CSE_Challenge = {
  'womens-clothing': 0,
  'mens-clothing': 0,
  home: 0,
  lifestyle: 0,
  beauty: 0,
};

// chrome.storage.sync.get(['utag_data.page_breadcrumb'], function(result) {
//   console.log('Value currently is ' + result.key);
// });
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

for (let key in CSE_Challenge) {
  if (category === key) CSE_Challenge[key]++;
}

console.log(CSE_Challenge);
// console.log(typeof utag_data, utag_data);
//console.log(c);
//
