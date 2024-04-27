// import React from 'react'
// import { Link } from 'react-router-dom'
// //import { PiBookOpenTextLight } from 'react-icons/bi';
// import { BiBookOpen } from 'react-icons/bi';
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { BiUserCircle } from 'react-icons/bi';
// import { MdOutlineDelete } from 'react-icons/md';


// function booksSingleCard({ books }) =>{

//     return (



//         <div key={books._id}
//             className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow'>
//             <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'> {books.year}</h2>
//             <h4 className='my-2 text-gray-500'>{books._id}</h4>
//             <div className='flex justify-start items-center gap-x-2'>
//                 <BiBookOpen className='text-red-300 text-2xl' />
//                 <h2 className='my-1'>{books.title}</h2>
//             </div>

//             <div className='flex justify-start items-center gap-x-2'>
//                 <BiUserCircle className='text-red-300 text-2xl' />
//                 <h2 className='my-1'>{books.author}</h2>
//             </div>
//             <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
//                 <Link to={`/books/details/${books._id}`}>
//                     <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
//                 </Link>

//                 <Link to={`/books/edit/${books._id}`}>
//                     <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
//                 </Link>

//                 <Link to={`/books/delete/${books._id}`}>
//                     <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
//                 </Link>

//             </div>
//         </div>
//     );




// }


// export default booksSingleCard



import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import '../../styles/home.css';


//const hoverClass = 'text-green-400 hover:shadow-glow';

const booksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-yellow-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl hover-effect'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-yellow-300 rounded-lg'>
        {book.year}
      </h2>
      <h4 className='my-2 text-yellow-100'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-yellow-400 text-2xl' />
        <h2 className='my-1 text-yellow-400 font-bold'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-yellow-400 text-2xl' />
        <h2 className='my-1 text-yellow-400 font-bold'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-zinc-100 hover:text-pink-300 cursor-pointer font-bold'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          {/* <BsInfoCircle className='text-2xl text-green-400 hover:text-zinc-100' />  */}
          <BsInfoCircle className='text-2xl text-green-400 hover:text-lime-300 shadow-lg' />
          {/* <BsInfoCircle className={`text-2xl ${hoverClass}`} /> */}
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-300 hover:text-amber-400' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-300' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default booksSingleCard;