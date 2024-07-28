import React from "react";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { LuPencil } from "react-icons/lu";

const BlogPage = ()=>{
    return (
       
      <div className="mx-[7rem] mt-[8rem]">
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="mt-4 text-gray-500 text-base">I’m excited to share my years of experience in building open-source projects, creating scalable systems, and so much more. Subscribe to my newsletter to stay updated on all the latest insights, tips, and stories from my journey. Don’t miss out!</p>
          <hr></hr>   
          <div className="input-group flex items-center gap-3 mt-12 rounded border border-gray-500 px-4 py-2 mb-12">
          <span className="input-group-text" id="addon-wrapping"><IoIosSearch /></span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div className="flex gap-4 mb-[5rem]">
            <Link href="/xyz">
                <div className="flex  shadow-xl rounded-lg p-4 text-gray-500">
                    <div>
                        <span className="flex gap-3 items-center"><LuPencil /> Blog</span>

                        <img src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fthe-only-git-commands-you%27ll-ever-need%2Fcover.png&w=3840&q=100" alt="blog_image" />

                        <div className="flex justify-between ">
                            <span>July 12, 2024</span>
                            <span>23 likes · 167 views</span>

                        </div>
                        <div className="hover:ml-3">
                            <h1 className="text-xl font-bold">The Git Commands You&apos;ll Ever Need</h1>
                            <p>Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/mnp">
            <div className="flex  shadow-xl rounded-lg p-4 text-gray-500">
                    <div>
                        <span className="flex gap-3 items-center"><LuPencil /> Blog</span>

                        <img className="w-[2012px]" src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fmy-open-source-journey-at-gitlab%2Fcover.png&w=3840&q=100" alt="blog_image" />

                        <div className="flex justify-between ">
                            <span>July 12, 2024</span>
                            <span>23 likes · 167 views</span>

                        </div>
                        <div className="hover:ml-3">
                            <h1 className="text-xl font-bold">The Git Commands You&apos;ll Ever Need</h1>
                            <p>My journey from open-source contributor to a core team member at gitlab.</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
       

       
    )
}
export default BlogPage;