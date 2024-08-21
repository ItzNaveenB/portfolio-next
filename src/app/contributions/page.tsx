import React from "react";
import { SiImessage } from "react-icons/si";
import { FaMeta, FaBuildingColumns, FaGitlab } from "react-icons/fa6";
import { RiSpeedUpFill } from "react-icons/ri";

const Contributions = () => {
    return (
        <div className="md:mt-[-8rem] xl:mt-[-20rem] lg:mt-[-12rem]">
            <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contributions</h1>
            <p id="content" className="mt-2 md:mt-4 lg:mt-6 text-gray-500 text-base md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16">
                I started my open-source journey in 2019 and ever since I have been contributing to some of the biggest open-source organizations. Explore my impactful contributions as a community contributor to open-source projects, featuring some of my favorites.
            </p>
            </div>
            <hr className="mb-6 md:mb-8 lg:mb-8" />
            <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
            <div className="mb-8">
                <img className="w-full h-auto" src="https://shubham-kumar.com/images/contributions/cover.png" alt="custom_image" />
            </div>
            <div className="my-6 md:my-8 lg:my-12">
                <a className="text-xl md:text-2xl font-bold" href="#content">Chatwoot</a>
                <SiImessage className="text-blue-500 text-lg md:text-xl my-2 md:my-4" />
                <p className="my-2 md:my-4"><span className="font-bold">About:</span> Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc.</p>
                <a className="font-bold my-2 md:my-4" href="https://github.com/chatwoot/chatwoot">Repository: <span className="underline decoration-2">https://github.com/chatwoot/chatwoot</span></a>
                <p className="my-2 md:my-4"><span className="font-bold">Contribution Year:</span> 2023</p>
                <div className="flex flex-col md:flex-row justify-between font-semibold">
                    <span>Projects</span>
                    <span>Pull Requests (3 merged)</span>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col md:flex-row justify-between font-semibold">
                    <span>chatbot</span>
                    <span>3</span>
                </div>
            </div>

            <div className="my-6 md:my-8 lg:my-12">
                <a className="text-xl md:text-2xl font-bold" href="#content">Facebook</a>
                <FaMeta className="text-blue-500 text-lg md:text-xl my-2 md:my-4" />
                <p className="my-2 md:my-4"><span className="font-bold">About:</span> Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc.</p>
                <a className="font-bold my-2 md:my-4" href="https://github.com/chatwoot/chatwoot">Repository: <span className="underline decoration-2">https://github.com/facebook</span></a>
                <p className="my-2 md:my-4"><span className="font-bold">Contribution Year:</span> 2020</p>
                <div className="flex flex-col md:flex-row justify-between font-semibold">
                    <span>Projects</span>
                    <span>Pull Requests (2 merged)</span>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col md:flex-row justify-between font-semibold underline decoration-2">
                    <span>Docusaurus</span>
                    <span>2</span>
                </div>
            </div>

            <div className="my-6 md:my-8 lg:my-12">
                <a className="text-xl md:text-2xl font-bold" href="#content">Internet Archive</a>
                <FaBuildingColumns className="text-lg md:text-xl my-2 md:my-4" />
                <p className="my-2 md:my-4"><span className="font-bold">About:</span> The Internet Archive is &quot;the library of the Internet&quot;, and a big supporter of Free Software.</p>
                <a className="font-bold my-2 md:my-4" href="https://github.com/chatwoot/chatwoot">Repository: <span className="underline decoration-2">https://github.com/internetarchive</span></a>
                <p className="my-2 md:my-4"><span className="font-bold">Contribution Year:</span> 2019-2021</p>
                <div className="flex flex-col md:flex-row justify-between font-semibold">
                    <span>Projects</span>
                    <span>Pull Requests (13 merged)</span>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col md:flex-row justify-between font-semibold underline decoration-2">
                    <span>openlibrary</span>
                    <span>8</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between font-semibold underline decoration-2 my-2">
                    <span>bookreader</span>
                    <span>5</span>
                </div>
            </div>

            <div className="my-6 md:my-8 lg:my-12">
                <a className="text-xl md:text-2xl font-bold" href="#content">GitLab</a>
                <FaGitlab className="text-lg md:text-xl my-2 md:my-4" />
                <p className="my-2 md:my-4"><span className="font-bold">About:</span> GitLab is an open source end-to-end software development platform with built-in version control, issue tracking, code review, CI/CD, and more.</p>
                <a className="font-bold my-2 md:my-4" href="https://github.com/chatwoot/chatwoot">Repository: <span className="underline decoration-2">https://gitlab.com/gitlab-org/gitlab</span></a>
                <p className="my-2 md:my-4"><span className="font-bold">Contribution Year:</span> 2021-2024</p>
                <div className="flex flex-col md:flex-row justify-between font-semibold">
                    <span>Projects</span>
                    <span>Pull Requests (54 merged)</span>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col md:flex-row justify-between font-semibold underline decoration-2">
                    <span>gitlab</span>
                    <span>53</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between font-semibold underline decoration-2 my-2">
                    <span>gitlay</span>
                    <span>1</span>
                </div>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-12 mb-12">
                <a className="text-xl md:text-2xl font-bold" href="#content">Mattermost</a>
                <RiSpeedUpFill className="text-xl md:text-2xl my-2 md:my-4" />
                <p className="my-2 md:my-4"><span className="font-bold">About:</span> Mattermost is a secure collaboration platform for connecting your teams, tools, and processes to accelerate mission-critical work.</p>
                <a className="font-bold my-2 md:my-4" href="https://github.com/chatwoot/chatwoot">Repository: <span className="underline decoration-2">https://github.com/mattermost</span></a>
                <p className="my-2 md:my-4"><span className="font-bold">Contribution Year:</span> 2022</p>
                <div className="flex flex-col md:flex-row justify-between font-semibold">
                    <span>Projects</span>
                    <span>Pull Requests (2 merged)</span>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col md:flex-row justify-between font-semibold underline decoration-2">
                    <span>mattermost-operator</span>
                    <span>2</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contributions;
