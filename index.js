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

        recipes.forEach((recipe) => {
            console.log(recipe.cuisine)
            const button1 = document.createElement("button")
            button1.innerText = recipe.cuisine
            button1.id = "button"
            cuisines.append(button1)
        })
    })
}