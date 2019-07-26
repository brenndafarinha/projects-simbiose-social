import axios from 'axios'

const getContribute = axios.create({
    baseURL: 'http://api.salic.cultura.gov.br/v1/incentivadores'
})

export default getContribute