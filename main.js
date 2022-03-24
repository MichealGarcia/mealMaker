const menu = {
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

        for (course in menu.courses) {
            if (course === courseName) {
                return menu.courses[course].push(dish);
            }
        }
        return dish;
    },

    getRandomDishFromCourse: function (courseName) {
        var dishes = menu.courses[courseName].map(function (i) {
            return i;
        })
        return dishes[Math.floor(Math.random() * dishes.length)]
    },
    generateRandomMeal: function () {
        let totalPrice = 0;
        let appetizer = this.getRandomDishFromCourse("appetizers");
        let main = this.getRandomDishFromCourse("mains");
        let dessert = this.getRandomDishFromCourse("desserts");
        totalPrice = appetizer.price + main.price + dessert.price
        console.log(`Appetizer: ${appetizer.name} \nMain: ${main.name} \nDessert: ${dessert.name} \nTotal cost: $${totalPrice}`);

    }
}

menu.addDishToCourse("appetizers", "Spinach Dip", 12);
menu.addDishToCourse("appetizers", "Crab Dip", 15);
menu.addDishToCourse("appetizers", "Artichoke Dip", 12);
menu.addDishToCourse("mains", "Salmon & Brusselsprouts", 28);
menu.addDishToCourse("mains", "Steak & Carrots", 32);
menu.addDishToCourse("mains", "Lobster Ravioli", 37);
menu.addDishToCourse("desserts", "Chocolate Mousse", 6);
menu.addDishToCourse("desserts", "Coffee Jello", 6);
menu.addDishToCourse("desserts", "Creme Brulee", 6);


meal = menu.generateRandomMeal();
