class CardAnim {
    static main() {
        const cards = document.querySelectorAll('.card')
        console.log(cards)

        for (const card of cards) {
            console.log(card.firstElementChild)
            const coll = $(card.children[1]).collapse()
            coll.collapse('hide')
            card.addEventListener('mouseover', () => {
                coll.collapse('show')
            })
            card.addEventListener('mouseout', () => {
                coll.collapse('hide')
            })
        }
    }
}

export {CardAnim}