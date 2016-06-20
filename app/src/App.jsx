'use strict';

class Hello {
    run() {
        document.querySelector("#helloDiv").innerHTML = "hello world";
    }
}

var hello = new Hello();
hello.run();

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

button1.onclick = function() {populate('flyguy', button1.textContent)};
button2.onclick = function() {populate('yumyum', button2.textContent)};
button3.onclick = function() {populate('boogy', button3.textContent)};
button4.onclick = function() {populate('error', button3.textContent)};

// Factory Function
function Hero() {}

Hero.call = function(type, name) {
    var types = {
        flyguy: FlyGuy,
        yumyum: YumYum,
        boogy: Boogy
    }

    if (typeof types[type] === 'undefined') {
        return {message: 'no type found'}
    }

    var hero = types[type](name);

    hero.message = "I am a hero";

    return hero;
}

function FlyGuy(name) {
    return {
        name: name,
        power: "Flight",
        food: "Honey Buns"
    };
}

function YumYum(name) {
    return {
        name: name,
        power: "Speed",
        food: "Chinese Takeout"
    };
}

function Boogy(name) {
    return {
        name: name,
        power: "Invisibility",
        food: "Unknown"
    };
}

function populate(type, name) {
    var hero = Hero.call(type, name);
    document.querySelector("#name").innerHTML = hero.name ? hero.name : '';
    document.querySelector("#power").innerHTML = hero.power ? hero.power : '';
    document.querySelector("#food").innerHTML = hero.food ? hero.food : '';
    document.querySelector("#message").innerHTML = hero.message ? hero.message : 'no message';
}
