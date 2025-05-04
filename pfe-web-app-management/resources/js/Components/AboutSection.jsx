import React from 'react';
import { Link } from '@inertiajs/react';

export default function AboutSection() {
    return (
        <section className="py-16 bg-orange-400 pt-28">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    {/* Texte à gauche */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-8">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">À propos de nous</h1>
                            <h3 className='text-gray-800 uppercase font-poppins'>Accélérez votre Transformation Digitale Industrielle</h3>
                            <p className="text-slate-800 mb-6 leading-relaxed">
                                <br />
                                 
                                
                            🌐 Chez <span className='uppercase text-sky-800'>DIGITAL SOLUTIONS </span> 
                                Nous accompagnons les entreprises dans leur transition numérique en intégrant des technologies avancées, parfaitement adaptées à leurs besoins spécifiques.
                                Qu’il s’agisse d’automatiser les chaînes de production, d’optimiser la gestion des données ou de renforcer la traçabilité, nous concevons des solutions sur mesure pour relever les défis actuels et futurs de l’industrie 4.0.<br /><br/>
                                🌐 Nous plaçons l’humain, la performance et l’innovation au cœur de notre démarche.
                                Chaque projet est guidé par des valeurs fortes :
                                <br /><br />
                                <i className="fa-brands fa-react mr-2" /> L’innovation, pour rester à la pointe des technologies et proposer des solutions durables et évolutives.<br />
                                <i className="fa-brands fa-unity mr-2" /> L’engagement, envers nos clients, pour garantir une écoute active, une transparence totale et un accompagnement sur mesure.<br />
                                <i className="fa-brands fa-empire mr-2" /> L’excellence, dans l’exécution comme dans les résultats, afin de bâtir des partenariats solides et de confiance.<br />
                            </p>

                            

                            <Link
                                href="/services"
                                className="mt-6 inline-block px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-orange-800 transition"
                            >
                                Découvrez nos services →
                            </Link>
                        </div>
                    </div>

                    {/* Image à droite */}
                    <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0">
                        <div className="h-full w-full">
                            <img
                                src="/images/team-pic.png"
                                alt="About company"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
