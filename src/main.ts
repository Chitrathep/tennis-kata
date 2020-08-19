//
// Your implementations
// 

export const updateGameScore = (player1Points: Number, player2Points: Number) => {
    if (player1Points > player2Points) {
        return 1;
    }
    else
        return 2;
}

export const decideGameWinner = (game: Number) => {
    if (game === 1)
        return 'Player 1'
    else
        return 'Player 2'
}

export const printScore = (playerPoints: Array<number>) => {
    if (playerPoints[0] === playerPoints[1] && playerPoints[1] !== 3)
        return 'thirty - thirty';
    if (playerPoints[0] === playerPoints[1])
        return 'deuce';
    if (playerPoints[0] > playerPoints[1])
        return 'advantage player 1';
    else
        return 'advantage player 2';
}
