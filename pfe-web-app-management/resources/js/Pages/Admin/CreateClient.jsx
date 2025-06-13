import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import CreateClientForm from './Components/CreateClientForm';

const CreateClient = () => {
    return (
        <AdminLayout>
            <Head title="Ajouter un client" />
            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Ajouter un client</h1>
                <CreateClientForm />
            </div>
        </AdminLayout>
    );
};

export default CreateClient;
