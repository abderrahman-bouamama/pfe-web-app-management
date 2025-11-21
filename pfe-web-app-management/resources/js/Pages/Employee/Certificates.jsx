import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaCertificate, FaEye, FaDownload, FaAward, FaCalendar, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function Certificates() {
    const [searchTerm, setSearchTerm] = useState('');

    // Données mock - seront remplacées par les vraies données du backend
    const certificates = [
        { id: 1, formation: 'Formation Sécurité', date: '2025-03-10', status: 'Attribué', score: '95%', validUntil: '2026-03-10' },
        { id: 2, formation: 'React & Modern JS', date: '2025-02-15', status: 'Attribué', score: '88%', validUntil: '2026-02-15' },
        { id: 3, formation: 'Laravel Avancé', date: '2025-01-12', status: 'Attribué', score: '92%', validUntil: '2026-01-12' },
        { id: 4, formation: 'Gestion de Projet Agile', date: '2024-12-08', status: 'Expiré', score: '85%', validUntil: '2025-12-08' },
    ];

    const getStatusColor = (status) => {
        const colors = {
            'Attribué': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Expiré': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Attribué': return <FaCheckCircle className="text-green-500" />;
            case 'En attente': return <FaClock className="text-yellow-500" />;
            case 'Expiré': return <FaClock className="text-red-500" />;
            default: return <FaCertificate className="text-gray-500" />;
        }
    };

    const filteredCertificates = certificates.filter(cert =>
        cert.formation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Mes e-Certificats</h2>}
        >
            <Head title="Mes Certificats" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Mes e-Certificats</h1>
                        <p className="text-gray-600 mt-2">Consultez et téléchargez vos certificats de formation</p>
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
                                    <p className="text-gray-600 text-sm">Actifs</p>
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
                                    <p className="text-gray-600 text-sm">Score Moyen</p>
                                    <p className="text-2xl font-bold text-gray-900">90%</p>
                                </div>
                                <FaCheckCircle className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Expirés</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {certificates.filter(c => c.status === 'Expiré').length}
                                    </p>
                                </div>
                                <FaClock className="text-3xl text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <input
                        type="text"
                        placeholder="Rechercher par formation..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Certificates Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Mes Certificats</h3>
                        <p className="text-gray-600 mt-1">Liste de tous vos certificats de formation</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Formation</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date d'obtention</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Score</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Validité</th>
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
                                                    <FaCertificate className="text-blue-500" />
                                                    <span className="text-sm font-semibold text-gray-900">{cert.formation}</span>
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
                                                <span className="text-sm text-gray-600">{cert.validUntil}</span>
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
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                            Aucun certificat trouvé
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
