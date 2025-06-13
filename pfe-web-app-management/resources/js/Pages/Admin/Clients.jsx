import React from "react";
import { Head, usePage, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

const Clients = () => {
    const { clients } = usePage().props;

    return (
        <AdminLayout>
            <Head title="Gestion des clients" />
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Liste des clients</h1>
                    <Link
                        href={route('admin.clients.create')}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Ajouter un client
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left">Nom</th>
                                <th className="px-6 py-3 text-left">Email</th>
                                <th className="px-6 py-3 text-left">Téléphone</th>
                                <th className="px-6 py-3 text-left">Entreprise</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {clients.length > 0 ? (
                                clients.map(client => (
                                    <tr key={client.id}>
                                        <td className="px-6 py-4">{client.name}</td>
                                        <td className="px-6 py-4">{client.email || '—'}</td>
                                        <td className="px-6 py-4">{client.phone || '—'}</td>
                                        <td className="px-6 py-4">{client.company || '—'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                        Aucun client trouvé.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Clients;
