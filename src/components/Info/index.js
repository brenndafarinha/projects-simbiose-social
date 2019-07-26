import React from 'react'
import './style.css'

const Info = (props) => {

    
    return (
        <div className="info">
            <h3 className="text">{props.proponente}</h3>
            <div className="info-text">
                <div>
                    <h3 className="text-blue">{props.area}</h3>
                    <h3 className="text-light">{`${props.municipio} - ${props.uf}`}</h3>
                </div>
                <button className="info-btn">ROUANET - Art 18</button>
            </div>
        </div>
    )
}

export default Info