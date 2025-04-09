import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SalaryAndBonuses() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Salaire & Primes</h2>}
        >
            <Head title="Salaire & Primes" />

            <div className="p-6">
                <p className="text-gray-700">
                    Cette page vous permet de consulter votre salaire et vos primes.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
