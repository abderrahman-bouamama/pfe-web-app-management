import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaCertificate, FaEye, FaDownload, FaAward, FaUser, FaCalendar, FaCheckCircle, FaClock, FaTimesCircle, FaSearch } from 'react-icons/fa';

export default function Certificates() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    // Données exemple
    const certificates = [
        { id: 1, employee: 'Ahmed B.', formation: 'Formation Sécurité', date: '2025-03-10', status: 'Attribué', score: '95%' },
        { id: 2, employee: 'Sara K.', formation: 'React & Modern JS', date: '2025-03-15', status: 'En attente', score: '88%' },
        { id: 3, employee: 'Karim M.', formation: 'Laravel Avancé', date: '2025-03-12', status: 'Attribué', score: '92%' },
        { id: 4, employee: 'Fatima Z.', formation: 'Gestion de Projet Agile', date: '2025-03-08', status: 'Rejeté', score: '65%' },
        { id: 5, employee: 'Mohamed A.', formation: 'Formation Sécurité', date: '2025-03-14', status: 'Attribué', score: '98%' },
    ];

    const getStatusColor = (status) => {
        const colors = {
            'Attribué': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Rejeté': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Attribué': return <FaCheckCircle className="text-green-500" />;
            case 'En attente': return <FaClock className="text-yellow-500" />;
            case 'Rejeté': return <FaTimesCircle className="text-red-500" />;
            default: return <FaCertificate className="text-gray-500" />;
        }
    };

    const filteredCertificates = certificates.filter(cert => {
        const matchesSearch = cert.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            cert.formation.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || cert.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <AdminLayout>
            <Head title="Gestion des e-Certificats" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Gestion des e-Certificats</h1>
                        <p className="text-gray-600 mt-2">Visualisez et gérez tous les certificats attribués</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Certificats</p>
                                    <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
                                </div>
                                <FaCertificate className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Attribués</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {certificates.filter(c => c.status === 'Attribué').length}
                                    </p>
                                </div>
                                <FaAward className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En attente</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {certificates.filter(c => c.status === 'En attente').length}
                                    </p>
                                </div>
                                <FaClock className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Rejetés</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {certificates.filter(c => c.status === 'Rejeté').length}
                                    </p>
                                </div>
                                <FaTimesCircle className="text-3xl text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Rechercher par employé ou formation..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilterStatus('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterStatus === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Tous
                            </button>
                            <button
                                onClick={() => setFilterStatus('Attribué')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterStatus === 'Attribué' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Attribués
                            </button>
                            <button
                                onClick={() => setFilterStatus('En attente')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterStatus === 'En attente' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                En attente
                            </button>
                            <button
                                onClick={() => setFilterStatus('Rejeté')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterStatus === 'Rejeté' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Rejetés
                            </button>
                        </div>
                    </div>
                </div>

                {/* Certificates Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Liste des Certificats</h3>
                        <p className="text-gray-600 mt-1">Gérez les certificats de formation de vos employés</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Employé</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Formation</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date d'obtention</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Score</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredCertificates.length > 0 ? (
                                    filteredCertificates.map((cert) => (
                                        <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                                                        {cert.employee.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span className="text-sm font-semibold text-gray-900">{cert.employee}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <FaCertificate className="text-blue-500" />
                                                    <span className="text-sm text-gray-900">{cert.formation}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaCalendar className="text-gray-400" />
                                                    {cert.date}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        parseInt(cert.score) >= 90 ? 'bg-green-100 text-green-800' :
                                                        parseInt(cert.score) >= 75 ? 'bg-blue-100 text-blue-800' :
                                                        parseInt(cert.score) >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                        {cert.score}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    {getStatusIcon(cert.status)}
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(cert.status)}`}>
                                                        {cert.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                                        <FaEye />
                                                        Voir
                                                    </button>
                                                    {cert.status === 'Attribué' && (
                                                        <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                                                            <FaDownload />
                                                            Télécharger
                                                        </button>
                                                    )}
                                                    {cert.status === 'En attente' && (
                                                        <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                                                            <FaAward />
                                                            Attribuer
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                            Aucun certificat trouvé pour ces critères
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
