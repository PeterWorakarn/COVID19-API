import React from 'react';
import {MdExpandLess} from 'react-icons/md';
import { IconContext } from "react-icons";

export default function ScrollTop() {
      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    

    return (
        <button onClick={scrollTop} className="fixed bottom-2 right-1 bg-opacity-75 grid place-items-center w-8 h-8 bg-brand rounded-full hover:bg-brand active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <IconContext.Provider value={{ className:"w-5 h-5 text-white" }}>
                <MdExpandLess />
            </IconContext.Provider>
        </button>
    )
}