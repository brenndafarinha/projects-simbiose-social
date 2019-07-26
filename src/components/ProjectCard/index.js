import React from 'react'
import Header from '../Header'
import Info from '../Info'
import Financial from '../Financial'
import Support from '../Support'
import ProjectFooter from '../ProjectFooter'
import './style.css'
import capitalizeFirstLetter from '../../functions/capitalizeFirstLetter'

const ProjectCard = (props) => {

    return (
        
        <div className="project">
                <Header>{props.nome}</Header>
                <Info
                    proponente={capitalizeFirstLetter(props.proponente)}
                    area={props.area}
                    municipio={props.municipio}
                    uf={props.uf}
                />
                <Financial
                    approvedValue={props.approvedValue}
                    collectedValue={props.collectedValue}
                    
                />
                <Support support={props.support}/>
                <ProjectFooter/>
            </div>
    )
}

export default ProjectCard