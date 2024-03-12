console.log("                  Завдання 1.2.12 - 1.2.28            ");


class Square {
  constructor(a) {
    this.a = a;   //цілочисельна сторона квадрата //1.2.13 ???
  }

  static help() {
    console.log("Квадра́т — чотирикутник, у якого всі сторони рівні і всі кути прямі.");
    console.log("Площа квадрата рахується за формулою: S = a*a.");
    console.log(" Властивості квадрата:");
    console.log("  •  У квадрат завжди можна вписати коло;");
    console.log("  •  Навколо квадрата завжди можна описати коло.");
  }
    
    length() {
      return 4*this.a;
    }

    square() {
      return this.a*this.a;
    }

    info() {
      console.log("Довжина всіх 4 сторін =", this.a + ", " + this.a + ", " + this.a + ", " + this.a);
      console.log("Величини всіх 4 кутів = 90, 90, 90, 90.")
      console.log("Сума довжин сторін =", this.length())
      console.log("Площа =", this.square());
    }

}

// Square.help();

let square = new Square(3); //1.2.24
square.info();



class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this._b = b;
  }

  static help() {
    console.log("Прямокутник — це чотирикутник, усі кути якого прямі.");
    console.log("Прямокутник є особливим випадком паралелограма, в якому кожна пара прилеглих сторін перпендикулярні.");
    console.log("Властивості прямокутника:");
    console.log("  •  Протилежні сторони прямокутника рівні.");
    console.log("  •  Також це паралелограм, який має прямий кут (а отже, всі кути прямі).");
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  length() {
    return 2 * (this.a + this._b);
  }

  square() {
    return this.a * this._b;
  }

  info() {
    console.log("Довжина всіх 4 сторін =", this.a + ", " + this._b + ", " + this.a + ", " + this._b);
    console.log("Величини всіх 4 кутів = 90, 90, 90, 90.")
    console.log("Сума довжин сторін =", this.length())
    console.log("Площа =", this.square());
  }
}

// Rectangle.help();

let rectangle = new Rectangle(3, 7);
rectangle.info();

console.log("Довжина сторони b:", rectangle.b);



class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

static help() {
    console.log("Ромб — це паралелограм, у якого всі сторони рівні.");
    console.log("Слово «ромб» походить від грец. ῥόμβος (ромбос), що означає щось, що обертається.");
    console.log(" Властивості ромба:");
    console.log("  •  Це паралелограм, діагоналі якого розділяють внутрішній кут.");
    console.log("  •  В будь-який ромб можна вписати коло.");
  }
    
    length() {
      return this.a + this.a + this.a + this.a;
    }

    square() {
      let alphaRad = this.alpha * (Math.PI / 180);
      return this.a*this.a*Math.sin(alphaRad);
    }

    info() {
      console.log("Довжина всіх 4 сторін =", this.a + ", " + this.a + ", " + this.a + ", " + this.a);
      console.log("Величини всіх 4 кутів =", this.alpha, this.alpha, this.beta, this.beta)
      console.log("Сума довжин сторін =", this.length())
      console.log("Площа =", this.square());
    }

}

// Rhombus.help();

let rhombus = new Rhombus(5, 60, 120);
rhombus.info();



class Parallelogram extends Rhombus {
  constructor(a, b, alpha, beta) {
    super(a, alpha, beta);
    this.b = b;

  }

static help() {
    console.log("Паралелогра́м — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.");
    console.log("Прямокутник є особливим випадком паралелограма, в якому кожна пара прилеглих сторін перпендикулярні.");
    console.log(" Властивості паралелограма:");
    console.log("  •  Протилежні сторони паралелограма рівні.");
    console.log("  •  Протилежні кути паралелограма рівні.");
  }
    
    length() {
      return 2*(this.a + this.b);
    }

    square() {
      let alphaRad = this.alpha * (Math.PI / 180);
      return this.a*this.b*Math.sin(alphaRad);
    }

    info() {
      console.log("Довжина всіх 4 сторін =", this.a + ", " + this.b + ", " + this.a + ", " + this.b);
      console.log("Величини всіх 4 кутів =", this.alpha, this.alpha, this.beta, this.beta)
      console.log("Сума довжин сторін =", this.length())
      console.log("Площа =", this.square());
    }

}

// Parallelogram.help();

let parallelogram = new Parallelogram(3, 7, 120, 60);
parallelogram.info();



Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();



// Синтаксис присвоєння деструктуризації — це вираз JavaScript,
// який дає змогу розпаковувати значення з масивів
// або властивості з об’єктів у окремі змінні



function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

//destructuring assignment
const { a, b, c } = Triangular();

console.log("Сторони трикутника:");
console.log("a:", a, "b:", b, "c:", c);



console.log("Трикутник 1:");
const triangle1 = Triangular(3, 6, 7);
console.log("a:", triangle1.a, "b:", triangle1.b, "c:", triangle1.c);

console.log("Трикутник 2:");
const triangle2 = Triangular(6, 8, 10);
console.log("a:", triangle2.a, "b:", triangle2.b, "c:", triangle2.c);

console.log("Трикутник 3 (значення за замовчуванням):");
const triangle3 = Triangular();
console.log("a:", triangle3.a, "b:", triangle3.b, "c:", triangle3.c);



function PiMultiplier(number) {
  if (typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
    throw new Error('Недійсний аргумент: має бути дійсне число!');
  }

  return function() {
    return Math.PI * number;
  };
}

// Create three functions
const multiplyByTwoPi = PiMultiplier(2);
const multiplyByThreeHalfPi = PiMultiplier(2/3);
const divideByTwoPi = PiMultiplier(0.5);

// Log the results of the created functions
console.log("π множиться на 2:", multiplyByTwoPi());
console.log("π множиться на 2/3:", multiplyByThreeHalfPi());
console.log("π ділиться на 2:", divideByTwoPi());