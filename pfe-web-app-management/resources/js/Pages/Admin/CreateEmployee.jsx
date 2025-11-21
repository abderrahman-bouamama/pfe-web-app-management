import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaUser, FaEnvelope, FaLock, FaUserShield, FaArrowLeft, FaSave } from 'react-icons/fa';

export default function CreateEmployee() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        role: 'employee',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.users.store'));
    };

    const getRoleDescription = (role) => {
        const descriptions = {
            'employee': 'Accès limité aux fonctionnalités de base',
            'chef_projet': 'Gestion de projets et d\'équipes',
            'admin': 'Accès complet à toutes les fonctionnalités'
        };
        return descriptions[role] || '';
    };

    return (
        <AdminLayout>
            <Head title="Ajouter un employé" />
            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href={route('admin.users.index')}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors"
                    >
                        <FaArrowLeft />
                        Retour à la liste
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900">Ajouter un Employé</h1>
                    <p className="text-gray-600 mt-2">Créez un nouveau compte pour un membre de votre équipe</p>
                </div>

                {/* Form Card */}
                <div className="max-w-3xl">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
                            <h2 className="text-2xl font-bold text-white">Informations de l'employé</h2>
                            <p className="text-blue-100 mt-1">Remplissez tous les champs requis</p>
                        </div>

                        <form onSubmit={submit} className="p-6 space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <FaUser className="inline mr-2" />
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="Ex: Ahmed Ben Ali"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.name && (
                                    <div className="mt-2 text-red-600 text-sm flex items-center gap-1">
                                        <span>⚠</span>
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <FaEnvelope className="inline mr-2" />
                                    Adresse email
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="exemple@entreprise.com"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && (
                                    <div className="mt-2 text-red-600 text-sm flex items-center gap-1">
                                        <span>⚠</span>
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            {/* Role Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <FaUserShield className="inline mr-2" />
                                    Rôle
                                </label>
                                <select
                                    value={data.role}
                                    onChange={e => setData('role', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                        errors.role ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="employee">Employé</option>
                                    <option value="chef_projet">Chef de Projet</option>
                                    <option value="admin">Administrateur</option>
                                </select>
                                <p className="mt-2 text-sm text-gray-500 italic">
                                    {getRoleDescription(data.role)}
                                </p>
                                {errors.role && (
                                    <div className="mt-2 text-red-600 text-sm flex items-center gap-1">
                                        <span>⚠</span>
                                        {errors.role}
                                    </div>
                                )}
                            </div>

                            {/* Password Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <FaLock className="inline mr-2" />
                                        Mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                            errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.password && (
                                        <div className="mt-2 text-red-600 text-sm flex items-center gap-1">
                                            <span>⚠</span>
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <FaLock className="inline mr-2" />
                                        Confirmer le mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={e => setData('password_confirmation', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-blue-800">
                                    <strong>Note:</strong> Le mot de passe doit contenir au moins 8 caractères.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
                                >
                                    {processing ? (
                                        <>
                                            <span className="animate-spin">⏳</span>
                                            Enregistrement...
                                        </>
                                    ) : (
                                        <>
                                            <FaSave />
                                            Enregistrer l'employé
                                        </>
                                    )}
                                </button>
                                <Link
                                    href={route('admin.users.index')}
                                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                                >
                                    Annuler
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
