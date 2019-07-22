class Person {
    
    #name;
    
    constructor(_name)
    {
      this.#name = _name
    }

    get Name() { return this.#name}
    set Name(_name) { this.#name = _name }
}
