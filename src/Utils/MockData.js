const data = [
  {
    id: "1",
    userName: "priyanshu",
    authorName: "Priyanshu",
    recipeName: "Classic Margherita Pizza",
    imageUrl:
      "https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1660843558&width=800",
    description:
      "Indulge in the timeless flavors of Italy with our Classic Margherita Pizza recipe. Crafted with care, this iconic dish embodies simplicity and elegance, bringing together the finest ingredients to create a culinary masterpiece.Our pizza starts with a crisp and flavorful pizza dough, handcrafted and rolled to perfection. Next, a generous layer of vibrant tomato sauce is delicately spread, infusing each bite with the essence of sun-ripened tomatoes.But what truly sets our Margherita Pizza apart is the creamy richness of fresh mozzarella cheese. Sliced thinly and arranged atop the sauce, the cheese melts into a luscious blanket, enveloping the pizza in irresistible decadence.To elevate the experience, fragrant basil leaves are scattered over the cheese, imparting a burst of herbal freshness that harmonizes beautifully with the other ingredients. A drizzle of quality olive oil adds a final touch of richness, while a sprinkling of salt and pepper enhances every nuanced flavor.",
    tags: ["Pizza", "Italian"],
    ingredients: {
      Pizzadough: "1kg",
      Tomatosauce: "2 spoon",
      FreshMozzarellaCheese: "1l",
    },
    recipeSteps:
      "1) Preheat the oven to 475°F (245°C)  2) Roll out the pizza dough and spread tomato sauce evenly. 3)   Top with slices of fresh mozzarella and fresh basil leaves.  4)  Drizzle with olive oil and season with salt and pepper.5)  Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. 6)  Slice and serve hot",
  },
  {
    id: "2",
    userName: "john_doe",
    authorName: "John Doe",
    recipeName: "Spicy Chicken Tacos",
    imageUrl:
      "https://www.willcookforsmiles.com/wp-content/uploads/2016/08/Sriracha-Chicken-Tacos-2.jpg",
    description:
      "Spicy chicken tacos are a delicious and flavorful dish that is perfect for a weeknight dinner. These tacos are filled with seasoned chicken, fresh vegetables, and topped with a spicy salsa verde.",
    tags: ["Tacos", "Mexican", "Spicy"],
    ingredients: {
      "Chicken breasts": "500g",
      "Taco seasoning": "2 tbsp",
      "Corn tortillas": "8",
      Lettuce: "1 cup shredded",
      Tomatoes: "2, diced",
      Avocado: "1, sliced",
      "Salsa verde": "1/2 cup",
      "Sour cream": "1/4 cup",
      Cilantro: "1/4 cup chopped",
    },
    recipeSteps:
      "1) Heat olive oil in a skillet over medium heat. 2) Add chicken breasts and sprinkle with taco seasoning. Cook until chicken is cooked through, about 6-8 minutes per side. 3) Remove chicken from skillet and let rest for 5 minutes before slicing into strips. 4) Warm corn tortillas in the skillet for about 30 seconds on each side. 5) Assemble tacos by filling each tortilla with chicken strips, lettuce, tomatoes, avocado slices, salsa verde, sour cream, and cilantro. 6) Serve immediately and enjoy!",
  },

  {
    id: "3",
    userName: "mary_jane",
    authorName: "Mary Jane",
    recipeName: "Vegetarian Buddha Bowl",
    imageUrl:
      "https://eatwithclarity.com/wp-content/uploads/2020/03/vegan-buddha-bowl.jpg",
    description:
      "This vegetarian buddha bowl is packed with nutritious ingredients and vibrant flavors. It's a satisfying and healthy meal that's easy to customize with your favorite veggies and protein sources.",
    tags: ["Vegetarian", "Buddha Bowl", "Healthy"],
    ingredients: {
      "Brown rice": "1 cup cooked",
      Chickpeas: "1 can, drained and rinsed",
      Spinach: "2 cups",
      Avocado: "1, sliced",
      Carrots: "1, shredded",
      Cucumber: "1, diced",
      "Red cabbage": "1 cup, shredded",
      "Tahini dressing": "1/4 cup",
    },
    recipeSteps:
      "1) Cook brown rice according to package instructions. 2) In a large bowl, combine cooked rice, chickpeas, spinach, avocado, carrots, cucumber, and red cabbage. 3) Drizzle with tahini dressing and toss to combine. 4) Divide the mixture into bowls and serve immediately. Enjoy!",
  },
  {
    id: "4",
    userName: "chef_mike",
    authorName: "Chef Mike",
    recipeName: "Classic Beef Burger",
    imageUrl:
      "https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/520765216/classic-beef-burger.jpg?quality=82&strip=1",
    description:
      "The classic beef burger is a timeless favorite that's perfect for any backyard barbecue or weeknight dinner. Juicy beef patties are topped with cheese, lettuce, tomato, and pickles for a satisfying and delicious meal.",
    tags: ["Burgers", "Beef", "Grilling"],
    ingredients: {
      "Ground beef": "1 lb",
      Salt: "1 tsp",
      "Black pepper": "1/2 tsp",
      "Hamburger buns": "4",
      "Cheddar cheese slices": "4",
      "Lettuce leaves": "4",
      "Tomato slices": "4",
      Pickles: "8 slices",
      Ketchup: "4 tbsp",
      Mustard: "4 tbsp",
    },
    recipeSteps:
      "1) Preheat grill to medium-high heat. 2) In a bowl, mix ground beef, salt, and pepper. Divide mixture into 4 equal portions and shape into patties. 3) Grill patties for 4-5 minutes on each side, or until desired doneness. 4) During the last minute of cooking, add a slice of cheddar cheese to each patty and let it melt. 5) Toast hamburger buns on the grill for about 1 minute. 6) Assemble burgers by placing patties on buns and topping with lettuce, tomato, pickles, ketchup, and mustard. Serve immediately and enjoy!",
  },
  {
    id: "5",
    userName: "vegan_delight",
    authorName: "Vegan Delight",
    recipeName: "Quinoa Salad with Roasted Vegetables",
    imageUrl:
      "https://www.fromachefskitchen.com/wp-content/uploads/2022/06/Mediterranean-Quinoa-Salad-with-Grilled-Vegetables-16.jpeg",
    description:
      "This quinoa salad with roasted vegetables is a nutritious and flavorful dish that's perfect for a light lunch or dinner. It's packed with protein, fiber, and vitamins, making it a healthy choice for any occasion.",
    tags: ["Salads", "Quinoa", "Vegan"],
    ingredients: {
      Quinoa: "1 cup cooked",
      "Bell peppers": "2, diced",
      Zucchini: "1, diced",
      "Red onion": "1, diced",
      "Cherry tomatoes": "1 cup",
      "Olive oil": "2 tbsp",
      "Balsamic vinegar": "2 tbsp",
      "Garlic powder": "1 tsp",
      Salt: "1/2 tsp",
      "Black pepper": "1/4 tsp",
      "Fresh parsley": "1/4 cup chopped",
    },
    recipeSteps:
      "1) Preheat oven to 400°F (200°C). 2) In a large bowl, toss diced bell peppers, zucchini, red onion, and cherry tomatoes with olive oil, balsamic vinegar, garlic powder, salt, and black pepper. 3) Spread vegetables in a single layer on a baking sheet and roast in the preheated oven for 20-25 minutes, or until tender and slightly caramelized. 4) In a separate bowl, combine cooked quinoa with roasted vegetables and fresh parsley. 5) Serve quinoa salad warm or at room temperature. Enjoy!",
  },
  {
    id: "6",
    userName: "sushi_master",
    authorName: "Yash",
    recipeName: "California Roll",
    imageUrl:
      "https://media.istockphoto.com/id/1320922361/photo/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup.jpg?s=612x612&w=0&k=20&c=yedOW0jKGjN9H2iGA6MAEIxcc7oVtN-4isL_i74U6Kk=",
    description:
      "The California roll is a popular sushi roll that features imitation crab, avocado, and cucumber wrapped in seaweed and sushi rice. It's a delicious and satisfying dish that's perfect for sushi lovers of all skill levels.",
    tags: ["Sushi", "Japanese", "Seafood"],
    ingredients: {
      "Sushi rice": "2 cups cooked",
      "Nori sheets": "4",
      "Imitation crab meat": "1 cup",
      Avocado: "1, sliced",
      Cucumber: "1, julienned",
      "Sesame seeds": "1 tbsp",
      "Soy sauce": "for dipping",
    },
    recipeSteps:
      "1) Place a nori sheet on a bamboo sushi mat with the shiny side facing down. 2) Spread a thin layer of sushi rice evenly over the nori sheet, leaving a small border along the edges. 3) Arrange strips of imitation crab meat, avocado slices, and julienned cucumber in the center of the rice. 4) Sprinkle sesame seeds over the filling. 5) Roll the sushi tightly using the bamboo mat, applying gentle pressure to seal the roll. 6) Slice the roll into 6-8 pieces using a sharp knife. 7) Serve California rolls with soy sauce for dipping. Enjoy!",
  },
];

export default data;
