import React,{ useState } from 'react'
import './App.css'
import { Card } from './component/Card'
import { CardInfo } from './component/CardInfo'

function App() {
  const [count, setCount] = useState(0)
  let newElemnets =       
   CardInfo.map((info, index)=>{
          return(
            <Card key ={index} imgLink1={info.imageLink1}  link = {info.link} name = {info.name} />
          )
   });
   console.log(<Card/>)
  return (
    <>
    <div className='projectContainer'>
      <h1>Featured Projects</h1>
      <section className="projects">
        {newElemnets}
      </section>
    </div>
    </>
  )
}

export default App
