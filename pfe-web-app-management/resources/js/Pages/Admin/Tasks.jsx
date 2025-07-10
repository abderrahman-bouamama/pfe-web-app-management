import React, { useState } from 'react';
import { Head, usePage, router, Link } from '@inertiajs/react';
import AdminLayout from '@/Pages/Layouts/AdminLayout';

export default function Tasks() {
    const { tasks, projects, users } = usePage().props;

    const [editTask, setEditTask] = useState(null);

    const handleDelete = (id) => {
        if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
            router.delete(route('admin.tasks.destroy', id));
        }
    };

    const handleEditChange = (e) => {
        setEditTask({ ...editTask, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        router.put(route('admin.tasks.update', editTask.id), editTask, {
            onSuccess: () => setEditTask(null),
        });
    };

    return (
        <AdminLayout>
            <Head title="Gestion des tâches" />

            <div className="p-8 bg-white shadow rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Gestion des tâches</h1>

                <div className="mb-4 text-right">
                    <Link
                        href={route('admin.tasks.create')}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
                    >
                        + Nouvelle tâche
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Tâche</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Projet</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Employé assigné</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Statut</th>
                                <th className="px-4 py-2 text-left text-sm text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    {editTask?.id === task.id ? (
                                        <>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={editTask.title}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded px-2 py-1"
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                <select
                                                    name="project_id"
                                                    value={editTask.project_id}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded px-2 py-1"
                                                >
                                                    <option value="">-- Projet --</option>
                                                    {projects.map(p => (
                                                        <option key={p.id} value={p.id}>{p.title}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <select
                                                    name="user_id"
                                                    value={editTask.user_id}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded px-2 py-1"
                                                >
                                                    <option value="">-- Employé --</option>
                                                    {users.map(u => (
                                                        <option key={u.id} value={u.id}>{u.name}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <select
                                                    name="status"
                                                    value={editTask.status}
                                                    onChange={handleEditChange}
                                                    className="w-full border rounded px-2 py-1"
                                                >
                                                    <option value="En attente">En attente</option>
                                                    <option value="En cours">En cours</option>
                                                    <option value="Terminée">Terminée</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2 space-x-2">
                                                <button
                                                    onClick={handleEditSubmit}
                                                    className="text-white bg-blue-600 px-2 py-1 rounded"
                                                >
                                                    Sauvegarder
                                                </button>
                                                <button
                                                    onClick={() => setEditTask(null)}
                                                    className="text-white bg-gray-500 px-2 py-1 rounded"
                                                >
                                                    Annuler
                                                </button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="px-4 py-2">{task.title}</td>
                                            <td className="px-4 py-2">{task.project?.title || '—'}</td>
                                            <td className="px-4 py-2">{task.user?.name || '—'}</td>
                                            <td className="px-4 py-2">{task.status}</td>
                                            <td className="px-4 py-2 space-x-2">
                                                <button
                                                    onClick={() => setEditTask(task)}
                                                    className="text-blue-600 hover:underline text-sm"
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(task.id)}
                                                    className="text-red-600 hover:underline text-sm"
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
}
