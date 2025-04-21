import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user; 

    return (
        <div className="min-h-screen bg-gray-100">
           

            {/* ✅ Navbar employé */}
            <AuthenticatedNavbar user={user} />

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4">
                        {header}
                    </div>
                </header>
            )}

            <main className="max-w-7xl mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    );
}
