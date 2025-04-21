import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function Team() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const team = [
        { id: 1, nom: 'Zahra', prenom: 'B.', role: 'Développeuse Frontend', email: 'zahra@example.com', phone: '+212600000001' },
        { id: 2, nom: 'Yassine', prenom: 'M.', role: 'Chef de Projet', email: 'yassine@example.com', phone: '+212600000002' },
        { id: 3, nom: 'Fatima', prenom: 'K.', role: 'Designer UI/UX', email: 'fatima@example.com', phone: '+212600000003' },
        { id: 4, nom: 'Omar', prenom: 'T.', role: 'Développeur Backend', email: 'omar@example.com', phone: '+212600000004' },
    ];

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Équipe du Projet</h2>}
        >
            <Head title="Équipe du Projet" />

            <div className="p-6">
                <p className="text-gray-700 mb-6">
                    Visualisez les membres de votre équipe projet et leurs rôles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {team.map(member => (
                        <div key={member.id} className="bg-white rounded-lg shadow p-4 relative">
                            <div className="text-lg font-bold text-sky-700">{member.nom} {member.prenom}</div>
                            <p className="text-sm text-gray-600">{member.role}</p>

                            <button
                                onClick={() => toggleDropdown(member.id)}
                                className="mt-4 bg-sky-500 text-white px-3 py-1 rounded hover:bg-sky-600 text-sm"
                            >
                                Contact
                            </button>

                            {openDropdown === member.id && (
                                <div className="absolute right-4 top-24 z-10 w-40 bg-white border shadow rounded-md">
                                    <a
                                        href={`https://wa.me/${member.phone.replace('+', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-green-600 text-sm"
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-blue-600 text-sm"
                                    >
                                        <FaEnvelope /> Email
                                    </a>
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600 text-sm"
                                    >
                                        <FaPhoneAlt /> Appel
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
