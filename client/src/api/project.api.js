import axios from 'axios'
export const getAllProjects =()=>{
    return axios.get('http://127.0.0.1:8000/projects/api/v1/projects/')

}