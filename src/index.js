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
  // console.log('post like result= '+clickLoveBtn(menuArray[0].idMeal))
  const likesArray = await getNumberOfLikes(); 

  const menuGrids = document.querySelector('.menu-grids');
  console.log('likesArray= '+likesArray[0].item_id);
  for (let i = 0; i < menuArray.length; i += 1) {
    
    const mealsGridsSring = `
      <div>
        <img src="${menuArray[i].strMealThumb}" class="meal-img" alt="Meal Image">
          <div class="menu-description">
            <p class="title">${menuArray[i].strMeal}</p>
            <div class="like" id="${menuArray[i].idMeal}">        
              <button type="button" class="click-like-btn">
                <i class="fa fa-heart like-btn"></i>
              </button>
            </div>
          </div>
          <div class="likes-number"> 
            <span class="number-span"> </span>
            <p class="like-text"> likes </p>
          </div>
          <button type="button" class="comment-btn">Comments</button>
      </div>`;
    const parsedElement = parser.parseFromString(mealsGridsSring, 'text/html').body.firstChild;

    menuGrids.append(parsedElement);

    const likeBtn = parsedElement.querySelector('.like-btn');
    const likesFigure = document.querySelector('.number-span');
    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('idMeal= '+menuArray[i].idMeal);
      clickLoveBtn(menuArray[i].idMeal);
      menuArray[i].likes += 1;
      likesFigure.innerHTML = `${menuArray[i].likes}`;
    }); 
  } // End of for loop
}; // End of window onload functions