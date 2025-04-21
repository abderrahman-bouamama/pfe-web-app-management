import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaToolbox, FaExchangeAlt } from 'react-icons/fa';

export default function MaterielAttribue() {
    const materiels = [
        {
            id: 1,
            type: 'Ordinateur Portable',
            reparation: 'Changement de clavier',
            datePrise: '2024-01-15',
            dateRetour: '2025-01-15',
            etat: 'Fonctionnel'
        },
        {
            id: 2,
            type: 'Casque Audio',
            reparation: 'Aucune',
            datePrise: '2024-03-01',
            dateRetour: '2024-09-01',
            etat: 'Défectueux'
        },
        {
            id: 3,
            type: 'Souris Ergonomique',
            reparation: 'Bouton gauche réparé',
            datePrise: '2024-02-10',
            dateRetour: '2025-02-10',
            etat: 'Fonctionnel'
        },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Matériel Attribué</h2>}
        >
            <Head title="Matériel Attribué" />

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materiels.map(m => (
                        <div key={m.id} className="bg-white rounded-lg shadow p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-sky-700 flex items-center gap-2">
                                    <FaToolbox /> {m.type}
                                </h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${m.etat === 'Fonctionnel' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {m.etat}
                                </span>
                            </div>

                            <p className="text-sm text-gray-600"><strong>Réparation :</strong> {m.reparation}</p>
                            <p className="text-sm text-gray-600"><strong>Date de prise :</strong> {m.datePrise}</p>
                            <p className="text-sm text-gray-600"><strong>Date de retour :</strong> {m.dateRetour}</p>

                            <button
                                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"
                                onClick={() => alert(`Demande de changement envoyée pour : ${m.type}`)}
                            >
                                <FaExchangeAlt /> Demander un changement
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
