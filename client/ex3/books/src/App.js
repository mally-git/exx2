import logo from './logo.svg';
import './App.css';
import Book from './book';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react"
import Login from './login';
import useContext from "./useContext"
import ViewBooks from './viewBooks';

function App() {
  const [arrBook,setArrAbook]=useState([{id:1,name:"aaa",author:111},{id:2,name:"bbb",author:222}])
  const [user,setuser]=useState({name:"",password:0})
  return (
<useContext.Provider value={{user,setuser}}>
    <div className="App">
      
     <Routes>
      <Route path="/books" element={<Book arrBook={arrBook}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/books/:id" element={<ViewBooks arrBook={arrBook}/>}/>

     </Routes>
    </div>
</useContext.Provider>
  );
}

export default App;
