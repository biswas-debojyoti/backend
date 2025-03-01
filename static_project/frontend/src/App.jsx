import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes]=useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[jokes])

  return (
    <>
    <hi>This is frontend side using :  </hi>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" alt="" style={{"width":"40px",marginTop:"20px"}} />
    <h1>Total Jokes : {jokes.length} </h1>
    {
      jokes.map ((joke,index) => (
       <div key={index}>
         <h3>Title : {joke.id} , {joke.title}</h3>
         <p>Body - {joke.content}</p>
       </div>
      ))
    }
    </>
  )
}

export default App

 
