import './styles.css';
import getMenu from './modules/getmenu.js';

import logo from './assets/resources/logo.png';
import { clickLoveBtn, getNumberOfLikes } from './modules/likes.js';

const parser = new DOMParser();

const logoImage = new Image();
logoImage.src = logo;
logoImage.className = 'logo-img';
logoImage.alt = 'Logo Image';

const logoDiv = document.querySelector('.logo');
logoDiv.append(logoImage);

window.onload = async () => {
  const menuArray = await getMenu();
  const likesArray = await getNumberOfLikes();
  const likedMenuArray = [];

  for (let i = 0; i < menuArray.length; i += 1) {
    for (let j = 0; j < likesArray.length; j += 1) {
      if (likesArray[j].item_id === menuArray[i].idMeal) {
        likedMenuArray.push({
          idMeal: menuArray[i].idMeal,
          strMealThumb: menuArray[i].strMealThumb,
          strMeal: menuArray[i].strMeal,
          likes: likesArray.length === null ? 0 : likesArray[j].likes,
        });
      }
    }
  }

  const menuGrids = document.querySelector('.menu-grids');
  likedMenuArray.forEach((menuItem) => {
    const mealsGridsSring = `
      <div>
        <img src="${menuItem.strMealThumb}" class="meal-img" alt="Meal Image">
          <div class="menu-description">
            <p class="title">${menuItem.strMeal}</p>
            <div class="like" id="${menuItem.idMeal}">        
              <button type="button" class="click-like-btn">
                <i class="fa fa-heart like-btn"></i>
              </button>
            </div>
          </div>
          <div class="likes-number"> 
            <span class="number-span"> ${menuItem.likes} </span>
            <p class="like-text"> likes </p>
          </div>
          <button type="button" class="comment-btn">Comments</button>
      </div>`;
    const parsedElement = parser.parseFromString(mealsGridsSring, 'text/html').body.firstChild;

    menuGrids.append(parsedElement);

    const likeBtn = parsedElement.querySelector('.like-btn');
    const likesFigure = parsedElement.querySelector('.number-span');
    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clickLoveBtn(menuItem.idMeal);
      menuItem.likes += 1;
      likesFigure.innerHTML = `${menuItem.likes}`; // To display the updated number of likes before refreshing the page
    });
  }); // End of forEach loop
}; // End of window onload functions