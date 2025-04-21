import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaUsers, FaProjectDiagram, FaUserTie, FaPhone } from 'react-icons/fa';

export default function AdminDashboard() {
    const stats = {
        clients: 52,
        projects: 12,
        personnels: 18,
        chefsProjet: 4,
    };

    const projects = [
        {
            id: 1,
            name: "Projet site web e-commerce en faveur de bceII",
            chef: "Mme Zahra",
            status: "En cours",
            contact: "+212 600-123456"
        },
        {
            id: 2,
            name: "Projet dashboard admin en faveur de TIEC",
            chef: "M. Yassine",
            status: "Terminé",
            contact: "+212 611-654321"
        },
        {
            id: 3,
            name: "Projet application web société somero SARL",
            chef: "Mme Salma",
            status: "En attente",
            contact: "+212 677-888999"
        }
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="p-6 space-y-8">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard Administrateur</h1>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-blue-100 p-4 rounded shadow text-center">
                        <FaUsers className="text-2xl text-blue-600 mx-auto" />
                        <p className="text-gray-600 mt-2">Clients</p>
                        <h2 className="text-2xl font-bold text-blue-800">{stats.clients}</h2>
                    </div>
                    <div className="bg-green-100 p-4 rounded shadow text-center">
                        <FaProjectDiagram className="text-2xl text-green-600 mx-auto" />
                        <p className="text-gray-600 mt-2">Projets</p>
                        <h2 className="text-2xl font-bold text-green-800">{stats.projects}</h2>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded shadow text-center">
                        <FaUsers className="text-2xl text-yellow-600 mx-auto" />
                        <p className="text-gray-600 mt-2">Personnel</p>
                        <h2 className="text-2xl font-bold text-yellow-700">{stats.personnels}</h2>
                    </div>
                    <div className="bg-purple-100 p-4 rounded shadow text-center">
                        <FaUserTie className="text-2xl text-purple-600 mx-auto" />
                        <p className="text-gray-600 mt-2">Chefs de Projet</p>
                        <h2 className="text-2xl font-bold text-purple-800">{stats.chefsProjet}</h2>
                    </div>
                </div>

                {/* Table des projets */}
                <div className="bg-white p-6 rounded shadow mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Projets Actuels</h3>
                    <table className="min-w-full border text-sm text-gray-700">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Projet</th>
                                <th className="px-4 py-2 text-left">Chef de Projet</th>
                                <th className="px-4 py-2 text-left">Statut</th>
                                <th className="px-4 py-2 text-left">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2">{project.name}</td>
                                    <td className="px-4 py-2">{project.chef}</td>
                                    <td className="px-4 py-2 font-medium text-blue-600">{project.status}</td>
                                    <td className="px-4 py-2 flex items-center gap-2">
                                        <FaPhone className="text-gray-500" />
                                        <span>{project.contact}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
