import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Pages/Layouts/AdminLayout';
import CreateProjectForm from './Components/CreateProjectForm';

export default function Create({ users, clients }) {
    return (
        <AdminLayout>
            <Head title="Créer un projet" />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Créer un nouveau projet</h1>
                <CreateProjectForm users={users} clients={clients} />
            </div>
        </AdminLayout>
    );
}
