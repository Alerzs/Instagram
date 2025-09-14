import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineProfile } from 'react-icons/ai';
import SearchResults from './SearchResults';

export default function Sidebar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const sideBarItem = [
    { id: 1, text: "", link: "/", icon: logo, isImage: true },
    { id: 2, text: "Home", link: "/", icon: <AiOutlineHome size={24} /> },
    { id: 3, text: "Search", link: "/#", icon: <AiOutlineSearch size={24} /> },
    { id: 4, text: "Create", link: "/#", icon: <AiOutlinePlusSquare size={24} /> },
    { id: 5, text: "Profile", link: "/#", icon: <AiOutlineProfile size={24} /> },
  ];

  const handleClick = (item) => {
    if (item.text === "Search") {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
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
          {sideBarItem.map(item => (
            <li key={item.id} className="my-2">
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  handleClick(item);
                }}
                className="flex items-center gap-3 p-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
              >
                {item.isImage ? (
                  <img src={item.icon} alt={item.text} className="w-20 h-auto object-contain" />
                ) : (
                  <span>{item.icon}</span>
                )}
                {item.text && !isSearchOpen && <span>{item.text}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isSearchOpen && (
        <div className="w-72 p-5 border-l border-gray-300 bg-white">
          <SearchResults />
        </div>
      )}
    </div>
  );
}
