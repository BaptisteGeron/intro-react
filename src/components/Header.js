import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header style={headerStyle}>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
title: "To Do List"
}

Header.propTypes = {
    title : PropTypes.string
}

const headingStyle = {
    color: "white",
    textAlign: "center",
    fontFamily:"Arial"
}
const headerStyle = {
    backgroundColor: "blue",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default Header
