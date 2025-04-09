import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Certificates() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Mes e-Certificats</h2>}
        >
            <Head title="Mes Certificats" />

            <div className="py-6 px-4">
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Certificats obtenus
                    </h3>

                    <table className="min-w-full border border-gray-200 rounded">
                        <thead className="bg-gray-100 text-sm text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">Formation</th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Téléchargement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-sm text-gray-600">
                                <td className="px-4 py-2">Sécurité au Travail</td>
                                <td className="px-4 py-2">2025-03-10</td>
                                <td className="px-4 py-2">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Télécharger PDF
                                    </a>
                                </td>
                            </tr>
                            {/* Plus de certificats ici */}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
