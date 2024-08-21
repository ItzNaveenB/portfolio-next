'use client';
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { MdKeyboardCommandKey, MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiSignInBold } from "react-icons/pi";
import { FaLink, FaGithub, FaYoutube } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import './Navbar.css';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="z-0">
                <img src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fgradient-background-top.png&w=3840&q=75" alt="top_gradient" />
            </div>
            <div className="fixed inset-x-0 top-4 z-50 mx-auto flex h-[60px]  items-center justify-between rounded-2xl px-7 custom-shadow custom-backdrop custom-border lg:w-[75%] xl:w-[75%] 2xl:w-[90%]">
                <Link className="flex items-center justify-center gap-1" href="/">S</Link>
                <div className="flex items-center gap-2">
                    <ul className="hidden md:flex gap-2">
                        <li className="relative flex h-[60px] items-center justify-center">
                            <Link href="/blog" className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Blog</Link>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <Link className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/guestbook">Guestbook</Link>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <Link className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <Link className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/projects">Projects</Link>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <Link className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/about">About</Link>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <Link className="rounded px-3 py-2 text-sm font-medium " href="/contributions">Contributions</Link>
                        </li>
                    </ul>
                    <div data-orientation="vertical" role="none" className="bg-border shrink-0 w-px h-6 bg-gray-500"></div>
                    <ModeToggle />

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline"><MdKeyboardCommandKey /></Button>
                        </DialogTrigger>
                        
                        <DialogContent className="bg-white dark:bg-black md:h-[20rem] md:overflow-y-auto fixed bottom-0 inset-x-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-[425px] sm:max-h-[90%] max-h-[60%] h-full overflow-y-auto sm:overflow-visible sm:rounded-lg rounded-t-lg  p-4 sm:p-6 ml-[10rem] sm:ml-0">
                            <DialogHeader className="flex flex-row items-center">
                                <CiSearch className="mt-[.6rem]" />
                                <input className="bg-transparent outline-none p-2" type="text" placeholder="search" />
                            </DialogHeader>
                            <hr />
                            <div className="grid py-1">
                                <div className="grid items-center">
                                    <span className="text-sm text-gray-500">Account</span>




                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                                <PiSignInBold className="text-xl" />
                                                <span>Sign In</span>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="bg-white dark:bg-black sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Sign in</DialogTitle>
                                                <DialogDescription className="text-gray-500">
                                                to continue to shubham-kumar.com
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="flex items-center justify-center px-8 gap-4 bg-black text-white dark:bg-white dark:text-black p-2 rounded-xl cursor-pointer">
                                               <FaGithub className="text-2xl dialogSvg"/>
                                               <span className="font-semibold">Continue with Github </span>
                                                </div>
                                                <div className="flex items-center justify-center px-8 gap-4   p-2 rounded-xl border border-zinc-800 dark:bg-zinc-900 cursor-pointer hover:bg-gray-600">
                                               <FcGoogle  className="text-2xl"/>
                                               <span className="font-semibold">Continue with Google</span>
                                                </div>

                                            </div>
                                        </DialogContent>
                                    </Dialog>


                                </div>
                                <hr />
                                <div className="grid items-center">
                                    <span className="text-sm text-gray-500">General</span>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <FaLink className="text-xl" />
                                        <span>Copy Link</span>
                                    </div>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <IoCode className="text-xl" />
                                        <span>Source Code</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid items-center">
                                    <span className="text-sm text-gray-500">Social</span>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <FaGithub className="text-xl" />
                                        <span>Github Link</span>
                                    </div>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <FaGitlab className="text-xl" />
                                        <span>Gitlab</span>
                                    </div>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <RiTwitterXLine className="text-xl" />
                                        <span> X </span>
                                    </div>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <FaYoutube className="text-xl" />
                                        <span> Youtube </span>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    
                    </Dialog>



                    <button className="md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden rounded-lg border border-gray-400 fixed inset-x-0 top-[5rem] w-[55%] ml-[8rem] shadow-lg z-50">
                    <ul className="flex flex-col items-start">
                        <li className="mb-4 w-full">
                            <Link href="/blog" className="w-full block text-sm px-4 font-medium">Blog</Link>
                        </li>
                        <li className="mb-4 w-full">
                            <Link href="/guestbook" className="w-full block  text-sm font-medium  px-4 ">Guestbook</Link>
                        </li>
                        <li className="mb-4 w-full">
                            <Link href="/dashboard" className="w-full block  px-4 text-sm font-medium">Dashboard</Link>
                        </li>
                        <li className="mb-4 w-full">
                            <Link href="/projects" className="w-full block  text-sm font-medium px-4">Projects</Link>
                        </li>
                        <li className="mb-4 w-full">
                            <Link href="/about" className="w-full block  text-sm font-medium px-4">About</Link>
                        </li>
                        <li className="mb-4 w-full">
                            <Link href="/contributions" className="w-full block  text-sm font-medium px-4">Contributions</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
