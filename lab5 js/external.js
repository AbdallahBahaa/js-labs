class Engine {
    #source;
    static #count = 0;
  
    constructor(source) {
      if (new.target === Engine) {
        throw new Error("Engine is an abstract class and cannot be instantiated directly.");
      }
      this.#source = source;
      Engine.#count++;
    }
  
    get source() {
      return this.#source;
    }
  
    static getCount() {
      return Engine.#count;
    }
  }
  
  class Car extends Engine {
    top = 0;
    left = 0;
    imgElement;
  
    constructor(top, left, source) {
      super(source);
      this.top = top;
      this.left = left;
  
      this.imgElement = document.createElement("img");
      this.imgElement.src = this.source;
      this.imgElement.style.position = "absolute";
      this.imgElement.style.top = `${this.top}px`;
      this.imgElement.style.left = `${this.left}px`;
      this.imgElement.style.width = "100px";
  
      document.body.appendChild(this.imgElement);
    }
  
    set Top(value) {
      this.top = value;
      this.imgElement.style.top = `${this.top}px`;
    }
  
    set Left(value) {
      this.left = value;
      this.imgElement.style.left = `${this.left}px`;
    }
  
    moveLeft() {
      this.left -= 10;
      this.imgElement.style.left = `${this.left}px`;
    }
  
    moveRight() {
      this.left += 10;
      this.imgElement.style.left = `${this.left}px`;
    }
  
    ChangeStyle(styleObj) {
      Object.assign(this.imgElement.style, styleObj);
    }
  
    moveCar(direction) {
      const move = () => {
        const pageWidth = document.documentElement.clientWidth;
        if (direction === "right" && this.left + this.imgElement.width < pageWidth) {
          this.moveRight();
          requestAnimationFrame(move);
        } else if (direction === "left" && this.left > 0) {
          this.moveLeft();
          requestAnimationFrame(move);
        }
      };
      move();
    }
  }
  
  window.onload = () => {
    const myCar = new Car(100, 100, "img.png"); 
    myCar.ChangeStyle({ border: "2px solid red" });
  
    setTimeout(() => myCar.moveCar("right"), 1000);
    setTimeout(() => myCar.moveCar("left"), 5000);
  };
  