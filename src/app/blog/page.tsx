import React from "react";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { LuPencil } from "react-icons/lu";

const BlogPage = () => {
  return (
    <div className="md:mt-[-8rem] xl:mt-[-20rem] lg:mt-[-12rem]">
      <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
      <h1 className="text-3xl md:text-5xl font-bold">Blog</h1>
      <p className="mt-4 text-gray-500 text-base md:text-lg pb-8 md:pb-8">
        I’m excited to share my years of experience in building open-source projects, creating scalable systems, and so much more. Subscribe to my newsletter to stay updated on all the latest insights, tips, and stories from my journey. Don’t miss out!
      </p>
      </div>
      
     <hr />
     <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
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
        <Link className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg  w-full md:w-1/2" href="/xyz">
          <div className="flex flex-col shadow-xl rounded-lg p-4 text-gray-500">
            <div>
              <span className="flex gap-3 items-center">
                <LuPencil /> Blog
              </span>
              <img
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fthe-only-git-commands-you%27ll-ever-need%2Fcover.png&w=3840&q=100"
                alt="blog_image"
                className="w-full mt-4 rounded-lg hover:scale-105"
              />
              <div className="flex justify-between mt-4">
                <span>July 12, 2024</span>
                <span>23 likes · 167 views</span>
              </div>
              <div className="hover:ml-3 mt-4">
                <h1 className="text-lg md:text-xl font-bold">
                  The Git Commands You'll Ever Need
                </h1>
                <p>
                  Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg  w-full md:w-1/2" href="/mnp">
          <div className="flex flex-col shadow-xl rounded-lg p-4 text-gray-500">
            <div>
              <span className="flex gap-3 items-center">
                <LuPencil /> Blog
              </span>
              <img
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fmy-open-source-journey-at-gitlab%2Fcover.png&w=3840&q=100"
                alt="blog_image"
                className="w-full mt-4 rounded-lg hover:scale-105"
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
    </div>
  );
};

export default BlogPage;
