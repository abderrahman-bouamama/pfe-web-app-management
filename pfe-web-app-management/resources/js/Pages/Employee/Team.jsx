import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Team() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Équipe du Projet</h2>}
        >
            <Head title="Équipe du Projet" />

            <div className="p-6">
                <p className="text-gray-700">
                    Visualisez les membres de votre équipe projet et leurs rôles.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
