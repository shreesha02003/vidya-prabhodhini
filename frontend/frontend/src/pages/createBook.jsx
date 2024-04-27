import React, { useState } from 'react'
import BackButton from '../components/backButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const createBook = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [year,setPublishyear]=useState('');
  const [genre, setGenre]=useState('');
  const [about, setAbout]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {enqueueSnackbar} =useSnackbar();


const handleSaveBook=()=>{
  const data={
    title,
    author,
    year,
    genre,
    about,
  };
  setLoading(true);

  axios.post('http://localhost:5555/books', data)
  .then(()=>{
    setLoading(false);
    enqueueSnackbar('Book Created Successfully', {variant: 'success'})
    navigate('/');
  }).catch((err)=>{
    setLoading(false);
    //alert("An error occured. Please check console")
    enqueueSnackbar('Error', {variant:'error'})
    console.log(err);
  })



}

// useEffect(() => {
//   const handleKeyDown = (e) => {
//       if (e.key === 'Enter') {
//           handleSaveBook();
//       }
//   };

//   document.addEventListener('keydown', handleKeyDown);

//   return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//   };
// }, [handleSaveBook]);

  return (
    <div className='p-4'>

      <BackButton />

      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading?<Spinner/>:'' }
      <div className='flex flex-col border-2 border-yellow-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Title</label>
              <input
              type='text'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
               />
          </div>

          <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Author</label>
              <input
              type='text'
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
               />
          </div>


          <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
              <input
              type='text'
              value={year}
              onChange={(e)=>setPublishyear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
               />
          </div>


          <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Genre</label>
              <input
              type='text'
              value={genre}
              onChange={(e)=>setGenre(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
               />
          </div>

          <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>About the book</label>
              <input
              type='text'
              value={about}
              onChange={(e)=>setAbout(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
               />
          </div>

          <button className='p-2 bg-yellow-300 m-8' onClick={handleSaveBook}>Save</button>


      </div>

    </div>
  )
}

export default createBook