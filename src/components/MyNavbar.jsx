import {useEffect} from "react";
import {MdMenu} from "react-icons/md";

function MyNavbar({isMenuOpen, setIsMenuOpen}) {
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }, [isMenuOpen]);
    return (
        <nav
            className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)]
            backdrop-blur-2xl px-1 border-b border-white/10 shadow-lg ">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center font-mono h-16">
                    <a
                        href="#home"
                        className="font-mono text-xl font-bold text-gray-600
                        hover:text-amber-500 transition-colors duration-300"
                    >
                        Serkan Yılmaz
                    </a>

                    {!isMenuOpen && (
                        <div
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono
                            text-gray-600 hover:text-amber-500 transition-colors"
                        >
                            <MdMenu/>
                        </div>
                    )}

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-gray-600 font-medium text-base hover:text-amber-500
                            hover:text-lg transition-all duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-600 font-medium text-base hover:text-amber-500
                            hover:text-lg transition-all duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-600 font-medium text-base hover:text-amber-500
                            hover:text-lg transition-all duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 font-medium text-base hover:text-amber-500
                            hover:text-lg transition-all duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar;