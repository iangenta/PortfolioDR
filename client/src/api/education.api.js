// education.api.js
import axios from 'axios';

const educationApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/educations/api/v1/educations/',
});

export const getAllEducations =()=>{
    return educationApi.get('/')

}
export const getEducation =(id)=>{
    return educationApi.get(`/${id}`)

}
export const createEducation =(education)=>{
    return educationApi.post('/',education)
}
export const deleteEducation =(id)=>{
    return educationApi.delete(`/${id}`)
}