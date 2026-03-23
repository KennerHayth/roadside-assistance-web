import {Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about"
import Roadside from "./pages/roadside";
import Contacts from "./pages/contacts";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Roadside" element={<Roadside/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>


    </Routes>
  )
}

export default App
