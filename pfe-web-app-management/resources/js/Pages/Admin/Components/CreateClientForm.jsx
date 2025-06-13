import React from 'react';
import { useForm, Link, router } from '@inertiajs/react';

const CreateClientForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        company: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.clients.store'), {
            onSuccess: () => reset()
        });
    };

    return (
        <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded shadow">
            <div>
                <input
                    type="text"
                    placeholder="Nom"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Téléphone"
                    value={data.phone}
                    onChange={e => setData('phone', e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Entreprise"
                    value={data.company}
                    onChange={e => setData('company', e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.company && <div className="text-red-500 text-sm">{errors.company}</div>}
            </div>

            <div className="flex justify-end gap-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {processing ? 'Ajout en cours...' : 'Enregistrer'}
                </button>
                <Link
                    href={route('admin.clients')}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                    Annuler
                </Link>
            </div>
        </form>
    );
};

export default CreateClientForm;
