const surveyContainer = document.querySelector(".survey")
const thankContainer = document.querySelector(".thank-you")

const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thankContainer.classList.remove("hidden")
    surveyContainer.style.display= "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", ()=> {
        rating.innerHTML = rate.innerHTML
    })
})