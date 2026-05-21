import { useEffect, useState } from "react";

function WelcomeScreenAnimation({ onComplete }) {
    const [text, setText] = useState("");
    const welcomeText = "SYN - SYN ACK - ACK";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(welcomeText.substring(0, index));
            index++;

            if (index > welcomeText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[rgba(10,10,10,0.8)] text-gray-100 flex flex-col items-center justify-center gap-5">
            <div className="mb-4 text-2xl font-mono font-semibold">
                {text}
                <span className="animate-blink ml-1 text-2xl font-bold"> | </span>
            </div>
        </div>
    );
}

export default WelcomeScreenAnimation;