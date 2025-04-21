import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Tasks() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Configurer base de données', status: 'en cours', progress: 40 },
        { id: 2, title: 'Créer maquette design', status: 'terminée', progress: 100 },
        { id: 3, title: 'Intégrer page d’accueil', status: 'en cours', progress: 60 },
        { id: 4, title: 'Déployer sur serveur', status: 'pas commencée', progress: 0 },
        { id: 5, title: 'Test unitaire API', status: 'terminée', progress: 100 },
        { id: 6, title: 'Documenter le projet', status: 'terminée', progress: 100 },
    ]);

    const markAsDone = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: 'terminée', progress: 100 } : task
        ));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Tâches Accordées</h2>}
        >
            <Head title="Tâches Accordées" />

            <div className="p-6">
                <p className="text-gray-700 mb-6">Voici la liste de vos tâches assignées :</p>

                <div className="grid gap-4">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                            <p className={`mt-1 font-medium ${task.status === 'terminée' ? 'text-green-600' : task.status === 'en cours' ? 'text-yellow-600' : 'text-gray-600'}`}>
                                Statut : {task.status}
                            </p>

                            {/* Progression */}
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${task.progress}%` }}
                                    />
                                </div>
                                <span className="text-sm text-gray-500">{task.progress}%</span>
                            </div>

                            <div className="mt-4 flex gap-4">
                                <button className="bg-blue-100 text-blue-700 px-4 py-1 rounded hover:bg-blue-200 text-sm">
                                    Ajouter une remarque
                                </button>
                                {task.status !== 'terminée' && (
                                    <button
                                        onClick={() => markAsDone(task.id)}
                                        className="bg-green-100 text-green-700 px-4 py-1 rounded hover:bg-green-200 text-sm"
                                    >
                                        Marquer comme terminée
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
