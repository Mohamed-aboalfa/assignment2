import { useState } from 'react'
import "./App.css"
import Button from './Button'
import Card from './Card'

import logo1 from "./assets/react.svg";
import logo2 from "./assets/vite.svg";





function App() {
  
 const [style,setStyle] =useState("ml-8 mt-4") 
  function click(){
       setStyle((e)=>{
       return e==="ml-8 mt-4"?"bg-blue-500 ml-4 mt-4 rounded text-white w-16 h-8":"ml-8 mt-4"
       })
    
  }
  const [styling,setStyling] =useState("ml-8 mt-4") 
  function onClick(){
       setStyling((e)=>{
       return e==="ml-8 mt-4"?"bg-green-500 ml-4 mt-4 rounded text-white w-16 h-8":"ml-8 mt-4"
       })
    
  }


  return (
    <>
     <Button text={"click"} onClick={click}   style={style}/>
     <Button text={"click me"} onClick={onClick} style={styling}/>
     <Card title={"aboalfa1"} description={"i'm a frontend react developer"} img={logo1} alt={"react photo"} >
      hello world
     </Card>
     <hr></hr>
      <Card title={"aboalfa2"} description={"i'm a mern fullstack developer"} img={logo2} alt={"vite photo"} >
     not hello world 😉😎
     </Card>
    
    </>
  )
}

export default App
