import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaProjectDiagram, FaUserTie, FaCalendarAlt, FaDownload } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        name: 'Projet E-commerce',
        manager: 'Mme Zahra',
        progress: 70,
        startDate: '2024-10-01',
        endDate: '2025-02-01',
    },
    {
        id: 2,
        name: 'Projet Taks manager',
        manager: 'M. Yassine',
        progress: 35,
        startDate: '2024-11-15',
        endDate: '2025-04-15',
    },
];

export default function MyProjects() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Mes Projets</h2>}
        >
            <Head title="Mes Projets" />
            <div className="p-6">
                <h1 className="text-2xl font-bold text-green-600 uppercase mb-6">Détails des projets actuels</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                            <h3 className="text-xl font-semibold flex items-center gap-2 text-sky-700 mb-3">
                                <FaProjectDiagram /> {project.name}
                            </h3>

                            <p className="text-gray-700 flex items-center gap-2 mb-2">
                                <FaUserTie className="text-gray-500" /> Responsable : {project.manager}
                            </p>

                            <p className="text-gray-700 flex items-center gap-2 mb-2">
                                <FaCalendarAlt className="text-gray-500" /> Du {project.startDate} au {project.endDate}
                            </p>

                            {/* Barre de progression */}
                            <div className="mt-4">
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{ width: `${project.progress}%` }}
                                    />
                                </div>
                                <span className="text-sm text-gray-500">{project.progress}% terminé</span>
                            </div>

                            {/* Bouton rapport */}
                            <div className="mt-4">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">
                                    <FaDownload /> Voir le rapport de progression
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
