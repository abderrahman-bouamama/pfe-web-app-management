import React from "react";

const testimonials = [
    {
        id: 1,
        name: "Sofia Rami",
        company: "FitLife App",
        feedback:
            "L’équipe a créé une application mobile intuitive pour notre salle de sport. Nous avons pu suivre les performances de nos membres en temps réel. Un projet fluide du début à la fin !",
        avatar: "/images/clients/sofia.jpg",
        project: "Application Mobile"
    },
    {
        id: 2,
        name: "Youssef Benali",
        company: "TechShop Maroc",
        feedback:
            "Le site e-commerce développé est rapide, sécurisé et parfaitement adapté à nos besoins. L’intégration du paiement et la gestion du stock sont top !",
        avatar: "/images/clients/youssef.jpg",
        project: "Site Web E-commerce"
    },
    {
        id: 3,
        name: "Nadia Toumi",
        company: "DataViz Corp",
        feedback:
            "Grâce au tableau de bord analytique livré, nous avons une vue claire de nos KPIs. Très bonne réactivité de l’équipe tout au long du projet.",
        avatar: "/images/clients/nadia.jpg",
        project: "Dashboard Analytique"
    }
];

const ClientsSection = () => {
    return (
        <section className="py-16 bg-gray-400 pt-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-blue-900 max-w-2xl mx-auto text-2xl uppercase">
                        Voici quelques retours de clients satisfaits ayant collaboré sur différents projets avec nous.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-32 h-28 rounded-full mr-6 object-center"
                                />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
                            <p className="text-sm text-blue-600 font-medium">Projet : {testimonial.project}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
