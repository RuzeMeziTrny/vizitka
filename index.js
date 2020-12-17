'use strict';

const Card = () => {
  const animateCard = () => {
    mainElm.classList.toggle('card--animation');
  };

  const changeCardContent = () => {
    const frontElm = document.querySelector('.card__front');
    const backElm = document.querySelector('.card__back');

    frontElm.classList.toggle('card--hidden');
    backElm.classList.toggle('card--hidden');
  };

  const handleClick = () => {
    animateCard();
    setTimeout(changeCardContent, 400);
  };

  const mainElm = document.createElement('main');
  mainElm.className = 'card';
  mainElm.innerHTML = `
  <article class="card__front">
    <h1 class="card__heading">Ivana Růžičková</h1>
    <img class="card__photo" src="foto.jpeg" alt="fotka Ivana">
    <div class="card__logos">
      <a href="https://www.linkedin.com/in/ivanaruzickova/"  target="_blank"> 
        <img class="card__logo" src="logo-LI.png" alt="logo LinkedIn">
      </a>
      <a href="https://github.com/RuzeMeziTrny"  target="_blank"> 
        <img class="card__logo" src="logo-GH.png" alt="logo GitHub">
      </a>
    </div>
    <button class="card__button">My story</button>
  </article>

  <article class="card__back card--hidden">
    <div>
      <p class="card__text">
        Some time ago I fell in love with HTML and CSS.
      </p>
      <p class="card__text">
      During maternity leave I've learned to create websites using HTML, CSS and Bootstrap. In December 2020 I graduated Digital Web Academy in Czechitas - three-months intensive course for front-end developers (HTML, CSS, Bootstrap, JavaScript, React). Take a look at my final project 
        <a class="card__project-link" href="https://mami-kam-jdem.netlify.app/" target="_blank">Mum, where are we going?</a>
      </p>
    </div>
    <button class="card__button">Back to profile</button>
  </article>
  `;

  mainElm
    .querySelectorAll('.card__button')
    .forEach((button) => button.addEventListener('click', handleClick));

  return mainElm;
};

document.querySelector('#app').appendChild(Card());
