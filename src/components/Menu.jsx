import {RxCross2} from "react-icons/rx";

function Menu({isMenuOpen, setIsMenuOpen}) {
    return (
        <div
            className={`fixed w-full top-0 left-0 z-50 flex flex-col items-center 
            justify-center transition-all duration-500 ease-in-out backdrop-blur-2xl bg-gray-50/95 ${
                isMenuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
            }`}
        >
            <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-7 text-3xl text-gray-600 hover:text-amber-500 transition-colors
                focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                <RxCross2/>
            </button>

            <div className="flex flex-col items-center gap-8 font-mono">
                <a
                    onClick={() => setIsMenuOpen(false)}
                    href="#home"
                    className={`text-xl font-semibold text-gray-700 hover:text-amber-500 transform transition-all
                     duration-300 ${
                        isMenuOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"
                    }`}
                >
                    Home
                </a>
                <a
                    onClick={() => setIsMenuOpen(false)}
                    href="#about"
                    className={`text-xl font-semibold text-gray-700 hover:text-amber-500 transform transition-all
                     duration-300 ${
                        isMenuOpen ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-8"
                    }`}
                >
                    About
                </a>
                <a
                    onClick={() => setIsMenuOpen(false)}
                    href="#projects"
                    className={`text-xl font-semibold text-gray-700 hover:text-amber-500 transform transition-all
                     duration-300 ${
                        isMenuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
                    }`}
                >
                    Projects
                </a>
                <a
                    onClick={() => setIsMenuOpen(false)}
                    href="#contact"
                    className={`text-xl font-semibold text-gray-700 hover:text-amber-500 transform transition-all
                     duration-300 ${
                        isMenuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"
                    }`}
                >
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Menu;