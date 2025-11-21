import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaTasks, FaCheckCircle, FaClock, FaExclamationTriangle, FaProjectDiagram, FaCalendar, FaComment } from 'react-icons/fa';

export default function Tasks() {
    const [selectedTask, setSelectedTask] = useState(null);

    // Données mock - seront remplacées par les vraies données du backend
    const tasks = [
        { id: 1, title: 'Configurer API REST', project: 'Projet E-commerce', status: 'En cours', priority: 'Haute', progress: 60, deadline: '2025-12-15', description: 'Mise en place de l\'API REST pour le backend' },
        { id: 2, title: 'Design Interface Utilisateur', project: 'Projet Task Manager', status: 'Terminée', priority: 'Moyenne', progress: 100, deadline: '2025-12-10', description: 'Création des maquettes pour l\'interface' },
        { id: 3, title: 'Tests Unitaires', project: 'Projet E-commerce', status: 'En attente', priority: 'Basse', progress: 0, deadline: '2025-12-20', description: 'Écriture des tests unitaires pour les composants' },
        { id: 4, title: 'Documentation Technique', project: 'Projet Task Manager', status: 'En cours', priority: 'Moyenne', progress: 40, deadline: '2025-12-18', description: 'Rédaction de la documentation technique du projet' },
        { id: 5, title: 'Intégration Frontend', project: 'Projet E-commerce', status: 'En cours', priority: 'Haute', progress: 75, deadline: '2025-12-12', description: 'Intégration des composants React' },
    ];

    const getStatusColor = (status) => {
        const colors = {
            'En cours': 'bg-blue-100 text-blue-800 border-blue-200',
            'Terminée': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Bloquée': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getPriorityColor = (priority) => {
        const colors = {
            'Haute': 'bg-red-100 text-red-800 border-red-300',
            'Moyenne': 'bg-yellow-100 text-yellow-800 border-yellow-300',
            'Basse': 'bg-green-100 text-green-800 border-green-300'
        };
        return colors[priority] || 'bg-gray-100 text-gray-800 border-gray-300';
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'En cours': return <FaClock className="text-blue-500" />;
            case 'Terminée': return <FaCheckCircle className="text-green-500" />;
            case 'En attente': return <FaTasks className="text-yellow-500" />;
            case 'Bloquée': return <FaExclamationTriangle className="text-red-500" />;
            default: return <FaTasks className="text-gray-500" />;
        }
    };

    const markAsComplete = (taskId) => {
        console.log(`Marquer la tâche ${taskId} comme terminée`);
        // Logique à implémenter avec le backend
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Mes Tâches</h2>}
        >
            <Head title="Mes Tâches" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Mes Tâches</h1>
                        <p className="text-gray-600 mt-2">Gérez et suivez l'avancement de vos tâches assignées</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Tâches</p>
                                    <p className="text-2xl font-bold text-gray-900">{tasks.length}</p>
                                </div>
                                <FaTasks className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Terminées</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {tasks.filter(t => t.status === 'Terminée').length}
                                    </p>
                                </div>
                                <FaCheckCircle className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En cours</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {tasks.filter(t => t.status === 'En cours').length}
                                    </p>
                                </div>
                                <FaClock className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En attente</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {tasks.filter(t => t.status === 'En attente').length}
                                    </p>
                                </div>
                                <FaTasks className="text-3xl text-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tasks Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Liste de mes Tâches</h3>
                        <p className="text-gray-600 mt-1">Suivez l'avancement de toutes vos tâches</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tâche</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Projet</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priorité</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Progression</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Échéance</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tasks.map((task) => (
                                    <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {getStatusIcon(task.status)}
                                                <span className="text-sm font-semibold text-gray-900">{task.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaProjectDiagram className="text-gray-400" />
                                                {task.project}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(task.priority)}`}>
                                                {task.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-full">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className={`h-2 rounded-full transition-all duration-500 ${
                                                                task.progress === 100 ? 'bg-green-500' :
                                                                task.progress >= 50 ? 'bg-blue-500' :
                                                                'bg-yellow-500'
                                                            }`}
                                                            style={{ width: `${task.progress}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs text-gray-600 font-medium">{task.progress}%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(task.status)}`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <FaCalendar className="text-gray-400" />
                                                {task.deadline}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedTask(task)}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                                >
                                                    <FaComment />
                                                    Détails
                                                </button>
                                                {task.status !== 'Terminée' && (
                                                    <button
                                                        onClick={() => markAsComplete(task.id)}
                                                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                                                    >
                                                        <FaCheckCircle />
                                                        Terminer
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Task Details Modal */}
                {selectedTask && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedTask(null)}>
                        <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full m-4" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">{selectedTask.title}</h3>
                                <button
                                    onClick={() => setSelectedTask(null)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Description</p>
                                    <p className="text-gray-900">{selectedTask.description}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Projet</p>
                                        <p className="text-gray-900 font-medium">{selectedTask.project}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Échéance</p>
                                        <p className="text-gray-900 font-medium">{selectedTask.deadline}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Priorité</p>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(selectedTask.priority)}`}>
                                            {selectedTask.priority}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Statut</p>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(selectedTask.status)}`}>
                                            {selectedTask.status}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Progression</p>
                                    <div className="w-full bg-gray-200 rounded-full h-4">
                                        <div
                                            className={`h-4 rounded-full transition-all duration-500 ${
                                                selectedTask.progress === 100 ? 'bg-green-500' :
                                                selectedTask.progress >= 50 ? 'bg-blue-500' :
                                                'bg-yellow-500'
                                            }`}
                                            style={{ width: `${selectedTask.progress}%` }}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{selectedTask.progress}% complété</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
