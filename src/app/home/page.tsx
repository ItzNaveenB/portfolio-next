'use client'
import React from "react";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import userImage from './salman.jpg'


const HomePage = ()=>{
    const texts = ["Facebook", "Twitter", "Amazone","Mozila","Chrome"];
    const colors = ["#FF5733", "#33FF57", "#3357FF","aqua","yellow"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);
    return(
        <div className="mt-[15rem] mx-[6rem] flex justify-between items-center">
            <div className="w-[60%]">
                <h1 className=" text-4xl font-extrabold">I'm Shubham, a Backend Engineer and an open-source contributor at</h1>
                <h1 className="text-3xl font-bold my-4" style={{ color: colors[currentTextIndex] }}>{texts[currentTextIndex]}</h1>
                <p>Berlin, Germany • GMT +2</p>
            </div>
            <div>
            <img className="w-[12rem] rounded-full mr-[4rem]" src="../me.webp" alt="User Image" />
          </div>
        </div>
    )
}
export default HomePage;