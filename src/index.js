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
 /*  let likedMenuArray = [];
  for(let i = 0; i < menuArray.length; i += 1) {
    likedMenuArray = menuArray.filter((item) => {
      likesArray.item_id === menuArray.idMeal;
    });
  } */
  console.log('number of  entire= '+ menuArray.length);

  const likedMenuArray = menuArray.map((menuItem) =>{
    const likesFiltered = likesArray.filter((like) => like.item_id === menuItem.idMeal);
    return {
      strMealThumb: menuItem.strMealThumb,
      strMeal: menuItem.strMeal,
      idMeal: menuItem.idMeal,
      likes: likesFiltered.length === 0 ? 0 : likesFiltered[0].likes,
    };

  });

  console.log('liked items = '+likedMenuArray);


  const menuGrids = document.querySelector('.menu-grids');
  likedMenuArray.forEach(menuItem => {
    
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
   // console.log('likesFigure elem: '+likesFigure)
    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('idMeal= '+menuItem.idMeal);
      clickLoveBtn(menuItem.idMeal);
      menuItem.likes += 1;
      likesFigure.innerHTML = `${menuItem.likes}`;
      console.log("likwesfigure: "+ parseInt(likesFigure.innerHTML, 10) );
    }); 
  }); // End of forEach loop
}; // End of window onload functions