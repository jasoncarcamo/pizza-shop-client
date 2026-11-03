
const MenuItemsData = [
    {
        id: 1,
        category: "Pizza",
        name: "Neapolitan Pizza",
        img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
        description: "Classic round pizza with tomato sauce, mozzarella cheese, grated cheese, and oregano.",
        ingredients: [
            "Tomato sauce",
            "Mozzarella cheese",
            "Grated cheese",
            "Oregano"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 10.95,
        price_medium: 12.95,
        price_large: 14.95
    },
    {
        id: 2,
        category: "Pizza",
        name: "Margherita Pizza",
        img: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
        description: "Fresh mozzarella, marinara sauce, basil, oregano, and extra virgin olive oil.",
        ingredients: [
            "Fresh mozzarella cheese",
            "Fresh marinara sauce",
            "Basil",
            "Oregano",
            "Extra virgin olive oil"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 12.95,
        price_medium: 16.95,
        price_large: 18.95
    },
    {
        id: 3,
        category: "Pizza",
        name: "Sicilian Pizza",
        img: "https://images.pexels.com/photos/261996/pexels-photo-261996.jpeg",
        description: "Thick, airy square pizza topped with our special tomato sauce, melted mozzarella, grated cheese, and oregano.",
        ingredients: [
            "Special tomato sauce",
            "Mozzarella cheese",
            "Grated cheese",
            "Oregano"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 10.95,
        price_medium: 12.95,
        price_large: 14.95
    },
    {
        id: 4,
        category: "Pasta",
        name: "Alfredo Pasta",
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        description: "Pasta tossed in a rich, creamy Alfredo sauce and finished with grated Parmigiano cheese.",
        ingredients: [
            "Alfredo sauce",
            "Parmigiano cheese"
        ],
        size_small: "7 oz",
        size_medium: "11 oz",
        size_large: "15 oz",
        price_small: 6.95,
        price_medium: 8.95,
        price_large: 10.95
    },
    {
        id: 5,
        category: "Pasta",
        name: "Baked Ziti",
        img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        description: "Penne pasta with tomato sauce and ricotta, baked with melted mozzarella cheese.",
        ingredients: [
            "Tomato sauce",
            "Ricotta",
            "Mozzarella cheese"
        ],
        size_small: "7 oz",
        size_medium: "11 oz",
        size_large: "15 oz",
        price_small: 6.95,
        price_medium: 8.95,
        price_large: 10.95
    },
    {
        id: 6,
        category: "Pasta",
        name: "Penne alla Vodka",
        img: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg",
        description: "Penne in a creamy pink vodka sauce with diced prosciutto and onion.",
        ingredients: [
            "Vodka sauce",
            "Diced prosciutto",
            "Onion"
        ],
        size_small: "7 oz",
        size_medium: "11 oz",
        size_large: "15 oz",
        price_small: 6.95,
        price_medium: 8.95,
        price_large: 10.95
    },
    {
        id: 7,
        category: "Hero",
        name: "Chicken Parmigiana Hero",
        img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg",
        description: "Breaded chicken cutlet topped with tomato sauce and melted mozzarella on a toasted hero roll.",
        ingredients: [
            "Breaded chicken cutlet",
            "Tomato sauce",
            "Mozzarella cheese"
        ],
        size_small: "6 inches",
        size_medium: null,
        size_large: "12 inches",
        price_small: 5.99,
        price_medium: 0,
        price_large: 8.99
    },
    {
        id: 8,
        category: "Hero",
        name: "Meatball Parmigiana Hero",
        img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
        description: "Tender meatballs covered with tomato sauce and melted mozzarella on a fresh hero roll.",
        ingredients: [
            "Meatballs",
            "Tomato sauce",
            "Mozzarella cheese"
        ],
        size_small: "6 inches",
        size_medium: null,
        size_large: "12 inches",
        price_small: 5.99,
        price_medium: 0,
        price_large: 8.99
    },
    {
        id: 9,
        category: "Hero",
        name: "Veal Parmigiana Hero",
        img: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
        description: "Breaded veal cutlet topped with tomato sauce and melted mozzarella on a toasted hero roll.",
        ingredients: [
            "Breaded veal cutlet",
            "Tomato sauce",
            "Mozzarella cheese"
        ],
        size_small: "6 inches",
        size_medium: null,
        size_large: "12 inches",
        price_small: 5.99,
        price_medium: 0,
        price_large: 8.99
    },
    {
        id: 10,
        category: "Pizza",
        name: "Pepperoni Pizza",
        img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg",
        description: "Classic mozzarella pizza topped generously with savory pepperoni.",
        ingredients: [
            "Tomato sauce",
            "Mozzarella cheese",
            "Pepperoni",
            "Oregano"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 12.95,
        price_medium: 15.95,
        price_large: 19.95
    },
    {
        id: 11,
        category: "Pizza",
        name: "White Pizza",
        img: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
        description: "A creamy, cheese-forward pizza with ricotta, mozzarella, garlic, and olive oil.",
        ingredients: [
            "Ricotta",
            "Mozzarella cheese",
            "Garlic",
            "Olive oil"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 13.95,
        price_medium: 17.95,
        price_large: 21.95
    },
    {
        id: 12,
        category: "Pizza",
        name: "Supreme Pizza",
        img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
        description: "A loaded favorite with pepperoni, sausage, peppers, onions, and mushrooms.",
        ingredients: [
            "Tomato sauce",
            "Mozzarella cheese",
            "Pepperoni",
            "Sausage",
            "Bell peppers",
            "Onions",
            "Mushrooms"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 15.95,
        price_medium: 19.95,
        price_large: 24.95
    },
    {
        id: 13,
        category: "Pizza",
        name: "Buffalo Chicken Pizza",
        img: "https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg",
        description: "Grilled chicken tossed in buffalo sauce with mozzarella and a creamy ranch drizzle.",
        ingredients: [
            "Chicken",
            "Buffalo sauce",
            "Mozzarella",
            "Ranch dressing"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 14.95,
        price_medium: 18.95,
        price_large: 23.95
    },
    {
        id: 14,
        category: "Pizza",
        name: "BBQ Chicken Pizza",
        img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
        description: "Tender chicken, smoky barbecue sauce, red onions, and melted mozzarella.",
        ingredients: [
            "Chicken",
            "BBQ sauce",
            "Red onions",
            "Mozzarella"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 14.95,
        price_medium: 18.95,
        price_large: 23.95
    },
    {
        id: 15,
        category: "Pizza",
        name: "Meat Lovers Pizza",
        img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
        description: "A hearty combination of pepperoni, sausage, bacon, and ham.",
        ingredients: [
            "Pepperoni",
            "Sausage",
            "Bacon",
            "Ham",
            "Mozzarella",
            "Tomato sauce"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 16.95,
        price_medium: 21.95,
        price_large: 26.95
    },
    {
        id: 16,
        category: "Pizza",
        name: "Veggie Supreme Pizza",
        img: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
        description: "Fresh mushrooms, peppers, onions, spinach, olives, and mozzarella.",
        ingredients: [
            "Mushrooms",
            "Bell peppers",
            "Onions",
            "Spinach",
            "Olives",
            "Mozzarella"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 14.95,
        price_medium: 18.95,
        price_large: 23.95
    },
    {
        id: 17,
        category: "Pizza",
        name: "Chicken Bacon Ranch Pizza",
        img: "https://images.pexels.com/photos/261996/pexels-photo-261996.jpeg",
        description: "Chicken, crispy bacon, mozzarella, and creamy ranch dressing.",
        ingredients: [
            "Chicken",
            "Bacon",
            "Mozzarella",
            "Ranch dressing"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 15.95,
        price_medium: 19.95,
        price_large: 24.95
    },
    {
        id: 18,
        category: "Pizza",
        name: "Hawaiian Pizza",
        img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg",
        description: "A sweet and savory combination of ham, pineapple, and mozzarella.",
        ingredients: [
            "Ham",
            "Pineapple",
            "Mozzarella",
            "Tomato sauce"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 13.95,
        price_medium: 17.95,
        price_large: 21.95
    },
    {
        id: 19,
        category: "Pizza",
        name: "Four Cheese Pizza",
        img: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
        description: "A rich blend of mozzarella, ricotta, provolone, and Parmesan.",
        ingredients: [
            "Mozzarella",
            "Ricotta",
            "Provolone",
            "Parmesan"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 14.95,
        price_medium: 18.95,
        price_large: 22.95
    },
    {
        id: 20,
        category: "Pizza",
        name: "Grandma Pizza",
        img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
        description: "Thin rectangular pizza with fresh mozzarella, crushed tomatoes, garlic, and basil.",
        ingredients: [
            "Crushed tomatoes",
            "Fresh mozzarella",
            "Garlic",
            "Basil",
            "Olive oil"
        ],
        size_small: null,
        size_medium: null,
        size_large: "12 slices",
        price_small: 0,
        price_medium: 0,
        price_large: 24.95
    },
    {
        id: 21,
        category: "Pizza",
        name: "Chicken Parmigiana Pizza",
        img: "https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg",
        description: "Breaded chicken cutlet, marinara sauce, mozzarella, and Parmesan.",
        ingredients: [
            "Breaded chicken",
            "Marinara sauce",
            "Mozzarella",
            "Parmesan"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 15.95,
        price_medium: 19.95,
        price_large: 24.95
    },
    {
        id: 22,
        category: "Pizza",
        name: "Spinach and Ricotta Pizza",
        img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
        description: "Fresh spinach, creamy ricotta, mozzarella, garlic, and olive oil.",
        ingredients: [
            "Spinach",
            "Ricotta",
            "Mozzarella",
            "Garlic",
            "Olive oil"
        ],
        size_small: "10 inch",
        size_medium: "14 inch",
        size_large: "18 inch",
        price_small: 14.95,
        price_medium: 18.95,
        price_large: 22.95
    },
    {
        id: 23,
        category: "Pasta",
        name: "Spaghetti and Meatballs",
        img: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
        description: "Classic spaghetti with homemade-style meatballs and marinara sauce.",
        ingredients: [
            "Spaghetti",
            "Meatballs",
            "Marinara sauce",
            "Parmesan"
        ],
        size_small: "7 oz",
        size_medium: "11 oz",
        size_large: "15 oz",
        price_small: 8.95,
        price_medium: 11.95,
        price_large: 14.95
    },
    {
        id: 24,
        category: "Pasta",
        name: "Lasagna",
        img: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
        description: "Layers of pasta, seasoned beef, ricotta, mozzarella, and tomato sauce.",
        ingredients: [
            "Lasagna pasta",
            "Ground beef",
            "Ricotta",
            "Mozzarella",
            "Tomato sauce"
        ],
        size_small: null,
        size_medium: "Regular",
        size_large: "Large",
        price_small: 0,
        price_medium: 12.95,
        price_large: 16.95
    },
    {
        id: 25,
        category: "Pasta",
        name: "Chicken Alfredo",
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        description: "Fettuccine pasta with grilled chicken and creamy Alfredo sauce.",
        ingredients: [
            "Fettuccine",
            "Chicken",
            "Alfredo sauce",
            "Parmesan"
        ],
        size_small: "7 oz",
        size_medium: "11 oz",
        size_large: "15 oz",
        price_small: 10.95,
        price_medium: 13.95,
        price_large: 16.95
    },
    {
        id: 26,
        category: "Pasta",
        name: "Stuffed Shells",
        img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        description: "Jumbo pasta shells filled with ricotta and baked with marinara and mozzarella.",
        ingredients: [
            "Pasta shells",
            "Ricotta",
            "Marinara sauce",
            "Mozzarella"
        ],
        size_small: null,
        size_medium: "Regular",
        size_large: "Large",
        price_small: 0,
        price_medium: 10.95,
        price_large: 14.95
    },
    {
        id: 27,
        category: "Hero",
        name: "Sausage and Peppers Hero",
        img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg",
        description: "Italian sausage with sautéed peppers and onions on a toasted hero roll.",
        ingredients: [
            "Italian sausage",
            "Bell peppers",
            "Onions",
            "Hero bread"
        ],
        size_small: "6 inches",
        size_medium: null,
        size_large: "12 inches",
        price_small: 7.95,
        price_medium: 0,
        price_large: 11.95
    },
    {
        id: 28,
        category: "Hero",
        name: "Italian Combo Hero",
        img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
        description: "Ham, salami, provolone, lettuce, tomato, and Italian dressing.",
        ingredients: [
            "Ham",
            "Salami",
            "Provolone",
            "Lettuce",
            "Tomato",
            "Italian dressing"
        ],
        size_small: "6 inches",
        size_medium: null,
        size_large: "12 inches",
        price_small: 8.95,
        price_medium: 0,
        price_large: 12.95
    },
    {
        id: 29,
        category: "Hero",
        name: "Eggplant Parmigiana Hero",
        img: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
        description: "Breaded eggplant with marinara sauce and melted mozzarella.",
        ingredients: [
            "Eggplant",
            "Marinara sauce",
            "Mozzarella",
            "Hero bread"
        ],
        size_small: "6 inches",
        size_medium: null,
        size_large: "12 inches",
        price_small: 7.95,
        price_medium: 0,
        price_large: 11.95
    },
    {
        id: 30,
        category: "Appetizer",
        name: "Garlic Knots",
        img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
        description: "Freshly baked garlic knots brushed with garlic butter and parsley.",
        ingredients: [
            "Pizza dough",
            "Garlic",
            "Butter",
            "Parsley"
        ],
        size_small: "6 pieces",
        size_medium: null,
        size_large: "12 pieces",
        price_small: 4.95,
        price_medium: 0,
        price_large: 8.95
    },
    {
        id: 31,
        category: "Appetizer",
        name: "Mozzarella Sticks",
        img: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg",
        description: "Golden fried mozzarella sticks served with marinara dipping sauce.",
        ingredients: [
            "Mozzarella",
            "Breadcrumbs",
            "Marinara sauce"
        ],
        size_small: "6 pieces",
        size_medium: null,
        size_large: "12 pieces",
        price_small: 6.95,
        price_medium: 0,
        price_large: 11.95
    },
    {
        id: 32,
        category: "Appetizer",
        name: "Buffalo Wings",
        img: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
        description: "Crispy chicken wings tossed in buffalo sauce with ranch dressing.",
        ingredients: [
            "Chicken wings",
            "Buffalo sauce",
            "Ranch dressing"
        ],
        size_small: "6 pieces",
        size_medium: "12 pieces",
        size_large: "18 pieces",
        price_small: 8.95,
        price_medium: 15.95,
        price_large: 22.95
    },
    {
        id: 33,
        category: "Appetizer",
        name: "French Fries",
        img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
        description: "Crispy golden fries lightly seasoned with salt.",
        ingredients: [
            "Potatoes",
            "Salt"
        ],
        size_small: "Small",
        size_medium: "Medium",
        size_large: "Large",
        price_small: 3.95,
        price_medium: 5.95,
        price_large: 7.95
    },
    {
        id: 34,
        category: "Appetizer",
        name: "Fried Calamari",
        img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
        description: "Lightly breaded calamari fried until golden and served with marinara.",
        ingredients: [
            "Calamari",
            "Seasoned flour",
            "Marinara sauce"
        ],
        size_small: null,
        size_medium: "Regular",
        size_large: "Large",
        price_small: 0,
        price_medium: 11.95,
        price_large: 16.95
    },
    {
        id: 35,
        category: "Appetizer",
        name: "Chicken Tenders",
        img: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg",
        description: "Crispy breaded chicken tenders served with your choice of dipping sauce.",
        ingredients: [
            "Chicken",
            "Breadcrumbs",
            "Dipping sauce"
        ],
        size_small: "3 pieces",
        size_medium: "5 pieces",
        size_large: "8 pieces",
        price_small: 6.95,
        price_medium: 9.95,
        price_large: 13.95
    },
    {
        id: 36,
        category: "Calzone",
        name: "Cheese Calzone",
        img: "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg",
        description: "Golden baked dough stuffed with ricotta and mozzarella, served with marinara.",
        ingredients: [
            "Pizza dough",
            "Ricotta",
            "Mozzarella",
            "Marinara sauce"
        ],
        size_small: "Personal",
        size_medium: "Regular",
        size_large: "Large",
        price_small: 8.95,
        price_medium: 11.95,
        price_large: 15.95
    },
    {
        id: 37,
        category: "Calzone",
        name: "Pepperoni Calzone",
        img: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
        description: "Classic cheese calzone filled with pepperoni and served with marinara.",
        ingredients: [
            "Pizza dough",
            "Ricotta",
            "Mozzarella",
            "Pepperoni"
        ],
        size_small: "Personal",
        size_medium: "Regular",
        size_large: "Large",
        price_small: 9.95,
        price_medium: 12.95,
        price_large: 16.95
    },
    {
        id: 38,
        category: "Calzone",
        name: "Stromboli",
        img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
        description: "Rolled pizza dough filled with pepperoni, salami, ham, and mozzarella.",
        ingredients: [
            "Pizza dough",
            "Pepperoni",
            "Salami",
            "Ham",
            "Mozzarella"
        ],
        size_small: "Personal",
        size_medium: "Regular",
        size_large: "Large",
        price_small: 10.95,
        price_medium: 13.95,
        price_large: 17.95
    },
    {
        id: 39,
        category: "Calzone",
        name: "Chicken Roll",
        img: "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg",
        description: "Fresh pizza dough wrapped around breaded chicken, mozzarella, and sauce.",
        ingredients: [
            "Pizza dough",
            "Breaded chicken",
            "Mozzarella",
            "Tomato sauce"
        ],
        size_small: null,
        size_medium: "Regular",
        size_large: "Large",
        price_small: 0,
        price_medium: 8.95,
        price_large: 12.95
    },
    {
        id: 40,
        category: "Salad",
        name: "Garden Salad",
        img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        description: "Fresh lettuce, tomatoes, cucumbers, onions, and house dressing.",
        ingredients: [
            "Lettuce",
            "Tomatoes",
            "Cucumbers",
            "Onions",
            "House dressing"
        ],
        size_small: "Small",
        size_medium: null,
        size_large: "Large",
        price_small: 6.95,
        price_medium: 0,
        price_large: 9.95
    },
    {
        id: 41,
        category: "Salad",
        name: "Caesar Salad",
        img: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg",
        description: "Crisp romaine lettuce with Parmesan, croutons, and Caesar dressing.",
        ingredients: [
            "Romaine lettuce",
            "Parmesan",
            "Croutons",
            "Caesar dressing"
        ],
        size_small: "Small",
        size_medium: null,
        size_large: "Large",
        price_small: 7.95,
        price_medium: 0,
        price_large: 10.95
    },
    {
        id: 42,
        category: "Salad",
        name: "Greek Salad",
        img: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
        description: "Tomatoes, cucumbers, olives, red onions, and feta over fresh greens.",
        ingredients: [
            "Lettuce",
            "Tomatoes",
            "Cucumbers",
            "Olives",
            "Feta",
            "Red onions"
        ],
        size_small: "Small",
        size_medium: null,
        size_large: "Large",
        price_small: 8.95,
        price_medium: 0,
        price_large: 12.95
    },
    {
        id: 43,
        category: "Dessert",
        name: "New York Cheesecake",
        img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
        description: "Rich and creamy New York-style cheesecake with a graham cracker crust.",
        ingredients: [
            "Cream cheese",
            "Sugar",
            "Eggs",
            "Graham cracker crust"
        ],
        size_small: null,
        size_medium: "1 slice",
        size_large: null,
        price_small: 0,
        price_medium: 5.95,
        price_large: 0
    },
    {
        id: 44,
        category: "Dessert",
        name: "Tiramisu",
        img: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
        description: "Italian dessert layered with espresso-soaked ladyfingers and mascarpone cream.",
        ingredients: [
            "Ladyfingers",
            "Espresso",
            "Mascarpone",
            "Cocoa"
        ],
        size_small: null,
        size_medium: "1 serving",
        size_large: null,
        price_small: 0,
        price_medium: 6.95,
        price_large: 0
    },
    {
        id: 45,
        category: "Dessert",
        name: "Cannoli",
        img: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg",
        description: "Crispy pastry shells filled with sweet ricotta cream and chocolate chips.",
        ingredients: [
            "Pastry shell",
            "Ricotta",
            "Sugar",
            "Chocolate chips"
        ],
        size_small: "1 piece",
        size_medium: null,
        size_large: "3 pieces",
        price_small: 3.95,
        price_medium: 0,
        price_large: 9.95
    },
    {
        id: 46,
        category: "Dessert",
        name: "Chocolate Lava Cake",
        img: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg",
        description: "Warm chocolate cake with a rich, molten chocolate center.",
        ingredients: [
            "Chocolate",
            "Butter",
            "Flour",
            "Eggs",
            "Sugar"
        ],
        size_small: null,
        size_medium: "1 serving",
        size_large: null,
        price_small: 0,
        price_medium: 6.95,
        price_large: 0
    },
    {
        id: 47,
        category: "Drink",
        name: "Coca-Cola",
        img: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg",
        description: "Classic refreshing Coca-Cola.",
        ingredients: [],
        size_small: "12 oz can",
        size_medium: "20 oz bottle",
        size_large: "2 liter bottle",
        price_small: 1.95,
        price_medium: 2.95,
        price_large: 4.95
    },
    {
        id: 48,
        category: "Drink",
        name: "Sprite",
        img: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg",
        description: "Refreshing lemon-lime soda.",
        ingredients: [],
        size_small: "12 oz can",
        size_medium: "20 oz bottle",
        size_large: "2 liter bottle",
        price_small: 1.95,
        price_medium: 2.95,
        price_large: 4.95
    },
    {
        id: 49,
        category: "Drink",
        name: "Bottled Water",
        img: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
        description: "Refreshing purified bottled water.",
        ingredients: [],
        size_small: null,
        size_medium: "16.9 oz bottle",
        size_large: null,
        price_small: 0,
        price_medium: 1.95,
        price_large: 0
    },
    {
        id: 50,
        category: "Drink",
        name: "Iced Tea",
        img: "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg",
        description: "Refreshing brewed iced tea.",
        ingredients: [],
        size_small: "16 oz",
        size_medium: "20 oz",
        size_large: "32 oz",
        price_small: 2.50,
        price_medium: 3.25,
        price_large: 4.25
    }
];

export default MenuItemsData;
