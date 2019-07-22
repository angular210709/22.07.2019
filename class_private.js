class Person {
    
    #x;
    constructor(_x)
    {
      this.#x = _x
    }

    get X() { return this.#x }
    set X(points) { this.#x = points }
}
