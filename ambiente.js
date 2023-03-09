class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }
}
const person1 =  new Person('Vinicius', 'Lavoura', '22-03-2001')
console.log(person1.getBirthYear())
    

