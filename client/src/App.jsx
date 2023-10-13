import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ProjectPage } from './pages/ProjectsPage'
import { ProjectFormPage } from './pages/ProjectFormPage'
import { Navigation } from './components/Navigation'
import { ProjectCard } from './components/ProjectCard'
function App(){
  return(
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/projects' element={<ProjectPage/>}/>
      <Route path='/projects-create' element={<ProjectFormPage/>}/>
      <Route path='/projects/:id' element={<ProjectCard/>}/>


    </Routes>
    
    </BrowserRouter>

    )
}
export default App