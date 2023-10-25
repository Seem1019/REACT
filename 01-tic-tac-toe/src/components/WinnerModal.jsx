import { Square } from "./Square";
import PropTypes from 'prop-types';


export function WinnerModal({ winner, resetGame }) {
    WinnerModal.propTypes = {
        winner: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]).isRequired,
        resetGame: PropTypes.func.isRequired
    };
    if (winner === null) return null
    const winnerText = winner === false ? 'Draw' : 'Winner:';
    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Play Again</button>
                </footer>
            </div>
        </section>
    )
}

