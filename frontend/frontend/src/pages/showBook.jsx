import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/backButton';
import Spinner from '../components/spinner';
// //import mongoose from 'mongoose';


// const showBook = () => {
//   const [book,setBook]=useState({});
//   const [loading,setLoading]=useState(false)
//   const {id}=useParams();

//   useEffect(()=>{
// setLoading(true);
// //const bookId = mongoose.Types.ObjectId(id);
// axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
//   setBook(response.data);
//   setLoading(false);
// }).catch((error)=>{
//   console.log(error);
//   setLoading(false);
// })
//   },[])

//   return (
//     <div className='p-4 '>
//       <BackButton destination="/"/>
//       <h1 className='text-3xl my-4'>Show Book</h1>
//       {loading?(

//       <Spinner/>
//       ):(
//         <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>

//           <div className='my-4' >
//           <span className='text-xl mr-4 text-gray-500'>Id</span>
//           <span>{book._id}</span>
//           </div>

//           <div className='my-4' >
//           <span className='text-xl mr-4 text-gray-500'>Title</span>
//           <span>{book.title}</span>
//           </div>

//           <div className='my-4' >
//           <span className='text-xl mr-4 text-gray-500'>Author</span>
//           <span>{book.author}</span>
//           </div>

//           <div className='my-4' >
//           <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
//           <span>{book.year}</span>
//           </div>

//           <div className='my-4' >
//           <span className='text-xl mr-4 text-gray-500'>Create Time</span>
//           <span>{new Date(book.createdAt).toString()}</span>
//           </div>

//           <div className='my-4' >
//           <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
//           <span>{new Date(book.updatedAt).toString()}</span>
//           </div>

//       </div>
//     )}
//     </div>
//   )
// }

// export default showBook


const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log(response.data.data); // log the API response
        setBook(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(book); // log the book object

  return (
    <div className='show-container'>
      <div className='background-image-show_book'></div>

      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4 flex justify-center items-center h-full font-bold'>{book.title}</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col border-2 border-sky-500 rounded-xl w-fit p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-black-600 font-bold'>Id: </span>
                <span className='text-l mr-4 text-black-600 font-bold'>{book._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-black-600 font-bold'>Title: </span>
                <span className='text-l mr-4 text-black-600 font-bold'>{book.title}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-black-600 font-bold'>Author: </span>
                <span className='text-l mr-4 text-black-600 font-bold'>{book.author}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-black-600 font-bold'>Publish Year: </span>
                <span className='text-l mr-4 text-black-600 font-bold'>{book.year}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-black-600 font-bold'>Create Time: </span>
                <span className='text-l mr-4 text-black-600 font-bold'>{new Date(book.createdAt).toString()}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-black-600 font-bold'>Last Update Time: </span>
                <span className='text-l mr-4 text-black-600 font-bold'>{new Date(book.updatedAt).toString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default ShowBook;