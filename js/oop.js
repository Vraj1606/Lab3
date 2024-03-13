
// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

function Hamburger(bun, quantity, meat, cheese, toppings, sauces) 
{
    this.bun = bun;
    this.quantity = quantity;
    this.meat = meat;
    this.cheese = cheese;
    this.toppings = toppings;
    this.sauces = sauces;

    this.descr = function()
    {
        description = "A burger with " + this.quantity + " " + this.meat + " patty with " + this.sauces + " sauces on a " + this.bun + " bun topped with " + this.cheese + " cheese " + this.toppings.join(", ");
        return description;
    };
}

// Example usage:
let myHamburger = new Hamburger("multigrain", "single", "veggie", "blue", ["lettuce", "tomato", "& pickles"], ["G14, Secret, Deception"]);
console.log(myHamburger.descr());

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS