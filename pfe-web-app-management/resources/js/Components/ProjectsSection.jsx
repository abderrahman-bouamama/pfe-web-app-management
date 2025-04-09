import React from "react";
import { Link } from '@inertiajs/react';

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "Site Web E-commerce",
            description: "Plateforme complète avec paiement en ligne et gestion de stocks",
            image: "/images/ecom.png",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            id: 2,
            title: "Application Mobile",
            description: "Application de suivi fitness avec statistiques en temps réel",
            image: "/images/app-mobile.png",
            tags: ["React Native", "Firebase"],
            link: "#"
        },
        {
            id: 3,
            title: "Dashboard Analytique",
            description: "Visualisation de données complexes pour entreprise",
            image: "/images/analytics.png",
            tags: ["React", "D3.js", "Tailwind CSS"],
            link: "#"
        },
        {
            id: 4,
            title: "Système de Réservation",
            description: "Gestion de rendez-vous pour professionnels",
            image: "/images/reservation.png",
            tags: ["React", "Laravel", "MySQL"],
            link: "#"
        },
        {
            id: 5,
            title: "CRM et Gestion Clients",
            description: "Suivi client, automatisation et reporting",
            image: "/images/crm-img.png",
            tags: ["Vue.js", "Laravel", "MySQL"],
            link: "#"
        },
        {
            id: 6,
            title: "Outil RH Interne",
            description: "Gestion des congés, des équipes et des documents RH",
            image: "/images/rh-img.png",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        }
    ];

    return (
        <section className="py-16 bg-gray-600 pt-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">Nos Réalisations</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Découvrez nos projets récents et notre expertise en développement
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    
                    <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-gray-800 text-sky-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Parlez-nous de votre projet →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
