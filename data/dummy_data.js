import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    // 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    'data:image/jpeg;base64,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',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  )
];