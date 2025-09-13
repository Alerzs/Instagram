import React from 'react';
// import { NavLink } from 'react-router';

import logo from '../../assets/icons/logo.png';

import { AiOutlineHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineUser, AiOutlineProfile } from 'react-icons/ai'; 



export default function   Sidebar() {
    const sideBarItem= [
        {id:1,
            text:"",
            link:"/",
            icon:logo,
            isImage: true,
      
        },
         {id:2,
            text:"Home",
            link:"/",
            icon: <AiOutlineHome />
        },
         {id:3,
            text:"Search",
            link:"/#",
            icon: <AiOutlineSearch />
        }
        ,
         {id:4,
            text:"create",
            link:"/#",
            icon: <AiOutlinePlusSquare />
        }
        ,
         {id:5,
            text:"Profile",
            link:"/#",
            icon:<AiOutlineProfile />
        }

    ]
 return (
        <nav className="sidebar w-[145px] h-[625px] border-r border-gray-300 ">
            <ul className="sidebar-menu">
                {sideBarItem.map(item => (
                    <li key={item.id}>
                        <a href='#'
                            className="flex items-center gap-4 p-2 text-sm"
                        >
                            {item.isImage ? (
                                <img src={item.icon} alt={item.text} className="sidebar-icon" className="w-24 h-8 object-contain" />
                            ) : (
                                <span className="sidebar-icon">{item.icon}</span>
                            )}
                            {item.text && <span>{item.text}</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}