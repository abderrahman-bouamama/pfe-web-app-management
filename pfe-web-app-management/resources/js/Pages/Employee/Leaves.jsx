import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Leaves() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Congés</h2>}
        >
            <Head title="Congés" />

            <div className="p-6">
                <p className="text-gray-700">Page des congés de l'employé.</p>
            </div>
        </AuthenticatedLayout>
    );
}
