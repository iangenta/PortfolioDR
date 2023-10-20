import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { createProject, deleteProject,getProject,updateProject } from '../api/project.api'
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from "react-hot-toast";

export function ProjectFormPage(){
  const {register,handleSubmit,formState:{errors},setValue} = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProject(params.id, data);
      toast.success("Project updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createProject(data);
      toast.success("New project Added", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/projects");
  });
  useEffect(() => {
    async function loadProject() {
      if (params.id) {
        const { data } = await getProject(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadProject();
  }, []);

  return(<>
      <form onSubmit={onSubmit}>
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
  