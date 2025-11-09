import './App.css'
import ContactForm from './Components/Contact.jsx'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from'react-router-dom'


function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
       <Route path="/ContactForm" element ={<ContactForm/>}></Route> 
       <Route path="/" element ={<Home/>}></Route>
    </Routes>    
    </BrowserRouter>
   </>
  )
}

export default App
