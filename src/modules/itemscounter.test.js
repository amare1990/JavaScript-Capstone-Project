import menuArray from "../index.js";


test('Testing if the number of menus created is correct', () => {
  // document.body.innerHTML = '<div class=".menu-item"></div>';
  const lenMenuItem = (document.querySelector('.menu-grids')).childElementCount;
  expect(menuArray.length).toBe(lenMenuItem);

  /* document.body.innerHTML = '<div class="meals-section"><div>meal1</div></div>';
  expect(menuArray.length).toBe(1); */
});

test('The testing should return 0 if the menu items are not fetched from the remote API', () => {
  const emptyMenu = document.querySelector('.menu-grids');
  emptyMenu.innerHTML = '';
  expect(menuArray.length).toBe(0);
});