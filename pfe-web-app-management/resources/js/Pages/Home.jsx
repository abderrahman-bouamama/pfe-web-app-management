import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import AboutSection from '@/Components/AboutSection';
import ServicesSection from '@/Components/ServicesSection';

import ProjectsSection from '@/Components/ProjectsSection';
import ClientsSection from '@/Components/ClientsSection';
import ContactSection from '@/Components/ContactSection';
import FooterSection from '@/Components/FooterSection';




export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Header />

            <section className="relative bg-gray-900 text-white py-24 overflow-hidden pt-64">
                {/* Background Image */}
                <img
                    src="/images/hero-img.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-30  "
                />

                {/* Text Content */}
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Solutions Digitales Intégrées pour un Monde en Mouvement
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Découvrez nos services innovants
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                    >
                        Obtenez votre solution personnalisée →
                    </Link>
                </div>

                {/* Floating Images */}
                <div className="absolute top-1/8 left-1/4 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <img
                        src="/images/intgration.png"
                        alt="Floating Image 1"
                        className="w-32 h-32 rounded-full shadow-lg animate-float"
                    />
                </div>
                <div className="absolute top-1/8 right-1/4 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <img
                        src="/images/team-img.png"
                        alt="Floating Image 2"
                        className="w-32 h-32 rounded-full shadow-lg animate-float-reverse"
                    />
                </div>
            </section>
            {/* About Section*/}
            <AboutSection />
            {/* Services Section */}
            <ServicesSection />
            {/*Projects Section */}
            <ProjectsSection />
            {/* Clients Section*/}
            <ClientsSection />
            {/* Contact Section */}
            <ContactSection />
            {/*Footer section */}
            <FooterSection />

        </>
    );
}

