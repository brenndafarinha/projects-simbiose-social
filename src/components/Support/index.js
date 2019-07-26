import React, { Component } from 'react'
import './style.css'

const Support = (props) => {

    return (
        <div className="support">
            <h3>Aportaram este projeto:</h3>
            <div className="support-text">
                <div className="text">
                    {props.support === [] ? props.support.map(item => (
                        <p key={item.cgccpf}>{item.nome}</p>

                    )): <p>Este projeto ainda não possui aporte :/</p>}
                </div>
                {props.support === [] ? <button className="support-btn"><i class="fas fa-eye"></i> Ver todos</button> : null}
                
                
            </div>
            
        </div>
    )

}

export default Support

