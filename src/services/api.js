import axios from 'axios'

const getProjects = axios.create({
    baseURL: 'http://api.salic.cultura.gov.br/v1/'
})



export default getProjects

