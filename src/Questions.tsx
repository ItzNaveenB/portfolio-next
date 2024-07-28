import React from 'react'

const Questions = () => {
  return (
    <div className="flex flex-col gap-6 rounded-[11px] p-4 lg:p-6">
      <div className="flex gap-12 max-md:flex-col">
        <div className="relative size-64 max-md:mx-auto">
          <div className="overflow-hidden absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-[20px]">
            <img
              alt="Me sit in front of my desk and coding"
              loading="lazy"
              width="3975"
              height="3975"
              decoding="async"
              data-nimg="1"
              className=""
              style={{
                color: "transparent",
                transition: "filter 700ms ease",
                transform: "150ms ease",
              }}
              src="/me.webp"
            />
          </div>
          <div
            id="rails"
            className="absolute bottom-12 left-14 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            style={{ opacity: "0.4" }}
          >
            Ruby on Rails
          </div>
          <div
            id="ruby"
            className="absolute left-2 top-20 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            style={{ opacity: "0.4" }}
          >
            Ruby
          </div>
          <div
            id="career"
            className="absolute bottom-20 right-1 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            style={{ opacity: "0.4" }}
          >
            Career
          </div>
          <div
            id="open-source"
            className="absolute right-8 top-10 rounded-3xl border bg-gradient-to-b from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            style={{ opacity: "0.4" }}
          >
            Open Source
          </div>
          <div
            id="pointer"
            className="absolute animate-pointer-animation"
            style={{left: "170px", top: "60px"}}
          >
            <svg
              width="16.8"
              height="18.2"
              viewBox="0 0 12 13"
              className="fill-red-500"
              stroke="white"
              stroke-width="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
              ></path>
            </svg>
            <span className="relative left-4 rounded-3xl bg-red-500 px-2 py-0.5 text-xs text-white">
              Shubham
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4">
          <p className="mb-2 bg-gradient-to-r from-black to-black/70 bg-clip-text font-title text-3xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400">
            Any questions about open source?
          </p>
          <p className="text-zinc-800 dark:text-zinc-300">
            Feel free to reach out to me!
            <span className="text-muted-foreground">
              I&apos;m available for collaboration.
            </span>
          </p>
          <div className="my-8">
            <a
              href="mailto:hello@shubham-kumar.com"
              className="rounded-full bg-email-button px-4 py-2 text-sm text-white"
            >
              hello@shubham-kumar.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
