import React from 'react'
import axios from "axios";
import Spinner from "../spinner";
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
//import "../styles/home.css";

function booksTable({books}) {
  return (
    <table className='w-full border-separated border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-yellow-300 rounded-md text-yellow-400'>No</th>
          <th className='border border-yellow-300 rounded-md text-yellow-400'>Title</th>
          <th className='border border-yellow-300 rounded-md:hidden text-yellow-400'>Author</th>
          <th className='border border-yellow-300 rounded-md:hidden text-yellow-400'>Publish Year</th>
          <th className='border border-yellow-300 rounded-md text-yellow-400'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-yellow-300 rounded-md text-center text-yellow-400">
              {index + 1}
            </td>
            <td className="border border-yellow-300 rounded-md text-center text-yellow-400">
              {book.title}
            </td>
            <td className="border border-yellow-300 rounded-md text-center text-yellow-400">
              {book.author}
            </td>
            <td className="border border-yellow-300 rounded-md text-center text-yellow-400">
              {book.year}
            </td>
            <td className="border border-yellow-300 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <div key={`details-${book._id}`}>
                  <Link to={`books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-400 hover:text-lime-300 shadow-lg" />
                  </Link>
                </div>
                <div key={`edit-${book._id}`}>
                  <Link to={`books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-400 hover:text-yellow-300" />
                  </Link>
                </div>
                <div key={`delete-${book._id}`}>
                  <Link to={`books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-400 hover:text-red-300" />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default booksTable
