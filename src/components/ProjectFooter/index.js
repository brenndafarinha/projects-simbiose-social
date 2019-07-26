import React, { Component } from 'react'
import './style.css'

const ProjectFooter = () => {
    return (
        <div className="pfooter">
            <div className="pfooter-actions">
                <button className="pfooter-btn"><i class="fas fa-compress"></i></button>
                <button className="pfooter-btn"><i class="far fa-user"></i></button>
                <button className="pfooter-btn"><i class="fas fa-home"></i></button>
            </div>

            <button className="pfooter-choice pfooter-btn">Me escolhe :D</button>

        </div>
    )
}

export default ProjectFooter

