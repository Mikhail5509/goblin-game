import goblinImage from '../assets/goblin.png';

export default class Goblin {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('goblin');
    this.element.style.backgroundImage = `url(${goblinImage})`;
    this.element.style.backgroundSize = 'cover';
    document.getElementById('game-area').appendChild(this.element);
    this.isVisible = false;
  }

  appear() {
    this.element.style.display = 'block';
    this.element.style.position = 'absolute';

    const gameArea = document.getElementById('game-area');
    if (!gameArea) {
      throw new Error('Элемент #game-area не найден в DOM');
    }

    const goblinSize = parseInt(window.getComputedStyle(this.element).width, 10);
    const maxLeft = gameArea.offsetWidth - goblinSize;
    const maxTop = gameArea.offsetHeight - goblinSize;

    this.element.style.left = `${Math.random() * maxLeft}px`;
    this.element.style.top = `${Math.random() * maxTop}px`;
    this.isVisible = true;
  }

  disappear() {
    this.element.style.display = 'none';
    this.isVisible = false;
  }
}
