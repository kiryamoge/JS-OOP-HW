// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

class Car{
    constructor(color) {
      this.color = color;
    }
    go(){
      console.log(`${this.color} car is driving`);
    }
  }
  
  const color = new Car('blue');
  color.go();


// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами: 
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств

class Calculator {
    constructor() {
      this.value1 = Number(prompt("Введите первое значение:"));
      this.value2 = Number(prompt("Введите второе значение:"));
    }
  
    sum() {
      return this.value1 + this.value2;
    }
  
    mul() {
      return this.value1 * this.value2;
    }
  }

  const calculator = new Calculator();
console.log(calculator.sum()); 
console.log(calculator.mul()); 


// Задание 3
// 1. Реализовать следующее мини-приложение
// https://gist.github.com/zhekix
// 2. Добавить к приложению желтый круг (пример ЗДЕСЬ)
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.

class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    this.html = `<img src="${this.imgUrl}" alt="">`;
    this.render();
    document.body.style.background = 'black';
  }

  render() {
    document.body.innerHTML = this.html;
    const image = document.querySelector('img');
    Object.assign(image.style, {
      position: 'fixed',
      top: `${this.top}px`,
      left: `${this.left}px`,
      width: `${this.width}px`
    });
  }

  moveUp() {
    return this.top -= 20
  }

  moveDown() {
    return this.top += 20
  }

  moveLeft() {
    return this.left -= 20
  }

  moveRight() {
    return this.left += 20
  }

}

const imgUrl = 'https://bit.ly/2tcDito';

const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.init();


class Circle {
    constructor(width, height, color) {
      this.widthCircle = width;
      this.height = height;
      this.color = color;
    }
  
    render() {
      const div = document.createElement('div');
      div.style.width = `${this.widthCircle}px`;
      div.style.height = `${this.height}px`;
      div.style.backgroundColor = this.color;
      div.style.borderRadius = '50%';
  
      document.body.appendChild(div);
    }
  }
  
  const circle = new Circle(150, 150, 'yellow');
  console.log(circle);
  
  circle.render();