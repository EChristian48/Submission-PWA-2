class Helper {
    static random(min=0, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max-min)) + min
    }
}

export {Helper}