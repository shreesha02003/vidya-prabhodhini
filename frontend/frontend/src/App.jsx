import React from 'react'
import {Routes,Route, Router} from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/createBook";
import ShowBook from "./pages/showBook";
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/books/create' element ={<CreateBook/>}></Route>
      <Route path='/books/details/:id' element ={<ShowBook/>}></Route>
      <Route path='/books/edit/:id' element ={<EditBook/>}></Route>
      <Route path='/books/delete/:id' element ={<DeleteBook/>}></Route>
    </Routes>
  )
}

export default App