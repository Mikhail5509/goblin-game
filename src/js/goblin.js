// goblin.js
export default class Goblin {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('goblin'); // Добавление CSS класса для стилизации
        document.getElementById('game-area').appendChild(this.element); // Добавляем элемент в игровую область
    }

    // Метод для появления гоблина
    appear() {
        this.element.style.display = 'block';
        this.element.style.position = 'absolute';
    
        const maxLeft = document.getElementById('game-area').offsetWidth - 50;
        const maxTop = document.getElementById('game-area').offsetHeight - 50;
    
        this.element.style.left = `${Math.random() * maxLeft}px`;
        this.element.style.top = `${Math.random() * maxTop}px`;
    }

    // Метод для скрытия гоблина
    disappear() {
        this.element.style.display = 'none'; // Скрываем гоблина
    }
}
