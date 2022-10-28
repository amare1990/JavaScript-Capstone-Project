export const itemCounter = () => {
  const menuItem = document.querySelector('.menu-grids').childElementCount;
  return menuItem;
}