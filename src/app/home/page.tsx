'use client'
import React from "react";
import { useState, useEffect } from 'react';

const HomePage = () => {
    const texts = ["Facebook", "Twitter", "Amazon", "Mozilla", "Chrome"];
    const colors = ["#FF5733", "#33FF57", "#3357FF", "aqua", "yellow"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 1000); // Change text every 1 second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mx-[2rem] md:mx-[9rem] md:mt-[-19rem] md:relative  md:-z-10">
            <div className="flex flex-col md:items-start  mb-4 md:mb-0 order-2 md:order-1">
                <h1 className="w-full md:w-[65%]  text-xl font-bold md:text-4xl md:font-extrabold leading-8" >I&apos;m Shubham, a Backend Engineer and an open-source contributor at</h1>
                <h1 className="md:text-4xl font-bold my-4 text-xl" style={{ color: colors[currentTextIndex] }}>{texts[currentTextIndex]}</h1>
                <p>Berlin, Germany • GMT +2</p>
            </div>
            <div className="w-full md:w-[50%] flex  md:justify-end order-1 md:order-2 md:absolute top-[-2%] left-[50%]">
                <img className="w-[7rem] rounded-full" src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Favatar.png&w=256&q=100" alt="User Image" width={100} height={100} />
            </div>
        </div>
    )
}
export default HomePage;
