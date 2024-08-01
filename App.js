/*import React,{useState,useEffect,useContext} from 'react'
import Home from './Home'
import Footer from './Footer';
import Add from './Add';
import Search from './Search';
import CompounentC from './CompounentC';


export const userContext=React.createContext(); 
const App = () => {
const[user,setUser]=useState("")
const handler = e =>{
setUser(e.targer.value)
const[name,setName]=useState("")
const[search,setSearch]=useState("")
const [addnew,setAddNew]=useState("")
const[list,setList]=useState([

 {
    id:1,
    checked:true,
    item:"html",
  },
  {
  id:2,
  checked:true,
  item:"java",
},
{
  id:3,
  checked:true,
  item:"css",
},
{
  id:4,
  checked:true,
  item:"javascript",
}])
const handleChange=((id) => {
  const result=list.map((li)=>(li.id===id?{checked:!li.checked}:li))
  setList(result)
  })
  const handleDelete=((id) => {
  const result=list.filter((li)=>(li.id!==id))
  setList(result)
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=list.length?list[list.length-1].id+1:1
    const newitem={id,checked:false,item:addnew}
    const result=[...list,newitem]
    setList(result)
    setAddNew('')
  }
  useEffect(()=>{
    console.log("loading");
  },[])
return(

<div className='App'>
    <search search={search}setSearch={setSearch}/>
    <Home list={list.filter((li)=>(li.item).toLowerCase().includes(search.toLowerCase()))}handleChange={handleChange}handleDelete={handleDelete}/>
    <Footer list={list}/>
    <Add addnew={addnew}setAddNew={setAddNew}handleSubmit={handleSubmit}/>
    <center>
    <userContext.Provider value={"telugu skill hub"}>
    <CompounentC />
    </userContext.Provider>
    <input type="text"placeholder="username"value={user}name={"user"}onchange={handler}/><br></br>
    {user}
    </center>
</div>
      
  )
  
}
}

export default App*/
/*import React,{useState} from 'react'


const App = () => {
  const[input,setInput]=useState("")
  const[result,setResult]=useState(0)
  const handler=e=>{
    setInput(e.target.value);
  }
  
  return (
    <div>
      <center>
      <input type="text" value={input}name="input"onChange={handler}/><br></br>
      <button onClick={()=>setResult(eval(input))}>Result</button>
      <h4>Result is:{result}</h4>
      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'4')}>4</button>
      <button onClick={()=>setInput(input+'5')}>5</button>
      <br></br>
      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>
      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'0')}>0</button>
      <br>
      </br>
      <button onClick={()=>setInput(input+'+')}>+</button>
      <button onClick={()=>setInput(input+'-')}>-</button>
      <button onClick={()=>setInput(input+'*')}>*</button>
      <button onClick={()=>setInput(input+'/')}>/</button>
      <button onClick={()=>setInput('')}>clr</button>
  
      </center>
      
    </div>
  )
}
  const default App*/

/*import React,{useState} from 'react';
import{Routes,Route}from 'react-router-dom'
import Support from './Support';
import Sign from './Sign';
import Create from './Create';
import Header from './Header';
import Navbar from './Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Home from './Home';
import './App.css';
import Footer from './Footer';


const App = () => {const[input,setInput]=useState("")
const[result,setResult]=useState(0)
const handler=e=>{
  setInput(e.target.value);
}
  return (
        <div>
          <Header />
           <Navbar />
               <div className="E">
                <input type="text" placeholder='search entire store here...'></input> </div>
              <div className="F">
            <FaShoppingCart /></div>
            <div className="G">
            <FaSearch /></div>
            <Home />
            <Footer />
          
            
          
          
          

       </div>
  )  
}
export default App*/



import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer';
import './App.css';





const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      
    

      
    </div>
  )
}

export default App







  







