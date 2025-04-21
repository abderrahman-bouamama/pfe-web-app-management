import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaBookOpen, FaCheckCircle, FaPlay } from 'react-icons/fa';

export default function Training() {
    const [visibleSubject, setVisibleSubject] = useState(null);

    const formations = [
        {
            id: 1,
            type: 'Obligatoire',
            sujet: 'Formation sécurité au travail, procédures d’urgence et bonnes pratiques HSE.',
            etat: 'En cours',
        },
        {
            id: 2,
            type: 'Suggérée',
            sujet: 'Introduction à React.js pour l’intégration de composants interactifs.',
            etat: 'Terminée',
        },
        {
            id: 3,
            type: 'Obligatoire',
            sujet: 'Manipulation sécurisée des machines industrielles lourdes.',
            etat: 'En cours',
        },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Formations</h2>}
        >
            <Head title="Formations" />

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formations.map((formation) => (
                        <div key={formation.id} className="bg-white rounded-lg shadow p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-sky-700 flex items-center gap-2">
                                    <FaBookOpen /> Formation {formation.type}
                                </h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${formation.etat === 'Terminée' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {formation.etat}
                                </span>
                            </div>

                            {/* Sujet toggle */}
                            <button
                                onClick={() =>
                                    setVisibleSubject(
                                        visibleSubject === formation.id ? null : formation.id
                                    )
                                }
                                className="text-sm text-blue-600 underline hover:text-blue-800"
                            >
                                {visibleSubject === formation.id ? 'Masquer le sujet' : 'Afficher le sujet'}
                            </button>

                            {visibleSubject === formation.id && (
                                <p className="text-sm text-gray-700 mt-2">
                                    {formation.sujet}
                                </p>
                            )}

                            {/* Bouton de participation */}
                            {formation.etat !== 'Terminée' && (
                                <button className="mt-4 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 text-sm flex items-center gap-2">
                                    <FaPlay /> Participer
                                </button>
                            )}

                            {formation.etat === 'Terminée' && (
                                <div className="mt-4 flex items-center text-green-600 text-sm gap-2">
                                    <FaCheckCircle /> Formation complétée
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
