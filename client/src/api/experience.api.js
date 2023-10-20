// experience.api.js
import axios from 'axios';

const experienceApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/experiences/api/v1/experiences/',
});

export const getAllExperiences =()=>{
    return experienceApi.get('/')

}
export const getExperience =(id)=>{
    return experienceApi.get(`/${id}`)

}
export const createExperience =(experience)=>{
    return experienceApi.post('/',experience)
}
export const deleteEducation =(id)=>{
    return experienceApi.delete(`/${id}`)
}
