class Helper {
    static random(min = 0, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    static showElement(selector) {
        const spinner = document.querySelector(selector)
        spinner.classList.remove('d-none')
    }

    static hideElement(selector) {
        const spinner = document.querySelector(selector)
        spinner.classList.add('d-none')
    }

    static removeOldContent() {
        const oldElements = document.querySelectorAll('#content > :not(#contentSpinner)')
        for (const element of oldElements) {
            element.remove()
        }
    }
}

export {Helper}