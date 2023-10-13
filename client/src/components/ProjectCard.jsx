import {useNavigate} from 'react-router-dom'

export function ProjectCard({project}){

    const navigate = useNavigate()
    return(
        <div style={{background:'white'}}
        onClick={()=>{
            navigate(`/projects/${project.id}`)
        }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
            
            
     
    )
}