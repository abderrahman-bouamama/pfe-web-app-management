import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import CreateProjectForm from './Components/CreateProjectForm';
import { FaPlus, FaSave, FaTimes, FaEdit, FaTrash, FaUser, FaCalendar, FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
    const { projects, users, clients } = usePage().props;
    const [editProject, setEditProject] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleDelete = (id, title) => {
        if (confirm(`Êtes-vous sûr de vouloir supprimer le projet "${title}" ?`)) {
            router.delete(route('admin.projects.destroy', id));
        }
    };

    const handleEditChange = (e) => {
        setEditProject({ ...editProject, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        router.put(route('admin.projects.update', editProject.id), editProject, {
            onSuccess: () => setEditProject(null),
        });
    };

    const getStatusColor = (status) => {
        const colors = {
            'En cours': 'bg-blue-100 text-blue-800 border-blue-200',
            'Terminé': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Annulé': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    return (
        <AdminLayout>
            <Head title="Gestion des projets" />
            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Gestion des Projets</h1>
                            <p className="text-gray-600 mt-2">Créez et gérez vos projets en toute simplicité</p>
                        </div>
                        <button
                            onClick={() => setShowCreateForm(!showCreateForm)}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                        >
                            {showCreateForm ? <FaTimes /> : <FaPlus />}
                            {showCreateForm ? 'Fermer' : 'Nouveau Projet'}
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Projets</p>
                                    <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                                </div>
                                <FaProjectDiagram className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Terminés</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {projects.filter(p => p.status === 'Terminé').length}
                                    </p>
                                </div>
                                <FaProjectDiagram className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En cours</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {projects.filter(p => p.status === 'En cours').length}
                                    </p>
                                </div>
                                <FaProjectDiagram className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En attente</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {projects.filter(p => p.status === 'En attente').length}
                                    </p>
                                </div>
                                <FaProjectDiagram className="text-3xl text-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Create Form */}
                {showCreateForm && (
                    <div className="mb-6 animate-fade-in">
                        <CreateProjectForm users={users} clients={clients} />
                    </div>
                )}

                {/* Projects Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Liste des Projets</h3>
                        <p className="text-gray-600 mt-1">Gérez et suivez tous vos projets</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nom du Projet</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Responsable</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dates</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {projects.length > 0 ? (
                                    projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                            {editProject?.id === project.id ? (
                                                <>
                                                    <td className="px-6 py-4">
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            value={editProject.title}
                                                            onChange={handleEditChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <select
                                                            name="responsible_id"
                                                            value={editProject.responsible_id || ''}
                                                            onChange={handleEditChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            <option value="">-- Choisir --</option>
                                                            {users.map(user => (
                                                                <option key={user.id} value={user.id}>{user.name}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <select
                                                            name="client_id"
                                                            value={editProject.client_id || ''}
                                                            onChange={handleEditChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            <option value="">-- Client --</option>
                                                            {clients.map(client => (
                                                                <option key={client.id} value={client.id}>{client.name}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <select
                                                            name="status"
                                                            value={editProject.status}
                                                            onChange={handleEditChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            <option value="En attente">En attente</option>
                                                            <option value="En cours">En cours</option>
                                                            <option value="Terminé">Terminé</option>
                                                            <option value="Annulé">Annulé</option>
                                                        </select>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <input
                                                            type="date"
                                                            name="start_date"
                                                            value={editProject.start_date}
                                                            onChange={handleEditChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
                                                        />
                                                        <input
                                                            type="date"
                                                            name="end_date"
                                                            value={editProject.end_date}
                                                            onChange={handleEditChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                onClick={handleEditSubmit}
                                                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                                                            >
                                                                <FaSave />
                                                                Sauvegarder
                                                            </button>
                                                            <button
                                                                onClick={() => setEditProject(null)}
                                                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                                                            >
                                                                <FaTimes />
                                                                Annuler
                                                            </button>
                                                        </div>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm font-semibold text-gray-900">{project.title}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            {project.responsible ? (
                                                                <>
                                                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                                                                        {project.responsible.name.charAt(0).toUpperCase()}
                                                                    </div>
                                                                    <span className="text-sm text-gray-900">{project.responsible.name}</span>
                                                                </>
                                                            ) : (
                                                                <span className="text-sm text-gray-400">Non assigné</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="text-sm text-gray-900">{project.client?.name || '—'}</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                                                            {project.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-600">
                                                            <div className="flex items-center gap-1 mb-1">
                                                                <FaCalendar className="text-xs text-gray-400" />
                                                                <span className="font-medium">Début:</span> {project.start_date}
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <FaCalendar className="text-xs text-gray-400" />
                                                                <span className="font-medium">Fin:</span> {project.end_date}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                onClick={() => setEditProject(project)}
                                                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                                            >
                                                                <FaEdit />
                                                                Modifier
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(project.id, project.title)}
                                                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                                            >
                                                                <FaTrash />
                                                                Supprimer
                                                            </button>
                                                        </div>
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                            Aucun projet trouvé. Créez votre premier projet !
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Projects;
