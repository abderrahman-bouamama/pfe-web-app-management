import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function AdminDashboard() {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            <div className="p-8 bg-white shadow rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Bienvenue dans l’espace administrateur</h1>
                <p className="text-gray-600">Vous pouvez gérer les utilisateurs, projets, tâches, formations et certificats ici.</p>
            </div>
        </AdminLayout>
    );
}
