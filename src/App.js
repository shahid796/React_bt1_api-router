import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from 'react'
import Api from './Api';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Router/Home';
import About from './Router/About';

function App() {
  const [data,setdata]=useState([])
  return (
    <div >
     <h1>rest api</h1>
     <button onClick={()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
         console.log(response.data)
         setdata(response.data)
       })
     }}>fetch data</button>
      {/* {
       data.map((item,index)=>{
         return(
           <div>
              <h2>{index+1}</h2>
           <h3>{item.title}</h3>
           </div>
          
         )
       })
     }
     <Api/>
     */}
     <Link to="/home">home page</Link><br /><br />
     <Link to="/about">about page</Link>
     <Routes>
       <Route element={<Home/>} path="/home"></Route>
       <Route element={<About/>} path="/about"></Route>
     </Routes>
    
    </div>
  );
}

export default App;
