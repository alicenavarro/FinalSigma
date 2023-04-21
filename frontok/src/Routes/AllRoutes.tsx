import { Routes,Route } from "react-router-dom"
import Home from "../components/Pages/Home/Home"
import Login from "../components/Login/Login"
import Formulario from "../components/Pages/veterinario/Formulario"
// import Cuidadores from "../components/Pages/administracion/ListaTrabajadores"
import ListaTrabajadores from "../components/Pages/administracion/cuidadores/ListaTrabajadores"

const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/loged' element={<Home />}></Route>
        <Route path='/loged/formulario' element={<Formulario />}></Route>
        <Route path='/ListaTrabajadores' element={<ListaTrabajadores />}></Route>
      </Routes>
    )
  }

  const AllRoutes2 = () => {
    return (
      <Routes>
        <Route path='/home/' element={<Home />}></Route>
        <Route path='/home/formulario' element={<Formulario />}></Route>
        <Route path='/home/login' element={<Login />}></Route>
      </Routes>
    )
  }
  
  export {AllRoutes, AllRoutes2}