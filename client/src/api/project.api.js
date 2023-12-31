import axios from 'axios'

//create instance 
const projectApi = axios.create({
    baseURL:'http://127.0.0.1:8000/projects/api/v1/projects/'
})
export const getAllProjects =()=>{
    return projectApi.get('/')

}
export const getProject =(id)=>{
    return projectApi.get(`/${id}`)

}
export const createProject =(project)=>{
    return projectApi.post('/',project)
}
export const deleteProject =(id)=>{
    return projectApi.delete(`/${id}`)
}

export const updateProject = (id, task) => projectApi.put(`/${id}/`, task);
