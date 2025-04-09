import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MyProjects() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Mes Projets</h2>}
        >
            <Head title="Mes Projets" />
            <div className="p-6">
                <h1 className="text-2xl font-bold text-green-600 uppercase">Detailles des projets actuel</h1>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <thead className="bg-sky-100 text-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-left">Projet</th>
                            <th className="py-3 px-4 text-left">Responsable</th>
                            <th className="py-3 px-4 text-left">Statut</th>
                            <th className="py-3 px-4 text-left">Date Début</th>
                            <th className="py-3 px-4 text-left">Date Fin</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">Projet Alpha</td>
                            <td className="py-3 px-4">Mme Zahra</td>
                            <td className="py-3 px-4 text-green-600 font-semibold">En cours</td>
                            <td className="py-3 px-4">2024-10-01</td>
                            <td className="py-3 px-4">2025-02-01</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">Projet Beta</td>
                            <td className="py-3 px-4">M. Yassine</td>
                            <td className="py-3 px-4 text-yellow-500 font-semibold">En attente</td>
                            <td className="py-3 px-4">2024-11-15</td>
                            <td className="py-3 px-4">2025-04-15</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    );
}
