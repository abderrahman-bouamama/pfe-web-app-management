import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SalaryAndBonuses() {
    const salaries = [
        { month: "Avril 2025", base: 7000, overtime: 500, bonus: 800 },
        { month: "Mars 2025", base: 7000, overtime: 350, bonus: 600 },
        { month: "Février 2025", base: 7000, overtime: 420, bonus: 300 },
        { month: "Janvier 2025", base: 7000, overtime: 600, bonus: 400 },
        { month: "Décembre 2024", base: 7000, overtime: 300, bonus: 700 },
        { month: "Novembre 2024", base: 7000, overtime: 200, bonus: 250 },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Salaire & Primes</h2>}
        >
            <Head title="Salaire & Primes" />

            <div className="p-6 space-y-6">
                <p className="text-gray-700 mb-4">
                    Retrouvez vos informations salariales des derniers mois.
                </p>

                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="bg-sky-100 text-gray-700 text-sm">
                            <tr>
                                <th className="px-4 py-2">Mois</th>
                                <th className="px-4 py-2">Salaire de base</th>
                                <th className="px-4 py-2">Heures supp.</th>
                                <th className="px-4 py-2">Primes projet</th>
                                <th className="px-4 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            {salaries.map((s, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2">{s.month}</td>
                                    <td className="px-4 py-2">{s.base} MAD</td>
                                    <td className="px-4 py-2">{s.overtime} MAD</td>
                                    <td className="px-4 py-2">{s.bonus} MAD</td>
                                    <td className="px-4 py-2 font-semibold text-green-600">
                                        {s.base + s.overtime + s.bonus} MAD
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
