class Hamburger {
    constructor (price,calories,title) {
        this.price = price
        this.calories = calories
        this.title = title
        }
        getPrice(){
            return this.price
        }
        getCalories(){
            return this.calories
        }
        setPrice(newPrice){
            this.price = newPrice
        } 
        setCalories(newCalories){
            this.calories = newCalories
        }   
        addCheese(){
            this.price+=10
            this.calories+=20
        }
        addSalad(){
            this.price+=20
            this.calories+=5
        }
        addPotato(){
            this.price+=15
            this.calories+=10
        }
        addSpice(){
            this.price+=15
            this.calories+=0
        }
        addMayo(){
            this.price+=20
            this.calories+=5
        }
}

const smallBurger = new Hamburger(50,20,"smallburger")
const bigBurger = new Hamburger(100,40,'bigBurger')



const menu = document.querySelector('.menu')
const menuBtnBigburger = document.createElement('button')
menuBtnBigburger.textContent = `${bigBurger.title}  price: ${bigBurger.price} `
menu.appendChild(menuBtnBigburger)
const menuBtnSmallBurger = document.createElement('button')
menuBtnSmallBurger.textContent = `${smallBurger.title}  price: ${smallBurger.price} `
menu.appendChild(menuBtnSmallBurger)

