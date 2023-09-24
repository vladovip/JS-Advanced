function deckOfCards(cards) {
    let result = [];

    for (let cardAsString of cards) {
        let face = cardAsString.slice(0, -1);
        let suit = cardAsString.slice(-1);

        try {
            let card = playingCards(face, suit);
            result.push(card);
        } catch (error) {
            result = [`Invalid card: ${cardAsString}`]
        }
    }

    console.log(result.join(' '));

    function playingCards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (faces.indexOf(face) == -1) {
            throw new Error(`Invalid face: ${face}`)
        }

        if (suits[suit] == undefined) {
            throw new Error(`Invalid suit: ${suit}`)
        }

        let result = {
            face,
            suit: suits[suit],
            toString() {
                return `${this.face}${this.suit}`;
            }
        }

        return result;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);