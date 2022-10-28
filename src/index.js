import './styles.css';
import getMenu from './modules/getmenu.js';
import './stylesheets/comment.css';
import showPopup from './modules/commentsPopup.js';

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

  const menuGrids = document.querySelector('.menu-grids');
  for (let i = 0; i < menuArray.length; i += 1) {
    const mealsGridsSring = `
      <div>
        <img src="${menuArray[i].strMealThumb}" alt="Meal Image" class="meal-img">
          <div class="meal-description">
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
      clickLoveBtn(menuArray[i].idMeal);
      menuArray[i].likes += 1;
      likesFigure.innerHTML = `${menuArray[i].likes}`;
    }); 

    mealsSection.append(stringElement);

    const commentbtn = stringElement.querySelector('.comment-btn');
    const popUpSection = document.querySelector('.popup-section');
    // popUpSection.className = 'comment-wrapper';
    popUpSection.hight = '100vh';
    let str = `div class="popup-details"
    <img src = "" alt = "Image in tghe popup" class="popup-img">
    <div class="popup-desc">
      <h3 class="title-comment> example <h3>
    </div>
    </div>
    `;

    const parsedComment = parser.parseFromString(str, 'text/html').body.firstChild;
    popUpSection.append(parsedComment);
    commentbtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.classList.remove('hide');
      showPopup(mealWithLike.idMeal);
    });
  }; // End of tghe for loop
  
}; // End of window onload functions