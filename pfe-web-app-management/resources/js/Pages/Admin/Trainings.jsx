import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaPlus, FaEdit, FaTrash, FaGraduationCap, FaUsers, FaCertificate, FaCheckCircle, FaClock, FaBook } from 'react-icons/fa';

export default function Trainings() {
    const [showCreateForm, setShowCreateForm] = useState(false);

    // Données exemple
    const trainings = [
        { id: 1, title: 'Formation Sécurité', target: 'Tous les techniciens', status: 'Complétée', participants: 12, certificate: 'Attribué', duration: '3 jours' },
        { id: 2, title: 'React & Modern JS', target: 'Développeurs Frontend', status: 'En cours', participants: 8, certificate: 'En attente', duration: '5 jours' },
        { id: 3, title: 'Gestion de Projet Agile', target: 'Chefs de projet', status: 'Planifiée', participants: 5, certificate: 'Non attribué', duration: '2 jours' },
        { id: 4, title: 'Laravel Avancé', target: 'Développeurs Backend', status: 'En cours', participants: 10, certificate: 'En attente', duration: '4 jours' },
    ];

    const getStatusColor = (status) => {
        const colors = {
            'Complétée': 'bg-green-100 text-green-800 border-green-200',
            'En cours': 'bg-blue-100 text-blue-800 border-blue-200',
            'Planifiée': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Annulée': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getCertificateColor = (cert) => {
        const colors = {
            'Attribué': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Non attribué': 'bg-gray-100 text-gray-800 border-gray-200'
        };
        return colors[cert] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    return (
        <AdminLayout>
            <Head title="Gestion des formations" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Gestion des Formations</h1>
                            <p className="text-gray-600 mt-2">Développez les compétences de votre équipe</p>
                        </div>
                        <button
                            onClick={() => setShowCreateForm(!showCreateForm)}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                        >
                            <FaPlus />
                            Nouvelle Formation
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Formations</p>
                                    <p className="text-2xl font-bold text-gray-900">{trainings.length}</p>
                                </div>
                                <FaGraduationCap className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Complétées</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {trainings.filter(t => t.status === 'Complétée').length}
                                    </p>
                                </div>
                                <FaCheckCircle className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Participants</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {trainings.reduce((sum, t) => sum + t.participants, 0)}
                                    </p>
                                </div>
                                <FaUsers className="text-3xl text-purple-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Certificats</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {trainings.filter(t => t.certificate === 'Attribué').length}
                                    </p>
                                </div>
                                <FaCertificate className="text-3xl text-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Create Form */}
                {showCreateForm && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Créer une nouvelle formation</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Titre de la formation"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Employés ciblés"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Durée (ex: 3 jours)"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>-- Statut --</option>
                                <option>Planifiée</option>
                                <option>En cours</option>
                                <option>Complétée</option>
                            </select>
                            <div className="md:col-span-2">
                                <textarea
                                    placeholder="Description de la formation"
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 flex gap-2">
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

                {/* Trainings Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Liste des Formations</h3>
                        <p className="text-gray-600 mt-1">Gérez toutes les formations de votre entreprise</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Formation</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Public Cible</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Durée</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Participants</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Certificat</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {trainings.map((training) => (
                                    <tr key={training.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <FaBook className="text-blue-500" />
                                                <span className="text-sm font-semibold text-gray-900">{training.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaUsers className="text-gray-400" />
                                                {training.target}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <FaClock className="text-gray-400" />
                                                {training.duration}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                                                    {training.participants} personnes
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(training.status)}`}>
                                                {training.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCertificateColor(training.certificate)}`}>
                                                {training.certificate}
                                            </span>
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
