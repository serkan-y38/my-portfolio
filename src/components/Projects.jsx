import {useState} from "react";
import ScrollAnimation from "./ScrollAnimation.jsx";

function Projects() {
    const [projects] = useState([
        {
            name: "Scalable Full-Stack Flutter App",
            brief: "A robust cross-platform application featuring in-app purchases and real-time " +
                "backend integration. Built with a highly decoupled codebase utilizing industry-standard architectural " +
                "patterns for state management and dependency injection.",
            technologies: [
                "Flutter",
                "Clean Architecture",
                "Bloc",
                "Cubit",
                "Provider",
                "Supabase",
                "RevenueCat (IAP)",
                "get_it",
                "Firebase"
            ]
        },
        {
            name: "Augmented Reality App",
            brief: "A social media-style augmented reality (AR) application that allows users to create accounts, " +
                "customize profiles, and upload or interact with 3D models.",
            technologies: [
                "Kotlin",
                "Clean Architecture",
                "MVVM",
                "Firebase",
                "Room Database",
                "Paging 3",
                "Coroutines",
                "Dagger Hilt",
                "Jetpack Compose",
                "AR SceneView"
            ]
        },
        {
            name: "SYLMZ Compiler",
            brief: "A custom C-based compiler project that parses source code to generate " +
                "raw x86_64 NASM Assembly for Linux environments.",
            technologies: [
                "C",
                "Compiler Theory",
                "NASM Assembly",
                "x86_64",
                "Linux",
                "Low-Level"
            ]
        },
        {
            name: "Graduation Project",
            brief: "A smartphone-based Advanced Driver Assistance System and vehicle management platform " +
                "featuring real-time lane tracking, traffic sign detection, and ESP32 hardware integration.",
            technologies: [
                "OpenCV",
                "TensorFlow Lite",
                "ESP32",
                "BLE",
                "Clean Architecture",
                "Machine Learning",
                "Kotlin",
                "Supabase",
                "MVVM",
                "Coroutines",
                "Dagger Hilt",
                "Jetpack Compose",
            ]
        },
        {
            name: "Android Bluetooth Chat App",
            brief: "An Android application that enables offline, " +
                "real-time text messaging between nearby devices utilizing Bluetooth communication.",
            technologies: [
                "Kotlin",
                "Android SDK",
                "Bluetooth API",
                "Wireless Communication",
                "Mobile UI",
                "Coroutines",
                "Dagger Hilt",
                "Jetpack Compose",
            ]
        },
        {
            name: "Machine Learning Projects",
            brief: "A comprehensive repository of applied machine learning projects encompassing data preprocessing, " +
                "feature engineering, and predictive modeling using various regression, classification, and unsupervised learning algorithms.",
            technologies: [
                "Machine Learning",
                "Data Preprocessing",
                "Regression & Classification",
                "Unsupervised Learning",
                "Data Visualization",
                "Predictive Modeling",
                "Scikit-Learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
            ]
        },
        {
            name: "Weather App (Native & Flutter)",
            brief: "A weather application fetching real-time data via API, developed in two distinct versions: " +
                "natively for Android using Kotlin and cross-platform using Flutter.",
            technologies: [
                "Kotlin",
                "Flutter",
                "MVVM & Clean Architecture",
                "Provider / ViewModel",
                "Retrofit / Dio",
                "Room / Floor DB",
                "Dagger Hilt / get_it",
                "Coroutines"
            ]
        },
        {
            name: "Stack Overflow Paging App",
            brief: "An Android application that fetches and displays questions from Stack Overflow, " +
                "implementing API pagination and local caching using Paging 3.",
            technologies: [
                "Kotlin",
                "Jetpack Compose",
                "Clean Architecture",
                "Paging 3",
                "Room DB",
                "Retrofit",
                "Dagger Hilt",
                "Coil"
            ]
        },
        {
            name: "Rick and Morty App",
            brief: "A Flutter application that consumes the Rick and Morty API to display characters and episodes," +
                " built with Clean Architecture and Bloc for state management.",
            technologies: [
                "Flutter",
                "Clean Architecture",
                "Bloc",
                "Retrofit / Dio",
                "Floor DB",
                "get_it",
                "Shared Preferences"
            ]
        },
        {
            name: "Network & Routing Projects",
            brief: "A comprehensive repository showcasing hands-on knowledge of computer networking, " +
                "focusing on infrastructure design, routing protocols, subnetting, and network security configurations.",
            technologies: [
                "Networking",
                "Routing & Switching",
                "Subnetting",
                "Network Protocols",
                "Cisco Packet Tracer"
            ]
        },
        {
            name: "Screen Recorder App",
            brief: "A native Android application designed to capture and record the device's screen " +
                "efficiently using Android's MediaProjection APIs.",
            technologies: [
                "Kotlin",
                "Android SDK",
                "MediaProjection API",
                "Coroutines",
                "Local Storage"
            ]
        },
        {
            name: "Notification Edge Lighting",
            brief: "An aesthetic Android application that triggers custom edge lighting " +
                "animations and visual effects for incoming notifications.",
            technologies: [
                "Kotlin",
                "Jetpack Compose",
                "NotificationListenerService",
                "Coroutines"
            ]
        },
        {
            name: "Computer Vision Projects",
            brief: "A collection of image processing projects utilizing OpenCV, featuring real-time applications " +
                "such as vehicle counting, facial detection and recognition, and license plate detection.",
            technologies: [
                "OpenCV",
                "Python",
                "Computer Vision",
                "Object Detection",
                "Image Processing"
            ]
        },
        {
            name: "Motivation & Notification App",
            brief: "A cross-platform Flutter application designed to deliver daily motivational " +
                "quotes and reminders to users through scheduled push notifications and background services.",
            technologies: [
                "Flutter",
                "Dart",
                "Push Notifications",
                "Background Tasks",
                "Cross-Platform"
            ]
        },
        {
            name: "Continuous Goals App",
            brief: "A native Android application designed to help users track daily habits, manage routines," +
                " and maintain consistency in achieving personal goals.",
            technologies: [
                "Kotlin",
                "Jetpack Compose",
                "MVVM",
                "Room DB",
                "Coroutines",
                "Dagger Hilt",
                "Clean Architecture",
            ]
        },
        {
            name: "Calm Study App",
            brief: "A productivity and planning application published on the Play Store, " +
                "featuring pomodoro timers, bilingual support, and image-to-text extraction using ML Kit.",
            technologies: [
                "Kotlin",
                "MVVM",
                "Room DB",
                "Paging 3",
                "Dagger Hilt",
                "ML Kit",
                "Database Encryption"
            ]
        },
        {
            name: "Notes App",
            brief: "A structured cross-platform note-taking application implementing user authentication, " +
                "cloud storage, and fundamental CRUD operations.",
            technologies: [
                "Flutter",
                "Clean Architecture",
                "Bloc",
                "Firebase Auth / Firestore",
                "get_it",
                "Shared Preferences"
            ]
        },
        {
            name: "Spring Boot Todo API",
            brief: "A backend RESTful API built with Spring Boot and MySQL, featuring secure user authentication, " +
                "pagination, and comprehensive CRUD operations. Fully documented endpoints.",
            technologies: [
                "Spring Boot",
                "Java",
                "MySQL",
                "REST API",
                "Authentication",
                "Backend Development"
            ]
        },
        {
            name: "Android ML Kit",
            brief: "A pair of native Android applications showcasing on-device machine learning capabilities, " +
                "featuring real-time visual landmark recognition and sentiment analysis.",
            technologies: [
                "Android SDK",
                "ML Kit",
                "Tensorflow",
                "Java / Kotlin"
            ]
        },
        {
            name: "QR Code Scanner (Native & Flutter)",
            brief: "A versatile application for generating and scanning QR codes seamlessly, developed in two " +
                "distinct versions: natively for Android and cross-platform using Flutter.",
            technologies: [
                "Flutter",
                "Java",
                "Android SDK",
                "Camera API",
                "Cross-Platform"
            ]
        },
        {
            name: "BLE ESP32 LED Controller",
            brief: "A native Android IoT application that utilizes Bluetooth Low Energy (BLE) to establish " +
                "real-time communication with an ESP32 microcontroller for hardware control.",
            technologies: [
                "Kotlin",
                "C++",
                "Arduino",
                "Android SDK",
                "BLE API",
                "ESP32",
                "IoT / Hardware",
                "Clean Architecture",
                "Dagger Hilt",
                "Jetpack Compose",
            ]
        },
        {
            name: "Wear OS Mini Game",
            brief: "An interactive mini-game specifically designed and optimized for Android smartwatches " +
                "running Wear OS, featuring a wearable-friendly user interface and controls.",
            technologies: [
                "Kotlin",
                "Jetpack Compose",
                "Wear OS API",
                "Smartwatch UI",
                "Game Development"
            ]
        },
        {
            name: "Django Todo Web Application",
            brief: "A web application featuring a task management, " +
                "built using the Python Django framework.",
            technologies: [
                "Python",
                "Django",
                "Web Development",
                "MVT Architecture",
                "Database Management"
            ]
        },
        {
            name: "Java Library Management App",
            brief: "A desktop application designed to manage library operations," +
                " implementing core Object-Oriented Programming (OOP) principles in Java.",
            technologies: [
                "Java",
                "OOP (Object-Oriented)",
                "Software Design"
            ]
        },
    ]);

    return (
        <section
            id="projects"
            className="w-full font-mono py-20 bg-gray-50/50"
        >
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-4xl font-semibold pb-16 text-center text-gray-800">
                    A Few Projects
                </h2>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 w-full">

                    {projects.map((project, index) => (
                        <div key={index} className="break-inside-avoid inline-block w-full mb-8">
                            <ScrollAnimation>
                                <div
                                    className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl
                                    hover:-translate-y-2 transition-all duration-300 flex flex-col group"
                                >
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {project.brief}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-gray-50 text-gray-600 text-sm font-medium py-1.5 px-3
                                                rounded-lg border border-gray-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;