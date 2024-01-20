document.addEventListener("DOMContentLoaded",() => {


    const form = document.getElementById("form")
    const input = document.getElementById("inputField")

    //////add event lister to form 
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (input.value){

            fetchRecipe();
        }
    })

    ///////////////////review form
    const newform = document.getElementById("form2");
    const reviewinput = document.getElementById("inputreview");
    const review = document.getElementById("review")
    newform.addEventListener("submit",(e) => {
        e.preventDefault();

        if (reviewinput.value){
        const comment = document.createElement("h3")
        comment.innerText = ("Thanks for your review.")
        review.append(comment)

        const image = document.createElement("img")
        image.src= "https://clipart-library.com/images/8cxngqeqi.jpg"
        review.append(image)
        }
    })
})

const fetchRecipe = () => {
    //////fetch data from API
    api =  'https://dummyjson.com/recipes'
    fetch(api) 
    .then((res) => res.json())
    .then((data) => {
        recipes = data.recipes
        //console.log(recipes)

        const cuisines = document.getElementById("cuisines")
        const details = document.getElementById("cuisine-data")

        ////////loop through recipes
        recipes.forEach((recipe) => {
            console.log(recipe.cuisine)
            const button1 = document.createElement("button")
            button1.innerText = recipe.cuisine
            button1.id = "button"
            cuisines.append(button1)

            //////add event lister to button
            button1.addEventListener("click", (e) => {
                e.preventDefault();
                //////append name
                const h3 = document.createElement("h2")
                h3.innerText = recipe.name
                details.appendChild(h3)
                //////append ingredients
                ing = document.createElement("h4")
                ing.innerText = `INGREDIENTS: ${recipe.ingredients}`;
                details.appendChild(ing)
                /////append instructions
                method = document.createElement("h4")
                method.innerText = `INSTRUCTIONS:`
                details.appendChild(method)
                //////loop through instructions to list each instruction
                const instructions = recipe.instructions
                instructions.forEach((element) => {
                instru = document.createElement("li")
                instru.innerText = element
                details.appendChild(instru)
                })
                /////append image 
                const img = document.createElement("img")
                img.src = recipe.image
               // img.id = ("image")
                details.appendChild(img)

            })     
        })
    })
}