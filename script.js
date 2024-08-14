const inputs = document.querySelectorAll("input")

inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
        const isValid = input.validity.valid
        if (isValid) {
            input.classList.remove("invalid-input")
            input.classList.add("valid-input")
        } else {
            input.classList.remove("valid-input")
            input.classList.add("invalid-input")
        }
    })
})
