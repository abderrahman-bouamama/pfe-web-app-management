import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FaTasks, FaCode, FaCheck, FaSearch } from 'react-icons/fa';

const statusIcons = {
    todo: <FaTasks className="text-blue-500 text-lg" />,
    inProgress: <FaCode className="text-yellow-500 text-lg" />,
    review: <FaSearch className="text-purple-500 text-lg" />,
    done: <FaCheck className="text-green-600 text-lg" />,
};

export default function Dashboard() {
    const [modalType, setModalType] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const openModal = (type, task) => {
        setModalType(type);
        setSelectedTask(task);
    };

    const closeModal = () => {
        setModalType(null);
        setSelectedTask(null);
    };

    const tasks = {
        todo: [
            { id: 1, title: 'Créer design UI', tags: ['#UI', '#client'], progress: 15, users: ['/images/avatar1.png', '/images/avatar2.png'] },
        ],
        inProgress: [
            { id: 2, title: 'Intégration frontend', tags: ['#frontend'], progress: 45, users: ['/images/avatar3.png'] },
        ],
        review: [
            { id: 3, title: 'Validation technique', tags: ['#QA'], users: ['/images/avatar4.png'] },
        ],
        done: [
            { id: 4, title: 'Déploiement prod', tags: ['#devops'], users: ['/images/avatar1.png', '/images/avatar2.png'] },
        ],
    };

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800 uppercase">Mes Tâches</h2>}>
            <Head title="Dashboard" />

            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {Object.entries(tasks).map(([column, items]) => (
                        <div key={column} className="bg-white p-4 rounded-lg shadow">
                            <h3 className="flex items-center gap-2 font-semibold text-lg capitalize mb-3">
                                {statusIcons[column]} {column.replace(/([A-Z])/g, ' $1')}
                            </h3>

                            {items.map(task => (
                                <div key={task.id} className="mb-4 p-3 rounded bg-gray-50 border hover:shadow transition">
                                    <h4 className="font-medium text-gray-700">{task.title}</h4>

                                    <div className="text-xs text-gray-500 mt-1 space-x-2">
                                        {task.tags.map(tag => (
                                            <span key={tag} className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>

                                    {task.progress && (
                                        <div className="mt-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${task.progress}%` }} />
                                            </div>
                                            <span className="text-xs text-gray-400">{task.progress}%</span>
                                        </div>
                                    )}

                                    <div className="flex mt-3 space-x-1">
                                        {task.users?.map((img, index) => (
                                            <img key={index} src={img} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white shadow" />
                                        ))}
                                    </div>

                                    <div className="flex justify-between mt-4 text-sm">
                                        <button onClick={() => openModal('details', task)} className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Détails</button>
                                        <button onClick={() => openModal('done', task)} className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200">Terminer</button>
                                        <button onClick={() => openModal('edit', task)} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">Modifier</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* MODALES */}
            {modalType && selectedTask && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
                        <button onClick={closeModal} className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl">&times;</button>

                        {modalType === 'details' && (
                            <div>
                                <h2 className="text-lg font-bold mb-2">Détails de la tâche</h2>
                                <p><strong>Titre :</strong> {selectedTask.title}</p>
                                <p><strong>Tags :</strong> {selectedTask.tags.join(', ')}</p>
                            </div>
                        )}

                        {modalType === 'done' && (
                            <div>
                                <h2 className="text-lg font-bold mb-2">Tâche Terminée</h2>
                                <p>Vous marquez <strong>{selectedTask.title}</strong> comme complétée ?</p>
                                <button onClick={() => alert('Tâche terminée !')} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Confirmer</button>
                            </div>
                        )}

                        {modalType === 'edit' && (
                            <div>
                                <h2 className="text-lg font-bold mb-2">Modifier la tâche</h2>
                                <input type="text" defaultValue={selectedTask.title} className="w-full border p-2 rounded mb-4" />
                                <button className="px-4 py-2 bg-yellow-500 text-white rounded">Enregistrer</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
