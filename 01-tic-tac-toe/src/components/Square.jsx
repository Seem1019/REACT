import PropTypes from 'prop-types';

export const Square = ({ children, updateBoard, index, isSelected }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    const handleClick = () => {
        updateBoard(index);
    };
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    );
};

Square.propTypes = {
    children: PropTypes.node,
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
};
