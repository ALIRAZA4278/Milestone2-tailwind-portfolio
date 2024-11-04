import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="flex flex-col mt-28 md:mt-0 md:flex-row justify-center gap-10 px-4 md:px-8 h-[80vh] mix-[700px]:h-[100%] items-center mx-[10vw]"
      >
        {/* Image */}
        <Image
          src="/Pic.png"
          alt="Ali Raza"
          width={700}
          height={400}
          className="w-[220px] h-[212px] mt-50 md:mt-0 rounded-full shadow-lg shadow-blue-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer
            sm:w-[200px] sm:h-[200px]
            md:w-[700px] md:h-[400px]
            xs:w-[250px] xs:h-[250px]"
        />

        {/* Text Section */}
        <div className="text-center md:text-left px-4 md:px-0" id="text-section">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold max-w-full">
            Hi, It&apos;s <span className="text-blue-600">Ali Raza</span>
          </h1>
          <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold mt-4 max-w-full">
            I&apos;m a <span className="relative inline-block typing-text"></span>
          </h3>
          <p className="text-base sm:text-lg md:text-sm lg:text-lg font-semibold mt-4 max-w-full mx-auto md:mx-0">
            &quot;Ali Raza, a 19-year-old web and chatbot developer with a passion for crafting innovative digital solutions. With a strong foundation in programming languages like HTML, CSS &amp; JavaScript, I design and develop responsive websites and conversational chatbots that engage users and simplify interactions.&quot;
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            <a
              href="https://www.linkedin.com/in/ali-raza-4a5762282/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-200 hover:text-black transition duration-300"
            >
              <Image src="/Linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a
              href="https://github.com/ALIRAZA4278"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-200 hover:text-black transition duration-300"
            >
              <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a
              href="https://x.com/AliFaro45370063"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-200 hover:text-black transition duration-300"
            >
              <Image src="/twitter.svg" alt="Twitter" width={40} height={40} />
            </a>
            <a
              href="https://instagram.com/its_zyrox_x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
            >
              <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
            </a>
          </div>

          {/* Action Button */}
          <div className="flex flex-col md:flex-row mt-0 space-y-4 md:space-y-0 md:space-x-4 mx-auto">
            <a
              href="/Projects"
              className="bg-blue-800 text-white p-4 text-xl rounded-full hover:opacity-80 transition-opacity duration-300 text-center mt-4"
            >
              Explore Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

