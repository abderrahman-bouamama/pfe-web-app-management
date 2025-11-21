import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaPlus, FaEdit, FaTrash, FaTasks, FaCheckCircle, FaClock, FaExclamationTriangle, FaUser, FaProjectDiagram } from 'react-icons/fa';

export default function Tasks() {
    const [showCreateForm, setShowCreateForm] = useState(false);

    // Données exemple - à remplacer par des vraies données du backend
    const tasks = [
        { id: 1, title: 'Configurer API', project: 'Projet Alpha', employee: 'Ahmed Ben', status: 'En cours', priority: 'Haute', deadline: '2025-12-15' },
        { id: 2, title: 'Design Interface', project: 'Projet Beta', employee: 'Sara K.', status: 'Terminée', priority: 'Moyenne', deadline: '2025-12-10' },
        { id: 3, title: 'Tests Unitaires', project: 'Projet Gamma', employee: 'Karim M.', status: 'En attente', priority: 'Basse', deadline: '2025-12-20' },
        { id: 4, title: 'Documentation', project: 'Projet Alpha', employee: 'Non assigné', status: 'En attente', priority: 'Moyenne', deadline: '2025-12-18' },
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

    return (
        <AdminLayout>
            <Head title="Gestion des tâches" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Gestion des Tâches</h1>
                            <p className="text-gray-600 mt-2">Organisez et assignez des tâches aux membres de votre équipe</p>
                        </div>
                        <button
                            onClick={() => setShowCreateForm(!showCreateForm)}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                        >
                            <FaPlus />
                            Nouvelle Tâche
                        </button>
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

                {/* Create Form */}
                {showCreateForm && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Créer une nouvelle tâche</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Titre de la tâche"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>-- Sélectionner un projet --</option>
                                <option>Projet Alpha</option>
                                <option>Projet Beta</option>
                            </select>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>-- Assigner à --</option>
                                <option>Ahmed Ben</option>
                                <option>Sara K.</option>
                            </select>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>-- Priorité --</option>
                                <option>Haute</option>
                                <option>Moyenne</option>
                                <option>Basse</option>
                            </select>
                            <input
                                type="date"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Créer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowCreateForm(false)}
                                    className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Tasks Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Liste des Tâches</h3>
                        <p className="text-gray-600 mt-1">Suivez l'avancement de toutes vos tâches</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tâche</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Projet</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Assigné à</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priorité</th>
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
                                            <div className="flex items-center gap-2">
                                                {task.employee !== 'Non assigné' ? (
                                                    <>
                                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                                                            {task.employee.charAt(0).toUpperCase()}
                                                        </div>
                                                        <span className="text-sm text-gray-900">{task.employee}</span>
                                                    </>
                                                ) : (
                                                    <span className="text-sm text-gray-400 italic">{task.employee}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(task.priority)}`}>
                                                {task.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(task.status)}`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-600">{task.deadline}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                                    <FaEdit />
                                                    Modifier
                                                </button>
                                                <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                                                    <FaTrash />
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
