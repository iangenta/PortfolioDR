import {useForm} from 'react-hook-form'
import { createProject, deleteProject } from '../api/project.api'
import {useNavigate, useParams} from 'react-router-dom'
export function ProjectFormPage(){
  const {register,handleSubmit,formState:{errors},} = useForm()
  const navigate = useNavigate()
  const params = useParams()
  return(<>
      <form onSubmit={handleSubmit(async data=>{ 
      await createProject(data);
      navigate('/projects')})}>
        <input type="text" placeholder="Title" {...register("title",{required : true})} />{errors.title && <span>this field is requiered</span>}
        <textarea placeholder="Description" rows="3"  {...register("description",{required : true})}></textarea>{errors.description && <span>this field is requiered</span>}
        <button>Save</button>
      </form>{
        params.id && <button onClick={async ()=>{ const accepted = window.confirm('¿Are you sure?')
         if (accepted){await deleteProject(params.id)} }}>delete </button>

      }
      </>
      )
  }
  