import {FiDownload} from "react-icons/fi";
import profileImg from "../assets/image.png";
import resume from "../assets/serkan_yilmaz.pdf";

function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 "
        >
            <div className="text-center z-10 px-4">
                <img
                    className="w-[300px] border-2 border-transparent mt-20 shadow-xl shadow-gray-300 lg:m-0
                    lg:max-w-[300px] object-cover object-bottom hover:-translate-y-2
                    hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)] transition-all duration-500 rounded-2xl"
                    src={profileImg}
                    alt="Profile Image"
                />
            </div>
            <div className="text-center font-mono z-10 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-[600px] font-bold mb-4 px-1
                text-gray-800 leading-tight">
                    I am <br className="hidden lg:block"/>
                    <span
                        className="bg-gradient-to-r from-amber-500 via-yellow-500
                         to-amber-600 bg-clip-text text-transparent">
                        Serkan Yılmaz
                    </span>
                </h1>
                <p className="text-gray-600 font-medium text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    I am a mobile developer who loves creating interactive, scalable mobile applications.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                    <a
                        className="w-full sm:w-auto flex items-center justify-center bg-gradient-to-r
                        from-amber-500 to-yellow-500 text-gray-900 py-3 px-8
                        rounded-xl hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)]
                        font-semibold transition-all duration-300"
                        href="#contact"
                    >
                        Contact Me
                    </a>
                    <a
                        className="w-full sm:w-auto flex items-center justify-center border-0
                        border-gray-800 text-gray-800 py-3 px-8
                        rounded-xl hover:-translate-y-1 hover:bg-gray-800 hover:text-amber-400 hover:shadow-xl
                        font-semibold transition-all duration-300 group"
                        href={resume}
                        download
                    >
                        Resume
                        <span className="ml-3 text-xl group-hover:animate-bounce">
                          <FiDownload/>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;