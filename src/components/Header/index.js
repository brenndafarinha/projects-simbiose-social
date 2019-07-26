import React from 'react'
import './style.css'

const Header = (props) => {

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-text">
                    <h2>{props.children}</h2>
                </div>
                <button className="header-btn"><i class="fas fa-chevron-left"></i></button>
            </div>

        </div>
    )
}

export default Header
