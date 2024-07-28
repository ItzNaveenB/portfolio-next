import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { MdKeyboardCommandKey } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiSignInBold } from "react-icons/pi";
import { FaLink, FaGithub, FaYoutube } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";

const Navbar = () => {
    return (
        <footer className="relative">
            <div className="fixed inset-x-0 top-4 z-100 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-lg shadow-gray-500/50 blurred-background">
                <a className="flex items-center justify-center gap-1" href="/">S</a>
                <div className="flex items-center gap-2">
                    <ul className="hidden gap-2 md:flex">
                        <li className="relative flex h-[60px] items-center justify-center">
                            <a href="/blog" className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Blog</a>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <a className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/guestbook">Guestbook</a>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <a className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <a className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/projects">Projects</a>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <a className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/about">About</a>
                        </li>
                        <li className="relative flex h-[60px] items-center justify-center">
                            <a className="rounded px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground" href="/contributions">Contributions</a>
                        </li>
                    </ul>
                    <div data-orientation="vertical" role="none" className="bg-border shrink-0 w-px h-6 bg-gray-500"></div>
                    <ModeToggle />
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline"><MdKeyboardCommandKey /></Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-red-700">
                            <DialogHeader className="flex flex-row items-center">
                                <CiSearch className="mt-[.6rem]" />
                                <input className="bg-transparent outline-none p-2" type="text" placeholder="search" />
                            </DialogHeader>
                            <hr />
                            <div className="grid py-1">
                                <div className="grid items-center">
                                    <span className="text-sm text-gray-500">Account</span>
                                    <div className="flex items-center gap-2 hover:bg-gray-500 p-[.4rem] rounded mb-2">
                                        <PiSignInBold className="text-xl" />
                                        <span>Sign In</span>
                                    </div>
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
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </footer>
    );
};
export default Navbar;
