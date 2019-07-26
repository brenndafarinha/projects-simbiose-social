import React, { Component } from 'react'
import getProjects from '../../services/api'
import getContribute from '../../services/apiContribute'
import './style.css'
import ProjectCard from '../../components/ProjectCard'

export default class Main extends Component {

    state = {
        projects: [],
        
    }

    componentDidMount() {
        this.loadProjects()
    }

    loadProjects = async () => {
        const response = await getProjects.get(`/projetos/?limit=12`)
        this.setState({ projects: response.data._embedded.projetos })
    }

    loadProjectSupport = async (PRONAC) => {
        try {
            const response = await getContribute.get(`/?PRONAC=${PRONAC}`)
            return response.data._embedded.incentivadores
        } catch (error) {
            return "Projeto sem aporte no momento"
        }
    }


    render() {
        
        const { projects } = this.state
        return (
            <div className="main">
                {
                    projects.map(project => (
                        <ProjectCard
                            nome={project.nome}
                            proponente={project.proponente}
                            area={project.area}
                            municipio={project.municipio}
                            uf={project.UF}
                            approvedValue={project.valor_aprovado}
                            collectedValue={project.valor_captado}
                            support={this.loadProjectSupport(project.PRONAC)}
                        />
                    )
                    )}
            </div>

        )
    }


}