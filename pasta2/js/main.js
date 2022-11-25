import { masks } from "./modules/masks.js"
import { validations } from "./modules/validations.js"


document.querySelectorAll('input').forEach(($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)

        let isValid = validations[field](e.target.value)
        if (!isValid) {
            $input.classList.add("errorInput")
        } else {
            $input.classList.remove("errorInput")
        }
    }, false)
}))