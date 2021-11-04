import PropTypes from 'prop-types'

const Button = ({bgcolor, text, color, onClick}) => {
    return (
        <button style={{backgroundColor: bgcolor, color: color, borderRadius:'10px', padding:'0.5rem'}} onClick={onClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
text: PropTypes.string,
color: PropTypes.string,
onClick: PropTypes.func.isRequired
}
Button.defaultProps = {
    bgcolor: "blue",
    text: "Add Task",
    color: "white"
}

export default Button
