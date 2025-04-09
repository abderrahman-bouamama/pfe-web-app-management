import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-800 text-white px-6 py-4 shadow">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Admin</h1>

                    <div className="flex items-center gap-4">
                        <span className="text-lg capitalize "><span className='bg-green-400 rounded-sm'>Connecté</span> : {user.name}</span>

                        {/* Déconnexion */}
                        <Link href={route('logout')} method="post" as="button" className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                            Déconnexion
                        </Link>
                    </div>
                </div>
                <img
                    src="/images/logo.png"
                    alt="Employé"
                    className="w-16 h-16 rounded-full border-2 border-sky-600 object-cover"
                />
            </header>


            <nav className="bg-blue-100 px-6 py-2 text-sm flex gap-4 items-center justify-between ml-4 mr-4">
                <Link href="/admin/dashboard" className="hover:underline border-t-emerald-300 bg-emerald-300 w-40 font-poppins flex justify-center items-center text-2xl rounded-2xl hover:bg-emerald-400 uppercase ">Dashboard</Link>
                <p>|</p>
                <Link href={route('admin.employees')} className="hover:underline text-blue-600 uppercase text-lg">
                    Gestion des employés 
                </Link>
                <p>|</p>

                <Link href={route('admin.projects')} className="hover:underline text-blue-600 uppercase text-lg">
                    Gestion des projets
                </Link>
                <p>|</p>

                <Link href={route('admin.tasks')} className="text-blue-600 hover:underline uppercase text-lg">
                    Gérer les tâches
                </Link>
                <p>|</p>

                <Link href={route('admin.trainings')} className="text-blue-600 hover:underline uppercase text-lg">
                    Gérer les formations
                </Link>
                <p>|</p>

                <Link href={route('admin.certificates')} className="text-blue-600 hover:underline uppercase text-lg">
                    Gérer les e-certificats
                </Link>
                

            </nav>

            <main className="flex-1 px-6 py-4">
                {children}
            </main>
        </div>
    );
}
