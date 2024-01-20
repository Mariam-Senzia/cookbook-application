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
        console.log(data)
    })
}