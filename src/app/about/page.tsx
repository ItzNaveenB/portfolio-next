import Link from "next/link";
import React from "react";

const AboutPage = ()=>{
    return(
        <div className="mx-[7rem] my-[8rem]">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="mt-4 text-gray-500 text-base mb-8">👋 Hi there! I am Shubham. A backend engineer and an open sourcerer.</p>
        <hr></hr>
        <div className="mt-16">
            <p className="mb-8">I&apos;m a Backend Engineer based in Berlin, Germany, having relocated here in 2023. Originally from India, I completed my bachelor&apos;s degree in computer science & engineering in 2022. My journey into the world of software engineering began in 2019, driven by a passion for contributing to open-source projects.</p>
            <p className="mb-8">
            I&apos;ve had the privilege of working with prestigious organizations like <a className="font-bold" href="mozila.com">Mozila</a> and <a className="font-bold"href="gitlab.com">Gitlab</a> through the<a className="font-bold"href="Google.com"> Google Summer of Code</a>programs. At Mozilla, I participated in the 2020 edition, and the following year, I joined GitLab, where I continued to expand my skills and knowledge.
            </p>
            <p className="mb-4">Currently, I am a Backend Engineer at GitLab in the Tenant Scale team.</p>
            <p className="mb-4">Before joining GitLab, my open-source contributions as a community contributor:</p>
            <ol className="flex gap-6 flex-col ml-8 list-disc">
                <li>January 2021: Made my first contribution to GitLab.</li>
                <li>Google Summer of Code 2021: Selected under the Geo Team at GitLab.</li>
                <li>By December 2023: Over 25 pull requests merged.</li>
                <li>March 2024: Nominated for MVP (Most Valuable Person) for the 16.10 release.</li>
                <li>June 2024: 50th pull request merged.</li>
                <li>
                    June 2024: Nominated and awarded MVP for the 17.1 release.
                </li>
            </ol>
            <div className="flex flex-col mt-8">
                <h1 className="text-2xl font-bold">Social links</h1>
                <ul className="flex flex-col leading-6">
                    <Link className="underline font-semibold" href="/github">Github</Link>
                    <Link className="underline font-semibold" href="/gitlab">Gitlab</Link>
                    <Link className="underline font-semibold" href="/twitter">X</Link>
                    <Link className="underline font-semibold" href="/youtube">Youtube</Link>
                    
                </ul>
            </div>
        </div>
        </div>
    )
}
export default AboutPage;