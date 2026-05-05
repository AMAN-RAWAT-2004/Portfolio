import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Components/Pages/Home"
import About from './Components/Pages/About'
import ContactMe from './Components/Pages/ContactMe'
import Skills from './Components/Pages/Skills'
import Services from "./Components/Pages/Services"
import Mainlayout from "./Components/Layouts/Mainlayout"
import Projects from "./Components/Pages/Projects"
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
        <Route  element={<Mainlayout/>}>
            <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='skills' element={<Skills/>} />
        <Route path='service' element={<Services/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='contact' element={<ContactMe/>} />
        </Route>
        
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
