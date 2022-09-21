import React ,{useState,useEffect} from 'react'


const App  = ()=>{
  const [num, setNum] = useState(0)
  const increase = ()=>{
    setNum(num +1)
  }
  useEffect(() => {
    
  document.title = `you clicked me ${num} times `;
   
  })
  
  return(

<>
<h1>  {num} </h1>
  <button onClick={increase} >click here</button>
</>

  )
}

export default App;