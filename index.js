document.addEventListener("DOMContentLoaded",() => {


    const form = document.getElementById("form")
    const input = document.getElementById("inputField")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (input.value){

            fetchRecipe();
        }
    })
})

const fetchRecipe = () => {
    api =  'https://dummyjson.com/recipes'
    fetch(api) 
    .then((res) => res.json())
    .then((data) => {
        //console.log(data)

        recipes = data.recipes
        console.log(recipes)
       

        const cuisines = document.getElementById("cuisines")
        const details = document.getElementById("cuisine-data")

        recipes.forEach((recipe) => {
            console.log(recipe.cuisine)
            const button1 = document.createElement("button")
            button1.innerText = recipe.cuisine
            button1.id = "button"
            cuisines.append(button1)

            button1.addEventListener("click", (e) => {
                e.preventDefault();

                const h3 = document.createElement("h2")
                h3.innerText = recipe.name
                details.appendChild(h3)

                ing = document.createElement("h4")
                ing.innerText = `INGREDIENTS: ${recipe.ingredients}`;
                details.appendChild(ing)

                method = document.createElement("h4")
                method.innerText = `INSTRUCTIONS:`
                details.appendChild(method)

                const instructions = recipe.instructions
                instructions.forEach((element) => {
                instru = document.createElement("li")
                instru.innerText = element
                details.appendChild(instru)
                })
            })     
        })
    })
}