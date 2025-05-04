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
            <section className="relative bg-gray-900 text-white py-24 overflow-hidden pt-72 mt-28">
                {/* Vidéo de fond */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/videos/HeroVideo.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>

                {/* Contenu texte */}
                <div className="relative container mx-auto px-4 text-center z-10 mt-24 pt-24">
                    <Link
                        href="/contact"
                        className="inline-block bg-orange-400 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 mt-32"
                    >
                        Obtenez votre solution personnalisée →
                    </Link>
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

