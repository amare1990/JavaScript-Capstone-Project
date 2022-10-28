/**
* @jest-environment jsdom
*/
import itemCounter from './itemscounter.js';

test('Testing if the number of menus is zero before fetching menu items from the API', () => {
  document.body.innerHTML = '<section class="menu-grids"> </section>';
  expect(itemCounter()).toBe(0);
});
test('Check if the number of menu items is one when div block is added', () => {
  document.body.innerHTML = '<section class="menu-grids"> <div class="menu-item"> menu1</div></section>';
  expect(itemCounter()).toBe(1);
});
test('Check if the number of menu items is two when a section with two div blocks are added', () => {
  document.body.innerHTML = '<section class="menu-grids"> <div class="menu-item"> menu2</div> <div class="menu-item"> menu2</div></section>';
  expect(itemCounter()).toBe(2);
});
test('Should return 0, i.e., inserting fetched data is unsuccessful due to wron section class', () => {
  document.body.innerHTML = '<section class="menu"> <div class="menu-item"> menu</div> </section>';
  expect(itemCounter()).toEqual(0);
});
