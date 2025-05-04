import React from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Employees() {
    const { users = [] } = usePage().props;

    return (
        <AdminLayout>
            <Head title="Gestion des Employés" />
            <div className="p-6 bg-white rounded shadow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Liste des employés</h1>
                    <Link
                        href={route('admin.users.create')}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Ajouter un employé
                    </Link>
                </div>

                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-600 text-sm uppercase font-semibold">
                            <th className="py-3 px-6">Nom</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Rôle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(emp => (
                                <tr key={emp.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-6">{emp.name}</td>
                                    <td className="py-3 px-6">{emp.email}</td>
                                    <td className="py-3 px-6 capitalize">{emp.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-4 text-gray-500">
                                    Aucun employé trouvé.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
