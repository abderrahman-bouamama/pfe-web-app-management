import React from "react";


const Services = () => {
    const services = [
        {
            id: 1,
            image: "/images/pic1.png",
            title: "AUTOMATISATION INDUSTRIELLE",
            description: "Nous concevons et déployons des systèmes d’automatisation industrielle adaptés à vos besoins. Grâce à des technologies avancées, nous vous aidons à réduire les inefficacités, à minimiser les erreurs humaines et à augmenter la productivité de vos opérations. Notre expertise en automatisation vous permet de gagner en compétitivité tout en assurant une qualité irréprochable de vos produits."
        },
        {
            id: 2,
            image: "/images/iot-pic.png",
            title: "Solutions IoT et Connectivité",
            description: "Connectez vos équipements et transformez vos données en insights exploitables. Nos solutions IoT (Internet des Objets) permettent de superviser vos processus en temps réel, d’optimiser la maintenance prédictive et d’améliorer la prise de décision stratégique. Bénéficiez d’une visibilité totale sur vos opérations pour anticiper les défis et maximiser vos performances."
        },
        {
            id: 3,
            image: "/images/data-pic.png",
            title: "Analyse de Données et Intelligence Artificielle",
            description: "Exploitez le potentiel de vos données grâce à des outils d’analyse avancés et à l’intelligence artificielle. Nos experts vous accompagnent dans la mise en place de solutions analytiques qui identifient les tendances, prédisent les risques et optimisent vos processus métier. Prenez des décisions éclairées et anticipez les opportunités pour rester en tête de votre marché."
        }
    ];

    return (
        
        <section className="py-16 bg-slate-400 pt-28">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
                            Nos Services – Accélérez votre Transformation Digitale
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nos services sont conçus pour vous accompagner à chaque étape de votre transformation digitale, de l’automatisation des processus à la gestion intelligente des données.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="mb-4 overflow-hidden rounded-lg">
                                    <a href="#" className="block">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </a>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="/projects"
                            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            Découvrez nos projets →
                        </a>
                    </div>
                </div>
            </section>
        
    );
};

export default Services;