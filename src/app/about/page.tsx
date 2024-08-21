import Link from "next/link";
import React from "react";

const AboutPage = () => {
    return (
        <div className="md:mt-[-8rem] xl:mt-[-20rem] lg:mt-[-12rem]">
            <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
            <h1 className="text-3xl md:text-5xl font-bold">About</h1>
            <p className="mt-4 text-gray-500 text-base md:text-lg mb-8 md:mb-16">👋 Hi there! I am Shubham. A backend engineer and an open sourcerer.</p>
            </div>
            <hr className="mb-8" />
            <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
            <div className="mt-8 md:mt-16">
                <p className="mb-6 md:mb-8">I'm a Backend Engineer based in Berlin, Germany, having relocated here in 2023. Originally from India, I completed my bachelor's degree in computer science & engineering in 2022. My journey into the world of software engineering began in 2019, driven by a passion for contributing to open-source projects.</p>
                <p className="mb-6 md:mb-8">
                    I've had the privilege of working with prestigious organizations like <a className="font-bold text-blue-600 hover:underline" href="https://www.mozilla.org">Mozilla</a> and <a className="font-bold text-blue-600 hover:underline" href="https://gitlab.com">GitLab</a> through the <a className="font-bold text-blue-600 hover:underline" href="https://summerofcode.withgoogle.com">Google Summer of Code</a> programs. At Mozilla, I participated in the 2020 edition, and the following year, I joined GitLab, where I continued to expand my skills and knowledge.
                </p>
                <p className="mb-4 md:mb-6">Currently, I am a Backend Engineer at GitLab in the Tenant Scale team.</p>
                <p className="mb-4 md:mb-6">Before joining GitLab, my open-source contributions as a community contributor:</p>
                <ol className="flex flex-col gap-4 ml-5 md:ml-8 list-disc">
                    <li>January 2021: Made my first contribution to GitLab.</li>
                    <li>Google Summer of Code 2021: Selected under the Geo Team at GitLab.</li>
                    <li>By December 2023: Over 25 pull requests merged.</li>
                    <li>March 2024: Nominated for MVP (Most Valuable Person) for the 16.10 release.</li>
                    <li>June 2024: 50th pull request merged.</li>
                    <li>June 2024: Nominated and awarded MVP for the 17.1 release.</li>
                </ol>
                <div className="flex flex-col mt-8 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-2xl font-bold">Social links</h2>
                    <ul className="list-disc pl-4 ml-5 flex flex-col leading-8">
                        <li>
                            <Link className="underline font-semibold text-blue-600 hover:underline" href="/github">Github</Link>
                        </li>
                        <li>
                            <Link className="underline font-semibold text-blue-600 hover:underline" href="/gitlab">GitLab</Link>
                        </li>
                        <li>
                            <Link className="underline font-semibold text-blue-600 hover:underline" href="/twitter">X</Link>
                        </li>
                        <li>
                            <Link className="underline font-semibold text-blue-600 hover:underline" href="/youtube">YouTube</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutPage;
