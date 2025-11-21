import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaProjectDiagram, FaUserTie, FaCalendarAlt, FaDownload, FaTasks } from 'react-icons/fa';

export default function MyProjects({ projects = [] }) {
    const getProgressColor = (progress) => {
        if (progress >= 75) return 'bg-green-500';
        if (progress >= 50) return 'bg-blue-500';
        if (progress >= 25) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Mes Projets</h2>}
        >
            <Head title="Mes Projets" />

            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Mes Projets</h1>
                        <p className="text-gray-600 mt-2">Suivez l'avancement de vos projets</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Projets</p>
                                    <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                                </div>
                                <FaProjectDiagram className="text-3xl text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Terminés</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {projects.filter(p => p.status === 'Terminé').length}
                                    </p>
                                </div>
                                <FaDownload className="text-3xl text-green-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En cours</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {projects.filter(p => p.status === 'En cours').length}
                                    </p>
                                </div>
                                <FaTasks className="text-3xl text-yellow-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">En attente</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {projects.filter(p => p.status === 'En attente').length}
                                    </p>
                                </div>
                                <FaCalendarAlt className="text-3xl text-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                            <FaProjectDiagram className="text-blue-600" />
                                            {project.name || project.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        {(project.manager || project.responsible) && (
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <FaUserTie className="text-gray-400" />
                                                <span className="font-medium">Responsable:</span>
                                                {project.manager || project.responsible?.name}
                                            </p>
                                        )}

                                        {project.startDate && project.endDate && (
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <FaCalendarAlt className="text-gray-400" />
                                                <span className="font-medium">Du</span> {project.startDate}
                                                <span className="font-medium">au</span> {project.endDate}
                                            </p>
                                        )}

                                        {project.start_date && project.end_date && (
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <FaCalendarAlt className="text-gray-400" />
                                                <span className="font-medium">Du</span> {project.start_date}
                                                <span className="font-medium">au</span> {project.end_date}
                                            </p>
                                        )}

                                        {project.status && (
                                            <p className="text-sm">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                                    project.status === 'Terminé' ? 'bg-green-100 text-green-800 border border-green-200' :
                                                    project.status === 'En cours' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                                                    project.status === 'En attente' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                                                    'bg-gray-100 text-gray-800 border border-gray-200'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </p>
                                        )}
                                    </div>

                                    {project.progress !== undefined && (
                                        <div className="mt-4">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium text-gray-700">Progression</span>
                                                <span className="text-sm font-bold text-gray-900">{project.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                                                    style={{ width: `${project.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {project.description && (
                                        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                                            {project.description}
                                        </p>
                                    )}

                                    <div className="mt-6 flex gap-2">
                                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 text-sm font-medium shadow-md hover:shadow-lg transition-all">
                                            <FaTasks />
                                            Voir les tâches
                                        </button>
                                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors">
                                            <FaDownload />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <FaProjectDiagram className="text-6xl text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">Aucun projet assigné</p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
