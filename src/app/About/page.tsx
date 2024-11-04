import React from 'react';

export default function About() {
  return (
    <div>
      <section className="container mx-auto p-6" id="About">
        <h1 className="text-5xl font-bold text-center my-6">About Me</h1>
        <h3 className="text-2xl leading-relaxed text-center my-4 font-bold">
          Let me share a bit about my journey:
        </h3>
        <p className="mt-4 text-lg text-gray-350 mx-auto max-w-5xl">
          Hey there! I&apos;m Ali Raza, an 18-year-old with an insatiable passion
          for web development, AI, and the fascinating world of chatbots. Let
          me take you on a brief journey through my experiences.
        </p>
        <p className="mt-4 text-lg text-gray-350 mx-auto max-w-4xl">
          My academic journey began at St. Lawrence’s High School, where I completed my
          matriculation. I then continued my educational pursuit at the
          esteemed Government College of Commerce and Economic for my
          intermediate studies. Fuelled by my profound love for technology, I
          embarked on a quest to explore various programming languages and
          tools. Presently, my skill set includes:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-350 mx-auto max-w-4xl mt-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>Currently delving into TypeScript</li>
          <li>Proficient in Tailwind CSS</li>
          <li>JavaScript enthusiast</li>
          <li>Comfortable with MongoDB</li>
          <li>Well-versed in Node.js</li>
        </ul>
        <p className="mt-4 text-lg text-gray-350 mx-auto max-w-4xl">
          My expertise lies in crafting robust web applications using the MERN
          stack, always with a keen eye on enhancing user experience. But
          that&apos;s not all – I&apos;m also immersing myself in the dynamic realms of
          AI and chatbot development, eager to unravel their endless
          possibilities.
        </p>
        <p className="mt-4 text-lg text-gray-350 mx-auto max-w-4xl">
          If you&apos;re as passionate about these fields as I am, don&apos;t hesitate
          to connect! I&apos;m always on the lookout for exciting collaborations
          and projects that push the boundaries of innovation. Let&apos;s create
          something extraordinary together! 🚀
        </p>
        <div className="flex justify-center mt-8">
          <a
            className="flex gap-2 items-center font-semibold underline text-2xl"
            href="Images/Resume.jpg"
            download="Resume"
          >
            Download Resume
            <span className="bg-sky-800 text-white p-2 rounded-full hover:opacity-80 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition -rotate-45 group-hover:rotate-0"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12h14"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
