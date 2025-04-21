import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedNavbar({ user }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-200 shadow-inner px-6 py-4 flex justify-between items-center border-b border-gray-300">
            {/* Titre du dashboard */}
            <Link
                href={route('dashboard')}
                className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition"
            >
                Espace Employé :
                <span className="ml-3 px-2 py-1 bg-gray-300 text-gray-700 rounded font-medium">
                    {user.name}
                </span>
            </Link>

            {/* Liens principaux */}
            <div className="hidden md:flex space-x-4 items-center">
                <Link
                    href={route('employee.my-projects')}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 hover:text-white uppercase text-sm"
                >
                    Mes Projets
                </Link>
                <Link
                    href={route('employee.tasks')}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 hover:text-white uppercase text-sm"
                >
                    Tâches Accordées
                </Link>
                <Link
                    href={route('employee.team')}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 hover:text-white uppercase text-sm"
                >
                    Équipe du Projet
                </Link>
                <Link
                    href={route('employee.certificates')}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 hover:text-white uppercase text-sm"
                >
                    Mes Certificats
                </Link>
                <Link
                    href={route('employee.MaterielAttribue')}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 hover:text-white uppercase text-sm"
                >
                    Matériel Attribué
                </Link>
            </div>

            {/* Dropdown + Photo */}
            <div className="relative flex items-center space-x-4">
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition uppercase text-sm"
                    >
                        Mon Dossier
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 border border-gray-200">
                            <Link href={route('employee.training')} className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Formations</Link>
                            <Link href={route('employee.work-days')} className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Jours Travaillés</Link>
                            <Link href={route('employee.leaves')} className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Congés</Link>
                            <Link href={route('employee.annual-vacation')} className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Vacances Annuelles</Link>
                            <Link href={route('employee.salary-bonuses')} className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Salaire & Primes</Link>

                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="block w-full text-left px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-b"
                            >
                                Déconnexion
                            </Link>
                        </div>
                    )}
                </div>

                <img
                    src="/images/logo.png"
                    alt="Employé"
                    className="w-12 h-12 rounded-full border border-gray-400 object-cover"
                />
            </div>
        </nav>
    );
}
