import { useState } from 'react'
import {Content, Contentoutside} from './components/other/Content/Content'
import {Footer, Footeroutside} from './components/other/footer/footer'
import Header from './components/other/header/header'
import Navbar from './components/Navbar/Navbar'
import {AllRoutes, AllRoutes2} from './Routes/AllRoutes'
import { BrowserRouter, useNavigate } from 'react-router-dom'


function App() {
  const [isLogged, setIsLogged] = useState(true);

  function handleLogin() {
    setIsLogged(true);
  }

  function handleLogout() {
    setIsLogged(false);
  }

  return (
    <BrowserRouter>
      {isLogged ? (
        <div className="container">
        <Header /> 
         <Content>
            <AllRoutes />
          </Content>
          <Navbar />
          <Footer />
        </div>
      ) : (
        <div className="containeroutside">
        <Header />
        <Contentoutside>
            <AllRoutes2 />
          </Contentoutside>
          <Footeroutside />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App