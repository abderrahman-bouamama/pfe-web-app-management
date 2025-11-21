import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaTimesCircle, FaPlus } from 'react-icons/fa';

export default function Leaves({ upcomingLeaves = [], pastLeaves = [] }) {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const { data, setData, post, processing, reset } = useForm({
        type: '',
        start_date: '',
        end_date: '',
        reason: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('employee.leaves.store'), {
            onSuccess: () => {
                reset();
                setShowCreateForm(false);
            }
        });
    };

    const getStatusColor = (status) => {
        const colors = {
            'Approuvé': 'bg-green-100 text-green-800 border-green-200',
            'En attente': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Rejeté': 'bg-red-100 text-red-800 border-red-200',
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Approuvé': return <FaCheckCircle className="text-green-500" />;
            case 'En attente': return <FaClock className="text-yellow-500" />;
            case 'Rejeté': return <FaTimesCircle className="text-red-500" />;
            default: return <FaClock className="text-gray-500" />;
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Congés</h2>}
        >
            <Head title="Congés" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Mes Congés</h1>
                            <p className="text-gray-600 mt-2">Gérez vos demandes de congés</p>
                        </div>
                        <button
                            onClick={() => setShowCreateForm(!showCreateForm)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-md"
                        >
                            <FaPlus />
                            Demander un congé
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Demandes</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {upcomingLeaves.length + pastLeaves.length}
                                    </p>
                                </div>
                                <FaCalendarAlt className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Approuvés</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {[...upcomingLeaves, ...pastLeaves].filter(l => l.status === 'Approuvé').length}
                                    </p>
                                </div>
                                <FaCheckCircle className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En attente</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {[...upcomingLeaves, ...pastLeaves].filter(l => l.status === 'En attente').length}
                                    </p>
                                </div>
                                <FaClock className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Rejetés</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {[...upcomingLeaves, ...pastLeaves].filter(l => l.status === 'Rejeté').length}
                                    </p>
                                </div>
                                <FaTimesCircle className="text-3xl text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {showCreateForm && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Nouvelle demande de congé</h3>
                        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select
                                value={data.type}
                                onChange={e => setData('type', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">-- Type de congé --</option>
                                <option value="Annuel">Annuel</option>
                                <option value="Maladie">Maladie</option>
                                <option value="Urgence">Urgence</option>
                            </select>
                            <input
                                type="date"
                                value={data.start_date}
                                onChange={e => setData('start_date', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Date de début"
                                required
                            />
                            <input
                                type="date"
                                value={data.end_date}
                                onChange={e => setData('end_date', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Date de fin"
                                required
                            />
                            <textarea
                                value={data.reason}
                                onChange={e => setData('reason', e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 md:col-span-2"
                                placeholder="Raison de la demande"
                                rows="3"
                            ></textarea>
                            <div className="flex gap-2 md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {processing ? 'Envoi...' : 'Soumettre'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowCreateForm(false)}
                                    className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Congés à venir */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900">À venir</h3>
                            <p className="text-gray-600 mt-1">Vos prochains congés planifiés</p>
                        </div>
                        <div className="p-6 space-y-4">
                            {upcomingLeaves.length > 0 ? (
                                upcomingLeaves.map(leave => (
                                    <div key={leave.id} className="border-l-4 border-blue-500 bg-gray-50 p-4 rounded-r-lg hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-gray-900">{leave.type}</h4>
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(leave.status)}`}>
                                                {getStatusIcon(leave.status)}
                                                {leave.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Du:</span> {leave.start}
                                            <span className="font-medium ml-2">au:</span> {leave.end}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">Aucun congé à venir</p>
                            )}
                        </div>
                    </div>

                    {/* Historique */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900">Historique</h3>
                            <p className="text-gray-600 mt-1">Vos congés passés</p>
                        </div>
                        <div className="p-6 space-y-4">
                            {pastLeaves.length > 0 ? (
                                pastLeaves.map(leave => (
                                    <div key={leave.id} className="border-l-4 border-purple-500 bg-gray-50 p-4 rounded-r-lg hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-gray-900">{leave.type}</h4>
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(leave.status)}`}>
                                                {getStatusIcon(leave.status)}
                                                {leave.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Du:</span> {leave.start}
                                            <span className="font-medium ml-2">au:</span> {leave.end}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">Aucun historique</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
