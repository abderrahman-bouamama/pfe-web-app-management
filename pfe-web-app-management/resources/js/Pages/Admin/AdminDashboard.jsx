import React, { useState } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaUsers, FaProjectDiagram, FaUserTie, FaPhone, FaArrowUp, FaArrowDown, FaEye, FaChartLine } from 'react-icons/fa';

export default function AdminDashboard() {
    const { stats, projects } = usePage().props;
    const [filter, setFilter] = useState('all');

    const getStatusColor = (status) => {
        const colors = {
            'En cours': 'bg-blue-100 text-blue-800 border-blue-200',
            'Terminé': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Annulé': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status === filter);

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Dashboard Administrateur</h1>
                        <p className="text-gray-600 mt-2">Vue d'ensemble de votre plateforme</p>
                    </div>
                    <Link
                        href={route('admin.projects')}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                    >
                        <FaChartLine />
                        Voir tous les projets
                    </Link>
                </div>

                {/* Stat Cards avec animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium mb-1">Clients</p>
                                <h2 className="text-4xl font-bold">{stats.clients}</h2>
                                <div className="flex items-center gap-1 mt-2 text-sm">
                                    <FaArrowUp className="text-xs" />
                                    <span>+12% ce mois</span>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-full">
                                <FaUsers className="text-3xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100 text-sm font-medium mb-1">Projets</p>
                                <h2 className="text-4xl font-bold">{stats.projects}</h2>
                                <div className="flex items-center gap-1 mt-2 text-sm">
                                    <FaArrowUp className="text-xs" />
                                    <span>+8% ce mois</span>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-full">
                                <FaProjectDiagram className="text-3xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-100 text-sm font-medium mb-1">Personnel</p>
                                <h2 className="text-4xl font-bold">{stats.personnels}</h2>
                                <div className="flex items-center gap-1 mt-2 text-sm">
                                    <FaArrowUp className="text-xs" />
                                    <span>+5% ce mois</span>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-full">
                                <FaUsers className="text-3xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-orange-100 text-sm font-medium mb-1">Chefs de Projet</p>
                                <h2 className="text-4xl font-bold">{stats.chefsProjet}</h2>
                                <div className="flex items-center gap-1 mt-2 text-sm">
                                    <FaArrowDown className="text-xs" />
                                    <span>-2% ce mois</span>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-full">
                                <FaUserTie className="text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table des projets modernisée */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Projets Actuels</h3>
                                <p className="text-gray-600 mt-1">Gérez et suivez vos projets en temps réel</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    Tous
                                </button>
                                <button
                                    onClick={() => setFilter('En cours')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'En cours' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    En cours
                                </button>
                                <button
                                    onClick={() => setFilter('Terminé')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'Terminé' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    Terminés
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Projet</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Chef de Projet</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-semibold text-gray-900">{project.name}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold mr-3">
                                                        {project.chef?.charAt(0) || '?'}
                                                    </div>
                                                    <span className="text-sm text-gray-900">{project.chef}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaPhone className="text-gray-400" />
                                                    <span>{project.contact}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                                                    <FaEye />
                                                    Voir détails
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                            Aucun projet trouvé pour ce filtre
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
}
