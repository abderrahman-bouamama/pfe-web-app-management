import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Consumables() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Consommables Disponibles</h2>}
        >
            <Head title="Consommables Disponibles" />

            <div className="p-6">
                <p className="text-gray-700">
                    Liste des consommables disponibles pour vos projets.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
