import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
//import "../styles/home.css";
import '../styles/home.css';
import BooksCard from '../components/home/booksCard';
import BooksTable from '../components/home/booksTable';



const home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowtype] = useState('card');

  useEffect(() => {
    setLoading(true);
    console.log("Hello");
    axios.get("http://localhost:5555/books").then(response => {
      setBooks(response.data.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }, [])

  return (
    <div className='home-container'>
      <div className='background-image'></div>
      <div className='p-4' id="content">
        <div className='flex justify-center items-cnter gap-x-4'>

          <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowtype('card')}>Card</button>
          <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowtype('table')}>Table</button>
          <Link to='/books/create' >
            <MdOutlineAddBox className='text-zinc-300 text-4xl absolute right-10' />
          </Link>

        </div>
        {/* <div className='flex justify-between items-center'> */}
        <div className="container mx-auto">
          <h1 className='text-yellow-400 my-8  font-bold text-2xl text-center transition duration-3000 ease-in-out'>Vidya Prabhodhini: A Book Store App</h1>
        </div>

        <div className="container mx-auto">
          <h1 className='text-yellow-400 my-8  font-bold text-xl text-center transition duration-3000 ease-in-out'>Uncover literary treasures at our bookstore, where each page holds a world of wonder and imagination</h1>
          {/* </div> */}


          


        </div>
        {loading ? (<Spinner />) : showType === 'table' ? (

          <BooksTable books={books} />

        ) : (<BooksCard books={books} />)}
      </div>
    </div>
  )
}

export default home