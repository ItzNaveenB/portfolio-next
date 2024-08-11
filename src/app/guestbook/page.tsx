import Link from "next/link";
import React from "react";
import { TbPinned } from "react-icons/tb";

const GuestBook = () => {
  return (
    <div className="mx-4 md:mx-[9rem] md:mt-[-20rem]">
      <h1 className="text-3xl md:text-5xl font-bold">Guestbook</h1>
      <p className="mt-4 text-gray-500 text-base md:text-lg mb-8 md:mb-14">
        Sign my guestbook and share your idea. You can tell me anything here!
      </p>
      <hr />
      <div className="w-full md:w-[56%] border border-gray-800 rounded mt-10 md:mt-12 p-6 mx-0 md:mx-auto bg-pinned-dark">
        <span className="flex items-center gap-2 font-semibold">
          <TbPinned /> Pinned
        </span>
        <p className="font-semibold">
          Hey there! Thanks for visiting my website. If you have a moment, I'd love to hear your thoughts on my work. Please log in with your account to leave a comment. Thanks!
        </p>
      </div>
      <div className="flex items-center gap-2 md:ml-[13.5rem]">
        <button className="py-2 px-4 rounded bg-custom-orange-gradient mt-6">
          Login
        </button>
        <span className="mt-4 text-lg font-semibold">to continue leaving a message</span>
      </div>
      <div className="w-full md:w-[56%] border border-gray-800 rounded mt-10 md:mt-12 p-6 mx-0 mb-4 md:mx-auto">
        <div className="flex items-center">
          <img
            className="w-16 h-16 md:w-[3rem] md:h-[3rem] rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocIL5oTcDI3zIoC45xSEQ_Uo981m7-jUuXdOAGYxE4Bbia49Bao=s96-c"
            alt="man_image"
          />
          <span className="ml-4 md:w-[30%]">Shubham Kumar 2024-07-01 12:40</span>
        </div>
        <p className="ml-0 md:ml-[4rem] mt-4 md:mt-0">
          Hello 👋🏻 Welcome to my website. I write about software engineering and open-source :)
        </p>
      </div>
    </div>
  );
};

export default GuestBook;
