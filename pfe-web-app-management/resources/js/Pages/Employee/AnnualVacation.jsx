import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AnnualVacation() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Vacances Annuelles</h2>}
        >
            <Head title="Vacances Annuelles" />

            <div className="p-6">
                <p className="text-gray-700">Consultez ou demandez vos vacances annuelles ici.</p>
            </div>
        </AuthenticatedLayout>
    );
}
