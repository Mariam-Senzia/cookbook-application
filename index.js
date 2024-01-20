document.addEventListener("DOMContentLoaded",() => {


    const form = document.getElementById("form")
    const input = document.getElementById("inputField")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (input.value){

            alert("Hi")
        }
    })
})
