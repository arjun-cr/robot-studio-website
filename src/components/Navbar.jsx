import React, { useState } from 'react';
import { LAB_NAME } from '../constants';
import { Logo } from '../assets/Icons';

const CompanyName = ({ toggleSidebar }) => {
  return (
    <>
      <span className='flex'>
        <Logo />{" "}
        <h1 className="text-2xl font-bold text-white uppercase">{LAB_NAME}</h1>
      </span>
      <button
        onClick={toggleSidebar}
        className="text-white text-3xl focus:outline-none md:hidden"
      >
        &#9776;
      </button>
    </>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const nav_items = [
    {
      item: "Projects",
      link: "#projects"
    },
    {
      item: "Publications",
      link: "#projects"
    },
    {
      item: "People",
      link: "#projects"
    },
    {
      item: "News",
      link: "#projects"
    },
  ]

  return (
    <div>
      <nav className="fixed w-full top-0 left-0 z-50 bg-gray-800 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <CompanyName toggleSidebar={toggleSidebar} />
          <div className="hidden md:flex space-x-4">
            {
              nav_items.map(nav_item => {
                return (
                  <a href={nav_item.link} className="text-white">
                    {nav_item.item}
                  </a>
                )
              })
            }
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl focus:outline-none"
          >
            &times;
          </button>
          <ul className="mt-4 space-y-2">
            {
              nav_items.map(nav_item => {
                return (
                  <li>
                    <a
                      href={nav_item.link}
                      className="block text-lg hover:text-gray-300 p-2 rounded"
                      onClick={toggleSidebar}
                    >
                      {nav_item.item}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
