import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Employees() {
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ name: '', email: '', role: '' });
    const [assigningId, setAssigningId] = useState(null);
    const [selectedProject, setSelectedProject] = useState('');

    const employees = [
        { id: 1, name: 'Zahra B.', role: 'Développeur', email: 'zahra@example.com' },
        { id: 2, name: 'Yassine M.', role: 'Chef de projet', email: 'yassine@example.com' },
        { id: 3, name: 'Fatima K.', role: 'Analyste', email: 'fatima@example.com' },
    ];
    const assignProject = (employeeId) => {
        const project = projects.find(p => p.id === parseInt(selectedProject));
        if (project) {
            alert(`Employé ID ${employeeId} attaché au projet "${project.name}"`);
            // TODO: Envoyer la requête à l'API ou backend
            setAssigningId(null);
            setSelectedProject('');
        }
    };

    const projects = [
        { id: 1, name: 'Projet Alpha' },
        { id: 2, name: 'Projet Beta' },
        { id: 3, name: 'Projet Gamma' },
    ];


    const startEditing = (emp) => {
        setEditingId(emp.id);
        setEditData({ name: emp.name, email: emp.email, role: emp.role });
    };

    const saveChanges = () => {
        console.log("Sauvegarde", editData);
        setEditingId(null);
    };

    return (
        <AdminLayout>
            <Head title="Gestion des Employés" />
            <div className="p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des employés</h1>

                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-600 text-sm uppercase font-semibold">
                            <th className="py-3 px-6">Nom</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Rôle</th>
                            <th className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <React.Fragment key={emp.id}>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-6">{emp.name}</td>
                                    <td className="py-3 px-6">{emp.email}</td>
                                    <td className="py-3 px-6">{emp.role}</td>
                                    <td className="py-3 px-6 space-x-2">
                                        <button
                                            onClick={() => startEditing(emp)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Modifier
                                        </button>
                                        <button
                                            onClick={() => setAssigningId(emp.id)}
                                            className="text-green-600 hover:underline"
                                        >
                                            Attacher à un projet
                                        </button>
                                    </td>
                                </tr>

                                {editingId === emp.id && (
                                    <tr>
                                        <td colSpan="4" className="bg-gray-50 p-4">
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <input
                                                    type="text"
                                                    value={editData.name}
                                                    onChange={e => setEditData({ ...editData, name: e.target.value })}
                                                    className="border px-3 py-1 rounded w-full"
                                                    placeholder="Nom"
                                                />
                                                <input
                                                    type="email"
                                                    value={editData.email}
                                                    onChange={e => setEditData({ ...editData, email: e.target.value })}
                                                    className="border px-3 py-1 rounded w-full"
                                                    placeholder="Email"
                                                />
                                                <input
                                                    type="text"
                                                    value={editData.role}
                                                    onChange={e => setEditData({ ...editData, role: e.target.value })}
                                                    className="border px-3 py-1 rounded w-full"
                                                    placeholder="Rôle"
                                                />
                                                <button
                                                    onClick={saveChanges}
                                                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                                >
                                                    Valider
                                                </button>
                                                <button
                                                    onClick={() => setEditingId(null)}
                                                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                                                >
                                                    Annuler
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
