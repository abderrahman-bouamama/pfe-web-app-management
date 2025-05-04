import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

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

    return (
        <AdminLayout>
            <Head title="Ajouter un employé" />
            <div className="p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-6">Ajouter un employé</h1>
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            placeholder="Nom"
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>
                    <div>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            placeholder="Email"
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>
                    <div>
                        <select
                            value={data.role}
                            onChange={e => setData('role', e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        >
                            <option value="employee">Employé</option>
                            <option value="admin">Administrateur</option>
                            <option value="chef_projet">Chef de Projet</option>
                        </select>
                        {errors.role && <div className="text-red-500 text-sm">{errors.role}</div>}
                    </div>
                    <div>
                        <input
                            type="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            placeholder="Mot de passe"
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>
                    <div>
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            placeholder="Confirmer le mot de passe"
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {processing ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
