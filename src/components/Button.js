import PropTypes from 'prop-types'

const Button = ({bgcolor, text, color, onClick, onAdd, showAdd}) => {
    return (
        <button style={{borderRadius:'10px', padding:'0.5rem'}} onClick={onAdd}  backgroundcolor={showAdd ? 'blue' : 'red'}>
            {showAdd ? 'close': 'add'}
           
        </button>
    )
}

Button.propTypes = {
text: PropTypes.string,
color: PropTypes.string,
onClick: PropTypes.func
}
Button.defaultProps = {
    text: "Add Task",
    color: "white"
}

export default Button
