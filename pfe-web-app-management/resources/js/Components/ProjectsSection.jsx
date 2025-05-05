import React from "react";
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const projects = [
    {
        id: 1,
        title: "Site Web E-commerce",
        description: "Plateforme complète avec paiement en ligne et gestion de stocks",
        image: "/images/ecom.png",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        id: 2,
        title: "Application Mobile",
        description: "Application de suivi fitness avec statistiques en temps réel",
        image: "/images/app-mobile.png",
        tags: ["React Native", "Firebase"],
    },
    {
        id: 3,
        title: "Dashboard Analytique",
        description: "Visualisation de données complexes pour entreprise",
        image: "/images/analytics.png",
        tags: ["React", "D3.js", "Tailwind CSS"],
    },
    {
        id: 4,
        title: "Système de Réservation",
        description: "Gestion de rendez-vous pour professionnels",
        image: "/images/reservation.png",
        tags: ["React", "Laravel", "MySQL"],
    },
    {
        id: 5,
        title: "CRM et Gestion Clients",
        description: "Suivi client, automatisation et reporting",
        image: "/images/crm-img.png",
        tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
        id: 6,
        title: "Outil RH Interne",
        description: "Gestion des congés, des équipes et des documents RH",
        image: "/images/rh-img.png",
        tags: ["React", "Node.js", "MongoDB"],
    },
];

const ProjectsSection = () => {
    return (
        
        <section className="py-24 bg-amber-400 dark:bg-orange-400 transition-colors">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white uppercase">Nos Réalisations</h1>
                    <p className="text-lg text-gray-300 dark:text-black mt-2 max-w-xl mx-auto">
                        Découvrez nos projets récents et notre expertise en développement
                    </p>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-amber-500 dark:bg-yellow-300 p-6 rounded-2xl shadow-xl h-full"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-black mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-900 mb-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-800 dark:text-white text-blue-800 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Voir le projet
                                </Link>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-12">
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-orange-800 text-black dark:text-white rounded-lg hover:bg-amber-700"
                    >
                        Parlez-nous de votre projet →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
