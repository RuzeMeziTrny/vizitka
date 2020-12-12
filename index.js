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
    setTimeout(changeCardContent, 500);
  };

  const mainElm = document.createElement('main');
  mainElm.className = 'card';
  mainElm.innerHTML = `
  <article class="card__front">
    <h1 class="card__heading">Ivana Růžičková</h1>
    <img class="card__photo" src="foto.jpeg" alt="fotka Ivana">
    <div class="card__links">
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
    <p class="card__text">Lorem ipsum dolor sit amet.</p>
    <button class="card__button">Profile</button>
  </article>
  `;

  mainElm
    .querySelectorAll('.card__button')
    .forEach((button) => button.addEventListener('click', handleClick));

  return mainElm;
};

document.querySelector('#app').appendChild(Card());
