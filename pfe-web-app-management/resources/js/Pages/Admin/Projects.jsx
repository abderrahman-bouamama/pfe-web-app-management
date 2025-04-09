import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const Projects = () => {
    const fakeProjects = [
        {
            id: 1,
            name: "Projet Alpha",
            manager: "Mme Zahra",
            status: "En cours",
            start: "2024-10-01",
            end: "2025-03-30",
        },
        {
            id: 2,
            name: "Projet Beta",
            manager: "M. Yassine",
            status: "Terminé",
            start: "2024-01-01",
            end: "2024-06-15",
        },
    ];

    return (
        <AdminLayout>
            <Head title="Gestion des projets" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Liste des projets</h1>
                    <Link
                        href="#"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        + Nouveau Projet
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nom</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Responsable</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Statut</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Début</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Fin</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {fakeProjects.map((project) => (
                                <tr key={project.id}>
                                    <td className="px-6 py-4 text-sm">{project.name}</td>
                                    <td className="px-6 py-4 text-sm">{project.manager}</td>
                                    <td className="px-6 py-4 text-sm">{project.status}</td>
                                    <td className="px-6 py-4 text-sm">{project.start}</td>
                                    <td className="px-6 py-4 text-sm">{project.end}</td>
                                    <td className="px-6 py-4 text-right space-x-2">
                                        <button className="px-3 py-1 bg-yellow-400 text-white rounded">Modifier</button>
                                        <button className="px-3 py-1 bg-red-500 text-white rounded">Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Projects;
