import React from 'react'
import './style.css'
import parseMoney from '../../functions/parseMoney'
import parsePercent from '../../functions/parsePercent'

const Financial = (props) => {

    
    const percent = parsePercent(props.approvedValue, props.collectedValue)

    return (
        <div className="financial">
            <div className="financial-container">
                <div className="values">
                    <p>Aprovado</p>
                    <p>{parseMoney(props.approvedValue)}</p>
                </div>
                <div className="values values--collected">
                    <p>Captado</p>
                    <p className="collected">{parseMoney(props.collectedValue)}</p>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${percent}%` }}>{`${percent}%`}</div>
                </div>
            </div>
        </div>
    )
}

export default Financial