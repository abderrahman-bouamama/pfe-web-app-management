import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function WorkDays() {
    const dateOfJoining = '2023-08-15';

    const months = [
        { month: 'Septembre 2023', daysWorked: 20 },
        { month: 'Octobre 2023', daysWorked: 22 },
        { month: 'Novembre 2023', daysWorked: 19 },
        { month: 'Décembre 2023', daysWorked: 21 },
        { month: 'Janvier 2024', daysWorked: 18 },
        { month: 'Février 2024', daysWorked: 20 },
        { month: 'Mars 2024', daysWorked: 23 },
        { month: 'Avril 2024', daysWorked: 21 },
    ];

    const totalDays = months.reduce((sum, m) => sum + m.daysWorked, 0);
    const additionalDays = 5; // Heures sup, jours en week-end, etc.

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Jours Travaillés</h2>}
        >
            <Head title="Jours Travaillés" />

            <div className="p-6 space-y-6">
                <p className="text-gray-700">
                    📅 <strong>Date d'intégration :</strong> {dateOfJoining}
                </p>

                <div className="bg-white rounded shadow p-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-sky-100 text-gray-700">
                            <tr>
                                <th className="text-left px-4 py-2">Mois</th>
                                <th className="text-left px-4 py-2">Jours Travaillés</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                            {months.map((entry, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-4 py-2">{entry.month}</td>
                                    <td className="px-4 py-2 font-semibold">{entry.daysWorked}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-100 p-4 rounded text-gray-800 shadow flex flex-col gap-2">
                    <p><strong>Total :</strong> {totalDays} jours</p>
                    <p><strong>Jours supplémentaires :</strong> {additionalDays} jours</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
