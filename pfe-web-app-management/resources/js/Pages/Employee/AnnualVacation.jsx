import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AnnualVacation() {
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

            <div className="p-6 space-y-6">
                <p className="text-gray-700">Consultez ou demandez vos vacances annuelles ici.</p>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-lg font-bold text-sky-700 mb-4">Jours Fériés Nationaux</h3>

                    <table className="min-w-full table-auto border border-gray-300">
                        <thead className="bg-sky-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">Nom</th>
                                <th className="px-4 py-2 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nationalHolidays.map(holiday => (
                                <tr key={holiday.id} className="border-t">
                                    <td className="px-4 py-2">{holiday.name}</td>
                                    <td className="px-4 py-2">{holiday.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
