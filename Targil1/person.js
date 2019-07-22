function Person(name, age, password) {
    this.name = name
    this.age = age
    this.password = password
    this.toString = () => {
        const { name, age, password } = this
        return `${name} ${age} ${password}`;
    }
}

