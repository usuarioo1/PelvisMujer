'use client'

import { motion } from 'framer-motion'

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
}

const Programas = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-12">Nuestros Programas</h1>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                <motion.div
                    className="w-full lg:w-1/2 max-w-2xl"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="bg-purple-100 rounded-lg shadow-lg overflow-hidden h-full">
                        <div className="h-64 bg-purple-200 flex items-center justify-center">
                            <span className="text-purple-800 text-6xl">🤰</span>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-purple-700 mb-4">Preparación al Parto Consciente</h2>
                            <p className="text-gray-700 mb-4">Un programa diseñado para ayudarte a prepararte mental y físicamente para un parto consciente y positivo.</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Técnicas de respiración y relajación</li>
                                <li>Ejercicios de preparación física</li>
                                <li>Información sobre el proceso de parto</li>
                                <li>Herramientas para toma de decisiones informadas</li>
                            </ul>
                            <button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">
                                Más información
                            </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 max-w-2xl"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bg-teal-100 rounded-lg shadow-lg overflow-hidden h-full">
                        <div className="h-64 bg-teal-200 flex items-center justify-center">
                            <span className="text-teal-800 text-6xl">👩‍🍼</span>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-teal-700 mb-4">Reconexión y Rehabilitación en el Posparto</h2>
                            <p className="text-gray-700 mb-4">Un programa integral para ayudarte a recuperarte física y emocionalmente después del parto.</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Ejercicios de rehabilitación del suelo pélvico</li>
                                <li>Técnicas para la reconexión con tu cuerpo</li>
                                <li>Apoyo emocional y manejo del estrés posparto</li>
                                <li>Consejos para el cuidado del bebé y la lactancia</li>
                            </ul>
                            <button className="mt-6 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
                                Más información
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Programas

