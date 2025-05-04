import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import CreateProjectForm from './Components/CreateProjectForm';

const Projects = () => {
    const { projects, users, clients } = usePage().props; // ✅ importer clients
    const [editProject, setEditProject] = useState(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    const handleDelete = (id) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
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

    return (
        <AdminLayout>
            <Head title="Gestion des projets" />
            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des projets</h1>

                <div className="mb-6">
                    <CreateProjectForm users={users} clients={clients} />
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left">Nom</th>
                                <th className="px-6 py-3 text-left">Responsable</th>
                                <th className="px-6 py-3 text-left">Client</th>
                                <th className="px-6 py-3 text-left">Statut</th>
                                <th className="px-6 py-3 text-left">Début</th>
                                <th className="px-6 py-3 text-left">Fin</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    {editProject?.id === project.id ? (
                                        <>
                                            <td className="px-6 py-4">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={editProject.title}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <select
                                                    name="responsible_id"
                                                    value={editProject.responsible_id || ''}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded"
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
                                                    className="w-full border rounded"
                                                >
                                                    <option value="">-- Choisir un client --</option>
                                                    {clients.map(client => (
                                                        <option key={client.id} value={client.id}>
                                                            {client.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="px-6 py-4">
                                                <select
                                                    name="status"
                                                    value={editProject.status}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded"
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
                                                    className="w-full border rounded"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <input
                                                    type="date"
                                                    name="end_date"
                                                    value={editProject.end_date}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded"
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button
                                                    onClick={handleEditSubmit}
                                                    className="px-3 py-1 bg-blue-600 text-white rounded"
                                                >
                                                    Sauvegarder
                                                </button>
                                                <button
                                                    onClick={() => setEditProject(null)}
                                                    className="px-3 py-1 bg-gray-400 text-white rounded"
                                                >
                                                    Annuler
                                                </button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="px-6 py-4 text-sm">{project.title}</td>
                                            <td className="px-6 py-4 text-sm">{project.responsible?.name || '—'}</td>
                                            <td className="px-6 py-4 text-sm">{project.client?.name || '—'}</td>
                                            <td className="px-6 py-4 text-sm">{project.status}</td>
                                            <td className="px-6 py-4 text-sm">{project.start_date}</td>
                                            <td className="px-6 py-4 text-sm">{project.end_date}</td>
                                            <td className="px-6 py-4 text-right flex justify-end gap-2">
                                                <button
                                                    onClick={() => setEditProject(project)}
                                                    className="px-3 py-1 bg-green-600 text-white rounded"
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(project.id)}
                                                    className="px-3 py-1 bg-red-500 text-white rounded"
                                                >
                                                    Supprimer
                                                </button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Projects;
