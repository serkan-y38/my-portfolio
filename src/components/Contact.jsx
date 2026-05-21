import ScrollAnimation from "./ScrollAnimation.jsx";

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen font-mono flex items-center justify-center py-20"
        >
            <ScrollAnimation>
                <div className="max-w-3xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-semibold pb-8 text-center ">
                        Contact Me
                    </h2>

                    <div className="p-6 mb-0 transition-all">
                        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
                            Whether you have a question, a project idea feel free to reach out!
                        </p>
                    </div>

                </div>
            </ScrollAnimation>
        </section>
    );
}

export default Contact;