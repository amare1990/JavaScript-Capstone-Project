<<<<<<< HEAD
=======
import './styles.css';
import logo from './assets/resource/logo.png';

const logoImage = new Image();
logoImage.src = logo;
logoImage.className = 'logo-img';
logoImage.alt = 'Logo Image';

const logoDiv = document.querySelector('.logo');
logoDiv.append(logoImage);

const humburger = document.querySelector('.humburger');
const navLinks = document.querySelector('.navlink');
const mobileMenu = document.querySelector('.mobile-menu');
humburger.addEventListener('click', (e) => {
  e.preventDefault();
  navLinks.style.display = 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.justifyContent = 'center';
  mobileMenu.append(navLinks);
  humburger.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.style.display = 'none';
  });
});
>>>>>>> dev
