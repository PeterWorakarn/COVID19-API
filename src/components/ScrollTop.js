import React from 'react';
import {MdExpandLess} from 'react-icons/md';
import { IconContext } from "react-icons";

export default function ScrollTop() {
      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    

    return (
        <button onClick={scrollTop} className="grid place-items-center w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <IconContext.Provider value={{ className:"w-10 h-10 color-white" }}>
                <MdExpandLess />
            </IconContext.Provider>
      </button>
    )
}