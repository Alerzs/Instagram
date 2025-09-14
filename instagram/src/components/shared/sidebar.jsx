import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineProfile } from 'react-icons/ai';
import SearchResults from './SearchResults';
import { client } from '../lib';
import { Link } from 'react-router';



export default function Sidebar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);


  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleClick = (item) => {
    if (item.text === "Search") {
      setIsSearchOpen(true);
      setIsCreateOpen(false);
    } else if (item.text === "Create") {
      setIsCreateOpen(true);
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(false);
      setIsCreateOpen(false);
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("jwttoken")
    if (!title.trim() || !content.trim()) {
      alert("Title and Content cannot be empty");
      return;
    }
  
    try {

      const response = await client.post('/article', { title, content }, {
        headers: { Authorization: `Bearer ${token}`}
      });
      console.log('Response:', response.data);
      alert('Post submitted!');
      setTitle('');
      setContent('');
      setIsCreateOpen(false);
    } catch (error) {
      console.error(error);
      console.error('Submit error:', error.message);
    }
  };

  return (
    <div className="flex h-[625px]">
      <nav
        className={`border-r border-gray-300 transition-all duration-300 ease-in-out
          ${isSearchOpen ? 'w-16' : 'w-48'}
        `}
      >
        <ul className="list-none p-0 m-0">
            <li className="my-2">
                <img src={logo} alt='home' className="w-20 h-auto object-contain" />
            </li>
            <li className="my-2">
              <Link to="/"
                className="flex items-center gap-3 p-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
              >
              <span><AiOutlineHome size={24} /></span>
              <span>Home</span>
              </Link>
            </li>
            <li className="my-2">
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  handleClick({ id: 3, text: "Search", link: "/#", icon: <AiOutlineSearch size={24} /> });
                }}
                className="flex items-center gap-3 p-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
              >
                <span><AiOutlineSearch size={24} /></span>
                <span>Search</span>
              </a>
            </li>
            <li className="my-2">
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  handleClick({ id: 4, text: "Create", link: "/#", icon: <AiOutlinePlusSquare size={24} /> });
                }}
                className="flex items-center gap-3 p-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
              >
                <span><AiOutlinePlusSquare size={24} /></span>
                <span>Create</span>
              </a>
            </li>
            <li className="my-2">
              <Link to='/Profile'
                className="flex items-center gap-3 p-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
              >
                <span><AiOutlineProfile size={24} /></span>
                <span>Profile</span>
              </Link>
            </li>
        </ul>
      </nav>

      {isSearchOpen && (
        <div className="w-72 p-5 border-l border-gray-300 bg-white">
          <SearchResults />
        </div>
      )}

      {isCreateOpen && (
        <div className="fixed inset-0 bg-[#ffffff90] flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] h-[400px] relative">
            <h3 className="text-center font-bold mb-4 ">Create new post</h3>
            <hr className='w-full m-0  border-t border-gray-300' />
            <div className='mt-20'>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-[10px] hover:bg-blue-600 transition mt-5"
              >
                Select from computer
              </button>
            </div>

            <button
              onClick={() => setIsCreateOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl "
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

