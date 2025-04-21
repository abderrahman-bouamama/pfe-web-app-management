import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Leaves() {
    const upcomingLeaves = [
        { id: 1, type: "Annuel", start: "2025-05-10", end: "2025-05-15", status: "Approuvé" },
        { id: 2, type: "Maladie", start: "2025-06-01", end: "2025-06-03", status: "En attente" },
    ];

    const pastLeaves = [
        { id: 3, type: "Annuel", start: "2025-03-12", end: "2025-03-16", status: "Approuvé" },
        { id: 4, type: "Urgence", start: "2025-01-05", end: "2025-01-06", status: "Rejeté" },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Congés</h2>}
        >
            <Head title="Congés" />

            <div className="p-6 space-y-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-green-600">Mes congés</h3>
                    <button className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
                        Demander un congé
                    </button>
                </div>

                {/* Congés à venir */}
                <div>
                    <h4 className="text-md font-bold text-gray-700 mb-2">À venir</h4>
                    <div className="bg-white rounded shadow p-4 space-y-2">
                        {upcomingLeaves.map(leave => (
                            <div key={leave.id} className="border-b pb-2">
                                <p><span className="font-semibold">Type:</span> {leave.type}</p>
                                <p><span className="font-semibold">Du:</span> {leave.start} <span className="font-semibold">au</span> {leave.end}</p>
                                <p className={`text-sm font-medium ${leave.status === 'Approuvé' ? 'text-green-600' : 'text-yellow-600'}`}>
                                    Statut: {leave.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Congés passés */}
                <div>
                    <h4 className="text-md font-bold text-gray-700 mb-2">Historique</h4>
                    <div className="bg-white rounded shadow p-4 space-y-2">
                        {pastLeaves.map(leave => (
                            <div key={leave.id} className="border-b pb-2">
                                <p><span className="font-semibold">Type:</span> {leave.type}</p>
                                <p><span className="font-semibold">Du:</span> {leave.start} <span className="font-semibold">au</span> {leave.end}</p>
                                <p className={`text-sm font-medium ${leave.status === 'Rejeté' ? 'text-red-600' : 'text-green-600'}`}>
                                    Statut: {leave.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
