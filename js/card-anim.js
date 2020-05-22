class CardAnim {
    static main() {
        const cards = document.querySelectorAll('.card')
        console.log(cards)

        for (const card of cards) {
            console.log(card.firstElementChild)
            card.addEventListener('mouseover', () => {
                card.firstElementChild.style.filter = 'brightness(80%)'
                card.children[1].classList.remove('d-none')
            })
            card.addEventListener('mouseout', () => {
                card.firstElementChild.style.filter = 'brightness(100%)'
                card.children[1].classList.add('d-none')
            })
        }
    }
}

export {CardAnim}