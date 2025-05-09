import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { FaDiagramProject } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiUserCommunityLine } from "react-icons/ri";
import { SiMyspace } from "react-icons/si";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-28 z-50 backdrop-blur-lg  bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 shadow-md flex justify-between ml-0 mr-0">
            <div className="container mx-auto px-4 py-3 ">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-24 cursor-pointer flex items-center ">
                        <a href="/">
                            <img
                                src="/images/logo1.jpg"
                                alt="Logo"
                                className="max-h-20 w-full  rounded-full"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-4 text-gray-900 font-medium w-2/3 justify-end items-center">
                        <Link href="/" className="hover:text-red-800 transition bg-white rounded-xl h-8 w-28 flex justify-center items-center gap-2"><FaHome /> HOME</Link>
                        <Link href="/about" className="hover:text-red-800 transition bg-white rounded-xl h-8 w-28 flex justify-center items-center gap-2"><FcAbout />ABOUT</Link>
                        <Link href="/services" className="hover:text-red-800 transition bg-white rounded-xl h-8 w-28 flex justify-center items-center gap-2"><GrServices />SERVICES</Link>
                        <Link href="/projects" className="hover:text-red-800 transition bg-white rounded-xl h-8 w-28 flex justify-center items-center gap-2"><FaDiagramProject />PROJECTS</Link>
                        <Link href="/contact" className="hover:text-red-800 transition bg-white rounded-xl h-8 w-40 flex justify-center items-center gap-1"><SlEnvolopeLetter />CONTACT US</Link>
                        <Link href="/clients" className="hover:text-red-800 transition bg-white rounded-xl h-8 w-24 flex justify-center items-center gap-2"><RiUserCommunityLine />CLIENTS</Link>
                    </nav>

                    <Link href="/login" className="hover:text-emerald-800 transition uppercase bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 rounded-xl h-8 w-48 flex justify-center items-center gap-2"><SiMyspace />USERS SPACE</Link>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(true)}>
                            <img src="/images/toggle.png" alt="Menu" className="h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white text-xl">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-4xl"
                    >
                        &times;
                    </button>
                    <nav className="space-y-4 text-center">
                        <Link href="/" className="block" onClick={() => setMenuOpen(false)}>HOME</Link>
                        <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                        <Link href="/services" className="block" onClick={() => setMenuOpen(false)}>SERVICES</Link>
                        <Link href="/projects" className="block" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
                        <Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
                        <Link href="/clients" className="block" onClick={() => setMenuOpen(false)}>CLIENTS</Link>
                        <Link href="/login" className="block" onClick={() => setMenuOpen(false)}>users space</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
