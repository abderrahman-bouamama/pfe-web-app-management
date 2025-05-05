import React from "react";

const ContactSection = () => {
    return (
        <section className="py-16 bg-amber-500 pt-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4 uppercase">Contactez-nous</h2>
                    <p className="text-gray-200 max-w-xl mx-auto uppercase">
                        Une idée, un projet, une question ? Nous sommes là pour vous répondre.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-yellow-500 p-8 shadow-md rounded-lg">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="exemple@domaine.com"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                rows="5"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Écrivez votre message ici..."
                            ></textarea>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Envoyer votre message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
