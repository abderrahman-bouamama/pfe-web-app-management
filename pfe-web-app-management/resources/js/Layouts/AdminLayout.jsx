import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = [
        { name: 'Dashboard', href: '/admin/dashboard' },
        { name: 'Gestion des employés', href: route('admin.employees') },
        { name: 'Gestion des projets', href: route('admin.projects') },
        { name: 'Gérer les tâches', href: route('admin.tasks') },
        { name: 'Gérer les formations', href: route('admin.trainings') },
        { name: 'Gérer les e-certificats', href: route('admin.certificates') },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar - Always visible on desktop */}
            <aside className="hidden md:flex flex-col w-64 bg-blue-400 text-white shadow-lg z-40">
                <div className="p-4 border-b border-blue-700">
                    <h1 className="text-2xl font-bold uppercase">Administrateur</h1>
                    <p className="text-sm mt-1 bg-green-500 rounded-sm px-2 uppercase">Connecté : {user.name}</p>
                </div>

                <nav className="flex-1 overflow-y-auto">
                    <ul className="py-4 px-4 space-y-2 border-spacing-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block px-4 py-2 bg-sky-700 rounded hover:bg-blue-300 transition uppercase text-sm"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-blue-700">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Déconnexion
                    </Link>
                </div>
            </aside>

            {/* Sidebar - Mobile version with animation */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: -250 }}
                        animate={{ x: 0 }}
                        exit={{ x: -250 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-y-0 left-0 w-64 bg-blue-800 text-white z-50 shadow-lg flex flex-col md:hidden"
                    >
                        <div className="p-4 border-b border-blue-700 flex justify-between items-center">
                            <h1 className="text-xl font-bold uppercase">Admin</h1>
                            <button onClick={() => setSidebarOpen(false)} className="text-white text-lg">✕</button>
                        </div>

                        <nav className="flex-1 overflow-y-auto">
                            <ul className="py-4 px-4 space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-2 rounded hover:bg-blue-700 transition uppercase text-sm"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="p-4 border-t border-blue-700">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Déconnexion
                            </Link>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Content area */}
            <div className="w-2/3 flex flex-col overflow-hidden ml-0 md:ml-20">
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
                    <button
                        className="md:hidden text-blue-700 text-2xl"
                        onClick={() => setSidebarOpen(true)}
                    >
                        ☰
                    </button>

                    <div className="flex items-center gap-10">
                        <img
                            src="/images/logo-usersoace.jpg"
                            alt="Employé"
                            className="w-10 h-10 rounded-full border-2 border-sky-600 object-cover"
                        />
                        <span className="text-sm font-semibold text-gray-600 hidden md:inline uppercase">
                            {user.name}
                        </span>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto px-6 py-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
