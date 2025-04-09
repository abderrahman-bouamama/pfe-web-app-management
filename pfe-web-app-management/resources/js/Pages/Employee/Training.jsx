import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Training() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Formations</h2>}
        >
            <Head title="Formations" />

            <div className="p-6">
                <p className="text-gray-700">
                    Retrouvez ici toutes vos formations terminées ou recommandées.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
