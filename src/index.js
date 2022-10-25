import './styles.css';

const title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'Welcome!';
const wrapper = document.querySelector('.wrapper');
wrapper.append(title);