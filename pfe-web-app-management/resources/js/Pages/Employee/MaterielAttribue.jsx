import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FaToolbox, FaExchangeAlt, FaCheckCircle, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

export default function MaterielAttribue({ materials = [] }) {
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const { data, setData, post, processing, reset } = useForm({
        material_id: '',
        reason: '',
    });

    const handleRequestChange = (material) => {
        setSelectedMaterial(material);
        setData('material_id', material.id);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('employee.materials.request-change'), {
            onSuccess: () => {
                reset();
                setSelectedMaterial(null);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Matériel Attribué</h2>}
        >
            <Head title="Matériel Attribué" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Mon Matériel</h1>
                        <p className="text-gray-600 mt-2">Gérez votre matériel attribué</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Matériel</p>
                                    <p className="text-2xl font-bold text-gray-900">{materials.length}</p>
                                </div>
                                <FaToolbox className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Fonctionnel</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {materials.filter(m => m.etat === 'Fonctionnel' || m.status === 'Fonctionnel').length}
                                    </p>
                                </div>
                                <FaCheckCircle className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En Réparation</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {materials.filter(m => m.etat !== 'Fonctionnel' && m.status !== 'Fonctionnel').length}
                                    </p>
                                </div>
                                <FaExclamationTriangle className="text-3xl text-red-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Demandes en cours</p>
                                    <p className="text-2xl font-bold text-gray-900">0</p>
                                </div>
                                <FaExchangeAlt className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {selectedMaterial && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Demander un changement - {selectedMaterial.type}</h3>
                        <form onSubmit={submit} className="space-y-4">
                            <textarea
                                value={data.reason}
                                onChange={e => setData('reason', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                                placeholder="Raison de la demande de changement"
                                rows="4"
                                required
                            ></textarea>
                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {processing ? 'Envoi...' : 'Soumettre la demande'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedMaterial(null)}
                                    className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materials.length > 0 ? (
                        materials.map(m => (
                            <div key={m.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                            <FaToolbox className="text-blue-600" /> {m.type || m.name}
                                        </h3>
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                                            m.etat === 'Fonctionnel' || m.status === 'Fonctionnel'
                                                ? 'bg-green-100 text-green-700 border border-green-200'
                                                : 'bg-red-100 text-red-700 border border-red-200'
                                        }`}>
                                            {(m.etat === 'Fonctionnel' || m.status === 'Fonctionnel') ? (
                                                <FaCheckCircle />
                                            ) : (
                                                <FaExclamationTriangle />
                                            )}
                                            {m.etat || m.status}
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        {m.reparation && (
                                            <p className="text-sm text-gray-600">
                                                <strong className="text-gray-700">Réparation :</strong> {m.reparation}
                                            </p>
                                        )}
                                        {m.datePrise && (
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <FaCalendarAlt className="text-gray-400" />
                                                <strong className="text-gray-700">Date de prise :</strong> {m.datePrise}
                                            </p>
                                        )}
                                        {m.dateRetour && (
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <FaCalendarAlt className="text-gray-400" />
                                                <strong className="text-gray-700">Date de retour :</strong> {m.dateRetour}
                                            </p>
                                        )}
                                        {m.serial_number && (
                                            <p className="text-sm text-gray-600">
                                                <strong className="text-gray-700">Numéro de série :</strong> {m.serial_number}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                                        onClick={() => handleRequestChange(m)}
                                    >
                                        <FaExchangeAlt /> Demander un changement
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <FaToolbox className="text-6xl text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">Aucun matériel attribué</p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
