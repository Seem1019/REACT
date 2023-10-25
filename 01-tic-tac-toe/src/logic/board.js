import { POSSIBLE_WAY_TO_WIN } from "../constants";


export const checkWinnerFrom = (boardToCheck) => {

    for (const possibleWayToWin of POSSIBLE_WAY_TO_WIN) {
        const [a, b, c] = possibleWayToWin;
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            localStorage.removeItem('board');
            localStorage.removeItem('turn');
            return boardToCheck[a]   
        }
    }
    return null;
}