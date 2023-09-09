// import React from 'react' // This is used to be required but it no longer is
import PropTypes from 'prop-types'
import Button from "./Button"
import{useLocation} from "react-router-dom"

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className="header"> 
            <h1>{title}</h1>
            {/* Passing in a text prop of color green and text */}
            {location.pathname ==="/" && <Button 
            color = {showAdd ? "red":"green"}  
            text = {showAdd ? "Close" : "Add"} 
            onClick={onAdd} 
            />} 
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header