// project
// MEAL MAKER


let menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }
        if (courseName === "appetizers") {
            menu.courses.appetizers.push(dish)
        } else if (courseName === "mains") {
            menu.courses.mains.push(dish)
        } else {
            menu.courses.desserts.push(dish)
        }
    },
    getRandomDishFromCourse: function (courseName) {
        let dishes = [];
        if (courseName === "appetizers") {
            for (items in menu.courses.appetizers) {
                dishes.push(menu.courses.appetizers[items].name)
            }
        } else if (courseName === "mains") {
            for (items in menu.courses.mains) {
                dishes.push(menu.courses.mains[items].name)
            }
        } else {
            for (items in menu.courses.desserts) {
                dishes.push(menu.courses.desserts[items].name)
            }
        }
        return dishes[Math.floor(Math.random() * dishes.length)]
    },
    generateRandomMeal: function () {
        // let prices = [];
        // let price = 0;

        let appetizer = menu.getRandomDishFromCourse("appetizers");
        let main = menu.getRandomDishFromCourse("main");
        let dessert = menu.getRandomDishFromCourse("dessert");




        // console log the courses, and the total price.
        console.log(`We will start you with a ${appetizer} apertif, then serve you a fresh slab of ${main}, ending with a sweet helping of ${dessert}!`);
        // console.log(`The total for this choice will be $${getPrice}.`);
    }

}
menu.addDishToCourse("appetizers", 'dog', 2);
menu.addDishToCourse("appetizers", 'lizard', 2);
menu.addDishToCourse("appetizers", 'cat', 2);
menu.addDishToCourse("appetizers", 'mouse', 2);
menu.addDishToCourse("mains", 'dog', 3);
menu.addDishToCourse("mains", 'lizard', 3);
menu.addDishToCourse("mains", 'mouse', 3);
menu.addDishToCourse("mains", 'cat', 3);
menu.addDishToCourse("dessert", 'dog', 4);
menu.addDishToCourse("dessert", 'lizard', 4);
menu.addDishToCourse("dessert", 'cat', 4);
menu.addDishToCourse("dessert", 'mouse', 4);
menu.generateRandomMeal();








