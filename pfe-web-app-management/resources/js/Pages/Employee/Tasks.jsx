import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Tasks() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Tâches Accordées</h2>}
        >
            <Head title="Tâches Accordées" />

            <div className="p-6">
                <p className="text-gray-700">
                    Consultez ici les tâches qui vous ont été assignées dans vos projets.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
