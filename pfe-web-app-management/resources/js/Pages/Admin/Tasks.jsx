import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/Pages/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';


export default function Tasks() {
    const { tasks = []} = usePage().props;
    return (
        <AdminLayout>
            <Head title="Gestion des tâches" />

            <div className="p-8 bg-white shadow rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Gestion des tâches</h1>


                <div className="space-y-4">
                    <Link
                        href={route('admin.tasks.create')} 
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
                    >
                        + Nouvelle tâche
                    </Link>



                   
                    <div className="overflow-x-auto mt-6">
                        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm text-gray-600">Tâche</th>
                                    <th className="px-4 py-2 text-left text-sm text-gray-600">Projet</th>
                                    <th className="px-4 py-2 text-left text-sm text-gray-600">Employé assigné</th>
                                    <th className="px-4 py-2 text-left text-sm text-gray-600">Statut</th>
                                    <th className="px-4 py-2 text-left text-sm text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Configurer API</td>
                                    <td className="px-4 py-2">Projet Alpha</td>
                                    <td className="px-4 py-2">Ahmed Ben</td>
                                    <td className="px-4 py-2 text-green-600 font-medium">En cours</td>
                                    <td className="px-4 py-2">
                                        <button className="text-blue-600 hover:underline text-sm mr-2">Modifier</button>
                                        <button className="text-red-600 hover:underline text-sm">Supprimer</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
