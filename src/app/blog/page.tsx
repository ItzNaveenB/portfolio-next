import React from "react";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { LuPencil } from "react-icons/lu";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="mx-4 md:mx-[9rem] md:mt-[-20rem]">
      <h1 className="text-3xl md:text-5xl font-bold">Blog</h1>
      <p className="mt-4 text-gray-500 text-base md:text-lg pb-8 md:pb-16">
        I’m excited to share my years of experience in building open-source projects, creating scalable systems, and so much more. Subscribe to my newsletter to stay updated on all the latest insights, tips, and stories from my journey. Don’t miss out!
      </p>
      <hr />
      <div className="input-group flex items-center gap-3 mt-8 md:mt-12 rounded border border-gray-500 px-4 py-2 mb-8 md:mb-12">
        <span className="input-group-text" id="addon-wrapping">
          <IoIosSearch />
        </span>
        <input
          type="text"
          className="form-control w-full outline-none border-none bg-transparent"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Link className="shadow-md rounded-lg shadow-gray-800 w-full md:w-1/2" href="/xyz">
          <div className="flex flex-col shadow-xl rounded-lg p-4 text-gray-500">
            <div>
              <span className="flex gap-3 items-center">
                <LuPencil /> Blog
              </span>
              <Image
                className="w-full h-auto"
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fthe-only-git-commands-you%27ll-ever-need%2Fcover.png&w=3840&q=100"
                alt="blog_image"
                width={200}
                height={200}
              />
              <div className="flex justify-between mt-4">
                <span>July 12, 2024</span>
                <span>23 likes · 167 views</span>
              </div>
              <div className="hover:ml-3 mt-4">
                <h1 className="text-lg md:text-xl font-bold">
                  The Git Commands You&apos;ll Ever Need
                </h1>
                <p>
                  Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link className="shadow-md rounded-lg shadow-gray-800 w-full md:w-1/2" href="/mnp">
          <div className="flex flex-col shadow-xl rounded-lg p-4 text-gray-500">
            <div>
              <span className="flex gap-3 items-center">
                <LuPencil /> Blog
              </span>
              <img
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fmy-open-source-journey-at-gitlab%2Fcover.png&w=3840&q=100"
                alt="blog_image"
                className="w-full mt-4 rounded-lg"
              />
              <div className="flex justify-between mt-4">
                <span>July 12, 2024</span>
                <span>23 likes · 167 views</span>
              </div>
              <div className="hover:ml-3 mt-4">
                <h1 className="text-lg md:text-xl font-bold">
                  My Open-Source Journey at GitLab
                </h1>
                <p>
                  My journey from open-source contributor to a core team member at GitLab.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;