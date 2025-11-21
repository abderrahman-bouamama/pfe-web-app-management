import React, { useState } from 'react';
import { Link, Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaUserPlus, FaEdit, FaTrash, FaSearch, FaUserTie, FaUser, FaShieldAlt, FaEnvelope } from 'react-icons/fa';

export default function Employees() {
    const { users = [] } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');

    const getRoleIcon = (role) => {
        switch(role) {
            case 'admin': return <FaShieldAlt className="text-red-500" />;
            case 'chef_projet': return <FaUserTie className="text-blue-500" />;
            default: return <FaUser className="text-gray-500" />;
        }
    };

    const getRoleBadge = (role) => {
        const badges = {
            'admin': 'bg-red-100 text-red-800 border-red-200',
            'chef_projet': 'bg-blue-100 text-blue-800 border-blue-200',
            'employee': 'bg-gray-100 text-gray-800 border-gray-200'
        };
        return badges[role] || badges['employee'];
    };

    const getRoleLabel = (role) => {
        const labels = {
            'admin': 'Administrateur',
            'chef_projet': 'Chef de Projet',
            'employee': 'Employé'
        };
        return labels[role] || role;
    };

    const handleDelete = (id, name) => {
        if (confirm(`Êtes-vous sûr de vouloir supprimer ${name} ?`)) {
            router.delete(route('admin.users.destroy', id));
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        return matchesSearch && matchesRole;
    });

    return (
        <AdminLayout>
            <Head title="Gestion des Employés" />
            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Gestion des Employés</h1>
                            <p className="text-gray-600 mt-2">Gérez votre équipe et leurs rôles</p>
                        </div>
                        <Link
                            href={route('admin.users.create')}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                        >
                            <FaUserPlus />
                            Ajouter un employé
                        </Link>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Employés</p>
                                    <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                                </div>
                                <FaUser className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Chefs de Projet</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {users.filter(u => u.role === 'chef_projet').length}
                                    </p>
                                </div>
                                <FaUserTie className="text-3xl text-purple-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Administrateurs</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {users.filter(u => u.role === 'admin').length}
                                    </p>
                                </div>
                                <FaShieldAlt className="text-3xl text-red-500" />
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
                                placeholder="Rechercher par nom ou email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilterRole('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterRole === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Tous
                            </button>
                            <button
                                onClick={() => setFilterRole('admin')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterRole === 'admin' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Admin
                            </button>
                            <button
                                onClick={() => setFilterRole('chef_projet')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterRole === 'chef_projet' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Chefs
                            </button>
                            <button
                                onClick={() => setFilterRole('employee')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors flex-1 ${filterRole === 'employee' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Employés
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Employé
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Rôle
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map(emp => (
                                        <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-lg mr-3">
                                                        {emp.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-900">{emp.name}</div>
                                                        <div className="text-xs text-gray-500">ID: {emp.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaEnvelope className="text-gray-400" />
                                                    {emp.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {getRoleIcon(emp.role)}
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getRoleBadge(emp.role)}`}>
                                                        {getRoleLabel(emp.role)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => alert('Fonction de modification à implémenter')}
                                                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                                                    >
                                                        <FaEdit />
                                                        Modifier
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(emp.id, emp.name)}
                                                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                                    >
                                                        <FaTrash />
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                                            Aucun employé trouvé pour ces critères de recherche
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
