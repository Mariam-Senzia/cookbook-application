# cookbook-application

Culinary Adventures is an application that a user can use to search for different foods and recipes from diverse cuisines.

###Requirements For this project, you must:

###Pre-requisite You can use this JSON API link to fetch data for your local db.json file. 'https://dummyjson.com/recipes'
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB. Run the following command to get the backend started: json-server --watch db.json

Test your server by visiting this route in the browser: " http://localhost:3000/recipes"


###Project Setup Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder. Create a new GitHub repository . Make sure you regularly commit to the repository.

###Project Guidelines Your project should conform to the following set of guidelines:

###Core Deliverables: As a user, I can: 
1.See a list of all available cuisines. 


 GET/recipes

Example response: { "id": 1, "name": "Classic Margherita Pizza", "ingredients": [ "Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Fresh basil leaves", "Olive oil", "Salt and pepper to taste" ], "instructions": [ "Preheat the oven to 475°F (245°C).", "Roll out the pizza dough and spread tomato sauce evenly.", "Top with slices of fresh mozzarella and fresh basil leaves.", "Drizzle with olive oil and season with salt and pepper.", "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.", "Slice and serve hot." ], "prepTimeMinutes": 20, "cookTimeMinutes": 15, "servings": 4, "difficulty": "Easy", "cuisine": "Italian", "caloriesPerServing": 300, "tags": [ "Pizza", "Italian" ], "userId": 45, "image": "https://cdn.dummyjson.com/recipe-images/1.webp", "rating": 4.6, "reviewCount": 3, "mealType": [ "Dinner" ] },

2.See name of meals and recipes on clicking any cuisine.

3. Drop reviews

### Project task management:
Link: "https://trello.com/b/lgiMzu8l/cookbook-app"

### Project Deployment
Link : "https://mariam-senzia.github.io/cookbook-application/"