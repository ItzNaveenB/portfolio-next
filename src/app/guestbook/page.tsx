import Link from "next/link";
import React from "react";
import { TbPinned } from "react-icons/tb";


const GuestBook = () =>{
    return(
        <div className="mx-[7rem] my-[8rem]"> 
          <h1 className="text-5xl font-bold">Guestbook</h1>
          <p className="mt-4 text-gray-500 text-base mb-8">Sign my guestbook and share your idea. You can tell me anything here!</p>
          <hr></hr>
          <div className="w-[56%] border border-gray-500 rounded  mt-20 p-6 ml-[25%] bg-custom-green-gradient ">
            <span className="flex items-center gap-2 font-semibold"><TbPinned />Pinned</span>
            <p>Hey there! Thanks for visiting my website. If you have a moment, I&apos;d love to hear your thoughts on my work. Please log in with your account to leave a comment. Thanks!</p>
          </div>
          <button className="py-1 px-2 rounded bg-custom-orange-gradient mr-3 ml-[25%] mt-[5rem]">Login</button>
          <span>to continue leaving a message</span>
          <div className="w-[56%] border border-gray-500 rounded  mt-20 p-6 ml-[25%]">
            <div className="flex items-center">
                <img className="w-[6rem] rounded-[50%] gap-4" src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="man_image" />
                <span className="w-[30%]">Shubham Kumar
                2024-07-01 12:40</span>
            </div>
            <p className="ml-[6rem]">Hello 👋🏻 Welcome to my website. I write about software engineering and open-source :)</p>
          </div>
        </div>
    )
}
export default GuestBook;