import react from 'react';
import { useForm } from '@inertiajs/react';

export default function CreateTaskForm({ projects, users }) {
    const { data, setData, post, processing, reset } = useForm({
        title: '',
        project_id: '',
        description: '',
        start_date: '',
        end_date: '',
        status: 'En attente',
        responsible_id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.tasks.store'), {
            onSuccess: () => reset()
        });
    };

    return (
        <form onSubmit={submit} className='bg-white p-4 rounded shadow space-y-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Nom interne du projet"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                />
                <select
                    name="project_id"
                    value={data.project_id}
                    onChange={e => setData('project_id', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                >
                    <option value="">-- Projet --</option>
                    {projects.map(project => (
                        <option key={project.id} value={project.id}>{project.title}</option>
                    ))}
                </select>

                <textarea
                    name="description"
                    placeholder="Description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                ></textarea>
                <input
                    type="text"
                    name="start_date"
                    placeholder="Nom interne du projet"
                    value={data.start_date}
                    onChange={e => setData('start_date', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                />
                <input
                    type="text"
                    name="end_date"
                    placeholder="Nom interne du projet"
                    value={data.end_date}
                    onChange={e => setData('end_date', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                />
                <select
                    name="status"
                    value={data.status}
                    onChange={e => setData('status', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                >
                    <option value="En attente">En attente</option>
                    <option value="En cours">En cours</option>
                    <option value="Terminé">Terminé</option>
                    <option value="Annulé">Annulé</option>
                </select>
               
                <select
                    name="responsible_id"
                    value={data.responsible_id}
                    onChange={e => setData('responsible_id', e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                >
                    <option value="">-- Responsable --</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
        

            </div>
            <div className="text-right">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {processing ? 'Enregistrement...' : 'Créer Projet'}
                </button>
            </div>
        </form>
    );
}