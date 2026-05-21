import MyNavbar from "./components/MyNavbar.jsx";
import {useState} from "react";
import Menu from "./components/Menu.jsx";
import WelcomeAnimation from "./components/WelcomeAnimation.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ScrollAnimation from "./components/ScrollAnimation.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [isAnimationShowing, setIsAnimationShowing] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative text-gray-800 selection:bg-amber-300 selection:text-gray-900">

            <div className="fixed -z-10 min-h-screen h-full w-full bg-gray-50
                bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),l
                inear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="fixed -z-10 min-h-screen h-full w-full
                    bg-[radial-gradient(circle_350px_at_50%_200px,rgba(245,158,11,0.30),transparent)]">
                </div>
            </div>

            {!isAnimationShowing && (
                <WelcomeAnimation onComplete={() => setIsAnimationShowing(true)}/>
            )}

            <MyNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                <main className="overflow-x-hidden">
                    <ScrollAnimation>
                        <Home/>
                    </ScrollAnimation>
                    <About/>
                    <Projects/>
                    <Contact/>
                </main>
            <Footer/>
        </div>
    );
}

export default App;