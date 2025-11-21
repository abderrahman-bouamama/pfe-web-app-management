import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaCalendarAlt, FaUmbrellaBeach } from 'react-icons/fa';

export default function AnnualVacation({ holidays = [] }) {
    const nationalHolidays = [
        { id: 1, name: "Nouvel An", date: "2025-01-01" },
        { id: 2, name: "Manifeste de l'Indépendance", date: "2025-01-11" },
        { id: 3, name: "Fête du Travail", date: "2025-05-01" },
        { id: 4, name: "Fête du Trône", date: "2025-07-30" },
        { id: 5, name: "Oued Ed-Dahab", date: "2025-08-14" },
        { id: 6, name: "Révolution du Roi et du Peuple", date: "2025-08-20" },
        { id: 7, name: "Fête de la Jeunesse", date: "2025-08-21" },
        { id: 8, name: "Fête de l'Indépendance", date: "2025-11-18" },
        { id: 9, name: "Aïd al-Fitr", date: "2025-03-30 (variable)" },
        { id: 10, name: "Aïd al-Adha", date: "2025-06-07 (variable)" },
        { id: 11, name: "Achoura", date: "2025-07-06 (variable)" },
        { id: 12, name: "Mawlid", date: "2025-09-04 (variable)" },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Vacances Annuelles</h2>}
        >
            <Head title="Vacances Annuelles" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Vacances Annuelles</h1>
                        <p className="text-gray-600 mt-2">Consultez les jours fériés nationaux</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Jours Fériés</p>
                                    <p className="text-2xl font-bold text-gray-900">{nationalHolidays.length}</p>
                                </div>
                                <FaCalendarAlt className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Jours Fixes</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {nationalHolidays.filter(h => !h.date.includes('variable')).length}
                                    </p>
                                </div>
                                <FaCalendarAlt className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Jours Variables</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {nationalHolidays.filter(h => h.date.includes('variable')).length}
                                    </p>
                                </div>
                                <FaUmbrellaBeach className="text-3xl text-purple-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Année</p>
                                    <p className="text-2xl font-bold text-gray-900">2025</p>
                                </div>
                                <FaCalendarAlt className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Holidays Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Jours Fériés Nationaux 2025</h3>
                        <p className="text-gray-600 mt-1">Liste complète des jours fériés de l'année</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Nom du Jour Férié
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {nationalHolidays.map((holiday) => (
                                    <tr key={holiday.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-blue-500" />
                                                <span className="text-sm font-semibold text-gray-900">{holiday.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                                                holiday.date.includes('variable')
                                                    ? 'bg-purple-100 text-purple-800 border-purple-200'
                                                    : 'bg-blue-100 text-blue-800 border-blue-200'
                                            }`}>
                                                {holiday.date}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
