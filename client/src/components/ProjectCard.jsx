import {useNavigate} from 'react-router-dom'

export function ProjectCard({project}){

    const navigate = useNavigate()
    return(
        <div style={{background:'white', color:'#202020'}}
        onClick={()=>{
            navigate(`/projects/${project.id}`)
        }}>
            <article>
            <img
        alt="Project Image"
        src={project.image}
      />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            </article>
        </div>
           
            
            
     
    )
}