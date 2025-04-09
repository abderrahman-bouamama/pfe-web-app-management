import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function AuthenticatedNavbar({ user }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-100 shadow px-6 py-4 flex justify-between items-center">
            {/* Logo ou Nom du Dashboard */}
            <div className="text-xl font-poppins text-sky-700 rounded uppercase ">Espace Employé</div>

            {/* Liens principaux */}
            <div className="hidden md:flex space-x-6 items-center">
                <Link href={route('employee.training')} className="bg-sky-300 rounded uppercase text-gray-700 hover:text-blue-600">
                    Formations
                </Link>
                <Link href={route('employee.tasks')} className="bg-sky-300 rounded uppercase text-gray-700 hover:text-blue-600">
                    Tâches Accordées
                </Link>

                <Link href={route('employee.team')} className="bg-sky-300 rounded uppercase text-gray-700 hover:text-blue-600">
                    Équipe du Projet
                </Link>
                <Link href={route('employee.certificates')} className=" bg-sky-300 rounded uppercase text-gray-700 hover:text-blue-600">
                    Mes certificats
                </Link>

                <Link href={route('employee.consumables')} className="bg-sky-300 rounded uppercase text-gray-700 hover:text-blue-600">
                    Consommables
                </Link>

                

                
            </div>

            {/* Dropdown + Photo */}
            <div className="relative flex items-center space-x-4">
                {/* Dropdown button */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition uppercase"
                    >
                        Mon Dossier
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
                            <Link
                                href={route('employee.my-projects')}
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Mes Projets
                            </Link>
                            <Link
                                href={route('employee.work-days')}
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Jours Travaillés
                            </Link>

                            <Link href={route('employee.leaves')} className="block px-4 py-2 hover:bg-gray-100">
                                Congés
                            </Link>
                            <Link href={route('employee.annual-vacation')} className="block px-4 py-2 hover:bg-gray-100">
                                Vacances Annuelles
                            </Link>
                            <Link href={route('employee.salary-bonuses')} className="block px-4 py-2 hover:bg-gray-100">
                                Salaire & Primes
                            </Link>

                            <Link href={route('logout')} method="post" as="button" className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                                Déconnexion
                            </Link>
                        </div>

                    )}
                </div>

                {/* Photo employé */}
                <img
                    src="/images/logo.png"
                    alt="Employé"
                    className="w-16 h-16 rounded-full border-2 border-sky-600 object-cover"
                />

            </div>
        </nav>
    );
}
