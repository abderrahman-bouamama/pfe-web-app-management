import React from 'react';
import { Link } from '@inertiajs/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function FooterSection() {
    return (
        <footer className="bg-amber-800 text-white py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Navigation links */}
                <div className='flex flex-col items-start'>
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 uppercase ">
                        <li><Link href="/" className="hover:underline ">Accueil</Link></li>
                        <li><Link href="/about" className="hover:underline">À propos</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projets</Link></li>
                        <li><Link href="/clients" className="hover:underline">Témoignages</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Social media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                    <div className="flex space-x-4 text-xl">
                        <a
                            href="https://github.com/your-github"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/your-linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <FaSquareXTwitter />
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Localisation</h3>
                    <div className="rounded overflow-hidden shadow-md">
                        <iframe
                            title="Mohammedia, Maroc"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.351392843726!2d-7.384899184888262!3d33.68664114508057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd647f95389d%3A0x797b1a7388ad77d9!2sMohammedia%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1712096922054!5m2!1sfr!2sma"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="text-center text-black text-lg mt-12">
                © {new Date().getFullYear()} Smartlink Industry. Tous droits réservés.
            </div>
        </footer>
    );
}
