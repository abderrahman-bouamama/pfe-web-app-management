import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Certificates() {
    return (
        <AdminLayout>
            <Head title="Gestion des e-Certificats" />

            <div className="p-8 bg-white shadow rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Gestion des e-Certificats</h1>
                <p className="text-gray-600 mb-6">
                    Visualisez les certificats attribués et attribuez de nouveaux certificats aux employés.
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Employé</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Formation</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Date</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Certificat</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Ahmed B.</td>
                                <td className="px-4 py-2">Formation Sécurité</td>
                                <td className="px-4 py-2">2025-03-10</td>
                                <td className="px-4 py-2 text-green-600 font-semibold">Attribué</td>
                                <td className="px-4 py-2">
                                    <button className="text-blue-600 hover:underline text-sm mr-2">Voir</button>
                                    <button className="text-indigo-600 hover:underline text-sm">Attribuer</button>
                                </td>
                            </tr>
                            {/* Autres certificats ici */}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
