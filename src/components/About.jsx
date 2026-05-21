import ScrollAnimation from "./ScrollAnimation.jsx";

function About() {
    const technologies = [
        "Kotlin",
        "Swift",
        "Dart",
        "Java",
        "C",
        "C#",
        "Python",
        "Flutter",
        "Spring Boot",
        "Git",
        "SQL",
        "Firebase",
        "Supabase",
        "Machine Learning",
    ];

    return (
        <section
            id="about"
            className="min-h-screen font-mono flex items-center justify-center py-20"
        >
            <ScrollAnimation>
                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="max-w-4xl text-4xl font-semibold pb-8 bg-clip-text text-center">
                        About Me
                    </h2>

                    <div className="pb-16 mb-0 transition-all">
                        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto text-center">
                            Hi, I'm Serkan - a passionate software developer currently completing my Computer
                            Engineering degree. I specialize in building modern, scalable mobile applications using
                            Flutter and Kotlin, with a strong emphasis on Clean Architecture and robust state
                            management. I also have a deep interest in low-level computing, compiler theory, and
                            on-device AI.
                        </p>
                    </div>

                    <h2 className="max-w-4xl text-4xl font-semibold mb-4 bg-clip-text text-center pb-8">
                        Technologies
                    </h2>
                    <div className="flex justify-center flex-wrap gap-2 pb-16">
                        {technologies.map((tech, index) => (
                            <span
                                className="bg-amber-500/10 text-amber-600 font-medium py-1 px-3 rounded-full text-balance
                                    hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(245,158,11,0.2)] transition-all"
                                key={index}
                            >
                                     {tech}
                                 </span>
                        ))}
                    </div>

                    <h2 className="max-w-4xl text-4xl font-semibold mb-4 bg-clip-text text-center pb-8">
                        Skills & Expertise
                    </h2>
                    <div className="text-lg text-gray-600 pb-16">
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Native app development (Android).
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Cross-platform development using Flutter.
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            UI development using Jetpack Compose and XML with Material 3.
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Clean Architecture, MVVM, and Bloc / Cubit.
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Low-level programming, compiler theory, and assembly.
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Database management (SQL, Firebase, Supabase).
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Experience in building backend APIs with Spring Boot.
                        </p>
                        <p className="mb-4 max-w-lg mx-auto text-center">
                            Networking Knowledge (Cisco Packet Tracer)
                        </p>
                        <p className="mb-0 max-w-lg mx-auto text-center">
                            Machine Learning Knowledge.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}

export default About;