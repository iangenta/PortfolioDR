import { ProjectCard } from './ProjectCard'
import { useEffect, useState } from "react"
import { getAllProjects } from "../api/project.api"
export function ProjectList(){
    const [projects, setProjects]  = useState()
    useEffect(()=>{
       async function loadProjects(){
            const res = await getAllProjects();
            setProjects(res.data);
        }
        loadProjects()
    },[])
    return(<div>
        {projects.map(project=>(
            <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
      
    )
  }