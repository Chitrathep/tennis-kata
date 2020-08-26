//
// Your implementations
// 

export const updateGameScore = (player1Points: Number, player2Points: Number) => {
    if (player1Points > player2Points)
        return 1;
    else
        return 2;
}

export const decideGameWinner = (game: Number) => {
    if (game === 1)
        return 'Player 1';
    else
        return 'Player 2';
}

const calScore = (playerPoints: Number) => {
    if (playerPoints === 0)
        return 'love';
    if (playerPoints === 1)
        return 'fifteen';
    if (playerPoints === 2)
        return 'thirty';
    if (playerPoints === 3)
        return 'forty';
    return
}

export const printScore = (playerPoints: Array<number>) => {
    const player1Points = calScore(playerPoints[0]);
    const player2Points = calScore(playerPoints[1]);

    if (playerPoints[0] < 3 || playerPoints[1] < 3)
        return player1Points + ' - ' + player2Points;

    if (player1Points === 'forty' && player2Points === 'forty')
        return 'deuce';
    if (playerPoints[0] > playerPoints[1])
        return 'advantage player 1';
    else
        return 'advantage player 2';
}
