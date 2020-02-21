import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />,document.getElementById('root'));

class Animal
{
    constructor(name, age)
    {
        this.name= name;
        this.age=age;
    }
    speak()
    {
        console.log('I am',this.name,'I am',this.age,'years old');
    }
}

const animal1= new Animal("Jumbo", 16);
animal1.speak();

console.log(animal1);

class Lion extends Animal{
    constructor(name, age, furColor , speed)
    {
        super(name,age);
        this.furColor= furColor;
        this.speed=speed;
    }
    roar()
    {
        console.log
        (
            "ROOAR!! "
            ,this.furColor,
            "furColor and I can run"
            ,this.speed,
            "miles per hour"
        );
    }
}

const animal2= new Lion("Simba", 8 ,"red", 90);
animal2.speak();
animal2.roar();
console.log(animal2);
