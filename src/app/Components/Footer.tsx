import Link from 'next/link';
import Image from 'next/image'; // Import Image for optimization
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 p-4 -m-4">
      <section className="container w-[90%] mx-auto my-12">
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <p className="text-gray-500 border-b border-gray-500 py-2">01</p>
            <h3 className="text-xl my-6 font-bold text-gray-300 uppercase tracking-widest">Front-End Development</h3>
            <p className="text-gray-300 text-md">User Interface</p>
            <ul className="my-6 space-y-3 text-sm">
              <li><Link href="#" className="hover:underline">HTML</Link></li>
              <li><Link href="#" className="hover:underline">CSS</Link></li>
              <li><Link href="#" className="hover:underline">Tailwind CSS</Link></li>
              <li><Link href="#" className="hover:underline">JavaScript</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-gray-500 border-b border-gray-500 py-2">02</p>
            <h3 className="text-xl my-6 font-bold text-gray-300 uppercase tracking-widest">Back-End Development</h3>
            <p className="text-gray-300 text-xl">Data Handling</p>
            <ul className="my-6 space-y-3 text-md">
              <li><Link href="#" className="hover:underline">Node.js</Link></li>
              <li><Link href="#" className="hover:underline">MongoDB</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-gray-500 border-b border-gray-500 py-2">03</p>
            <h3 className="text-xl my-6 font-bold text-gray-300 uppercase tracking-widest">Full-Stack Development</h3>
            <p className="text-gray-300 text-md">MERN Stack</p>
            <ul className="my-6 space-y-3 text-sm">
              <li><Link href="#" className="hover:underline">MongoDB</Link></li>
              <li><Link href="#" className="hover:underline">Express.js</Link></li>
              <li><Link href="#" className="hover:underline">React.js</Link></li>
              <li><Link href="#" className="hover:underline">Node.js</Link></li>
            </ul>
          </div>
        </div>

        <small className="text-gray-300 text-md mt-12 text-center block">
          Ideal for websites, web apps, and brand design projects, custom code solutions, blogs, and app dashboard design.
        </small>

        <p className="text-gray-500 border-b border-gray-500 py-2 uppercase mt-15 mb-4 text-lg font-bold tracking-widest">Social Media</p>
        <ul className="flex gap-4">
          <li>
            <Link href="https://twitter.com/AliFaro45370063" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition opacity-60 text-xl">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/ali.farooq.1447342" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition opacity-60 text-xl">Facebook</Link>
          </li>
          <li>
            <Link href="https://github.com/ALiraza4278" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition opacity-60 text-xl">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/ali-farooq-4a5762282/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition opacity-60 text-xl">LinkedIn</Link>
          </li>
        </ul>

        <div className="flex gap-1 my-10">
          <Image className="w-20 h-20 rounded-full mr-3" src="/Images/myPic.png" alt="My Picture" width={80} height={80} />
          <Link className="bg-blue-800 text-white p-4 text-xl rounded-full justify-center items-center hover:opacity-80" href="./Projects">Explore Work</Link>
          <Link className="bg-sky-800 text-white p-4 text-xl rounded-full hover:opacity-80 group" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="transition -rotate-45 group-hover:-rotate-0" width="24" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </Link>
        </div>

        <div>
          <small className="text-gray-500 border-b border-gray-500 py-2 uppercase mt-15 mb-4 text-md">
            Don't know if it fits your needs or not? <Link className="underline text-blue-500" href="#">Let me help!</Link>
          </small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
