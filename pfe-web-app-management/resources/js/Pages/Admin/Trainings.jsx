import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Trainings() {
    return (
        <AdminLayout>
            <Head title="Gestion des formations" />

            <div className="p-8 bg-white shadow rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Gestion des Formations</h1>
                <p className="text-gray-600 mb-6">
                    Vous pouvez ajouter, modifier, suggérer des formations et attribuer des e-certificats aux employés.
                </p>

                <div className="mb-4">
                    <Link
                        href="#"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
                    >
                        + Nouvelle formation
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Titre</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Employés ciblés</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Statut</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">E-certificat</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Formation Sécurité</td>
                                <td className="px-4 py-2">Tous les techniciens</td>
                                <td className="px-4 py-2 text-green-600 font-semibold">Complétée</td>
                                <td className="px-4 py-2">Attribué</td>
                                <td className="px-4 py-2">
                                    <button className="text-blue-600 hover:underline text-sm mr-2">Modifier</button>
                                    <button className="text-red-600 hover:underline text-sm">Supprimer</button>
                                </td>
                            </tr>
                            {/* Ajoute plus de lignes ici */}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
