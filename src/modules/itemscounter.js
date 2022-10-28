export const itemCounter = () => {
  const menuItem = document.querySelectorAll('.menu-grids > div');
  return menuItem.length;
}