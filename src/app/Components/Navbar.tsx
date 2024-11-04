import Link from 'next/link';

function Navbar() {
    return (
        <div className="px-5 py-5 mt-0 sm:space-y-40 space-y-40 text-gray-300 scroll-smooth overflow-x-hidden">
            <nav className="flex flex-col md:flex-row items-center gap-4 container mx-auto">
                <p className="text-4xl sm:text-4xl text-white font-extrabold">
                    ALI <span className="text-blue-700">RAZA</span>
                </p>
                <ul className="flex border rounded-full md:ml-auto">
                    <li className="sm:px-6 sm:py-4 sm:text-xl px-3 py-2 hover:border rounded-full text-center">
                        <Link href="/" aria-label="Home">Home</Link>
                    </li>
                    <li className="sm:px-6 sm:py-4 sm:text-xl px-3 py-2 hover:border rounded-full text-center">
                        <Link href="/About" aria-label="About">About</Link>
                    </li>
                    <li className="sm:px-6 sm:py-4 sm:text-xl px-3 py-2 hover:border rounded-full text-center">
                        <Link href="/Skills" aria-label="Skills">Skills</Link>
                    </li>
                    <li className="sm:px-6 sm:py-4 sm:text-xl px-3 py-2 hover:border rounded-full text-center">
                        <Link href="/Projects" aria-label="Projects">Projects</Link>
                    </li>
                    <li className="sm:px-6 sm:py-4 sm:text-xl px-3 py-2 hover:border rounded-full text-center">
                        <Link href="/Contact" aria-label="Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
