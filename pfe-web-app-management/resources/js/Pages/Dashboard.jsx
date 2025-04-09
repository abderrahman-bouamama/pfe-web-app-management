import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-x-auto mt-8">
                        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg border-x-4">
                            <thead className="bg-sky-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Projet</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Responsable</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Tâches accordées</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">État</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">État Projet</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date début</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date de fin</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-800">Projet Alpha</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">Mme Zahra</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">23</td>
                                    <td className="px-6 py-4 text-sm text-green-600 font-semibold">En cours</td>
                                    <td className="px-6 py-4 text-sm text-blue-600 font-semibold">Actif</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">2024-02-01</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">2024-06-30</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-800">Projet Beta</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">M. Yassine</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">17</td>
                                    <td className="px-6 py-4 text-sm text-yellow-600 font-semibold">En attente</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">Suspendu</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">2024-01-10</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">2024-03-15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </AuthenticatedLayout>
    );
} 