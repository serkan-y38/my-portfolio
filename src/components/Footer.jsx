import {BsGithub, BsLinkedin, BsMedium} from "react-icons/bs";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-900 font-mono mt-20">
            <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col items-center justify-center gap-8">

                <p className="text-gray-500 font-bold tracking-wider">
                    Connect With Me
                </p>

                <div className="flex gap-5">
                    <a
                        href="https://medium.com/@srkan"
                        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-amber-500
                        text-amber-500 hover:bg-amber-500 hover:text-gray-900 hover:-translate-y-1 transition-all
                        duration-300 text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medium"
                    >
                        <BsMedium/>
                    </a>
                    <a
                        href=""
                        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-amber-500
                        text-amber-500 hover:bg-amber-500 hover:text-gray-900 hover:-translate-y-1 transition-all
                         duration-300 text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <BsLinkedin/>
                    </a>
                    <a
                        href="https://github.com/serkan-y38"
                        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-amber-500
                        text-amber-500 hover:bg-amber-500 hover:text-gray-900 hover:-translate-y-1 transition-all
                         duration-300 text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <BsGithub/>
                    </a>
                </div>
            </div>

            <div className="w-full bg-gray-950 py-5 border-t border-gray-800/50 text-center">
                <p className="text-gray-500 text-xs tracking-wider">
                    Copyright &copy; {currentYear}.
                </p>
            </div>
        </footer>
    );
}

export default Footer;