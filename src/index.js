import './styles.css';
import getMenu from './modules/getmenu.js';

import logo from './assets/resources/logo.png';
const wrapper = document.querySelector('.wrapper');

const parser = new DOMParser();

const logoImage = new Image();
logoImage.src = logo;
logoImage.className = 'logo-img';
logoImage.alt = 'Logo Image';

const logoDiv = document.querySelector('.logo');
logoDiv.append(logoImage);

window.onload = async () => {
  const menuArray = await getMenu();

  console.log('Meunu array = ' +menuArray.length);
  const menuGrids = document.querySelector('.menu-grids');
  for(let i = 0; i < menuArray.length; i ++) {
    const mealsGridsSring = `
      <div>
        <img src="${menuArray[i].strMealThumb}" alt="Meal Image" class="meal-img">
        <div class="menu-details">
          <div class="meal-description">
            <p class="title">${menuArray[i].strMeal}</p>
            <div class="like" id="${menuArray[i].idMeal}">        
              <i class="fa fa-heart like-btn"></i>
            </div>
          </div>
          <div class="likes-number"> 
            <span class="number-span> </span>
            <p class="like-text"> likes </p>
          </div>
          <button type="button" class="comment-btn">Comments</button>
        </div>
      </div>`;
    const stringElement = parser.parseFromString(mealsGridsSring, 'text/html').body.firstChild;

    
    menuGrids.append(stringElement);
  };
}