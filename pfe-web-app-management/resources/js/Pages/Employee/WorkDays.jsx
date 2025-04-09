import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function WorkDays() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Jours Travaillés</h2>}
        >
            <Head title="Jours Travaillés" />

            <div className="p-6">
                <p className="text-gray-700">Bienvenue sur la page des jours travaillés.</p>
                {/* Tu pourras afficher ici un tableau de jours ou un calendrier plus tard */}
            </div>
        </AuthenticatedLayout>
    );
}
