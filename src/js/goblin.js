import goblinImage from '../assets/goblin.png';

export default class Goblin {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('goblin');
        this.element.style.backgroundImage = `url(${goblinImage})`;
        this.element.style.backgroundSize = 'cover';
        this.element.style.visibility = 'hidden';
        document.getElementById('game-area').appendChild(this.element);
    }

    appear() {
        this.element.style.visibility = 'visible';
        this.element.style.position = 'absolute';

        const gameArea = document.getElementById('game-area');
        const goblinSize = parseInt(window.getComputedStyle(this.element).width, 10);
        const availableWidth = gameArea.offsetWidth - goblinSize;
        const availableHeight = gameArea.offsetHeight - goblinSize;

        this.element.style.left = `${Math.random() * availableWidth}px`;
        this.element.style.top = `${Math.random() * availableHeight}px`;
    }

    disappear() {
        this.element.style.visibility = 'hidden';
    }
}
