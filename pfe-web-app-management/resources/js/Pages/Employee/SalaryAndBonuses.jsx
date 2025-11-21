import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaMoneyBillWave, FaClock, FaTrophy, FaWallet, FaChartLine } from 'react-icons/fa';

export default function SalaryAndBonuses({ salaries = [] }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Salaire & Primes</h2>}
        >
            <Head title="Salaire & Primes" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Salaire & Primes</h1>
                        <p className="text-gray-600 mt-2">Consultez vos informations salariales</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Mois</p>
                                    <p className="text-2xl font-bold text-gray-900">{salaries.length}</p>
                                </div>
                                <FaMoneyBillWave className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Salaire Moyen</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {salaries.length > 0
                                            ? Math.round(salaries.reduce((acc, s) => acc + (s.base || s.base_salary || 0), 0) / salaries.length)
                                            : 0} MAD
                                    </p>
                                </div>
                                <FaWallet className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Heures Sup. Total</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {salaries.reduce((acc, s) => acc + (s.overtime || s.overtime_pay || 0), 0)} MAD
                                    </p>
                                </div>
                                <FaClock className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Primes Total</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {salaries.reduce((acc, s) => acc + (s.bonus || s.project_bonus || 0), 0)} MAD
                                    </p>
                                </div>
                                <FaTrophy className="text-3xl text-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Salary Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900">Historique des Rémunérations</h3>
                        <p className="text-gray-600 mt-1">Détail de vos salaires par mois</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Mois
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Salaire de base
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Heures supp.
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Primes projet
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {salaries.length > 0 ? (
                                    salaries.map((s, index) => {
                                        const total = (s.base || s.base_salary || 0) + (s.overtime || s.overtime_pay || 0) + (s.bonus || s.project_bonus || 0);
                                        return (
                                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <FaMoneyBillWave className="text-blue-500" />
                                                        <span className="text-sm font-semibold text-gray-900">{s.month || s.period}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm font-medium text-gray-900">{s.base || s.base_salary} MAD</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm font-medium text-gray-900">{s.overtime || s.overtime_pay} MAD</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm font-medium text-gray-900">{s.bonus || s.project_bonus} MAD</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                                                        {total} MAD
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center">
                                            <FaMoneyBillWave className="text-6xl text-gray-300 mx-auto mb-4" />
                                            <p className="text-gray-500 text-lg">Aucune donnée salariale disponible</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
