'use client'

import { motion } from 'framer-motion'

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
}

const CardKine = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <motion.div
                    className="w-full md:w-1/3 max-w-sm"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-pink-200">
                            {/* Espacio para la imagen */}
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-pink-700 mb-2">Preparto</h2>
                            <p className="text-gray-700">Información y consejos para la etapa previa al parto.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/3 max-w-sm"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-blue-200">
                            {/* Espacio para la imagen */}
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-blue-700 mb-2">Posparto</h2>
                            <p className="text-gray-700">Guía y apoyo para el período después del nacimiento.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/3 max-w-sm"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="bg-green-100 rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-green-200">
                            {/* Espacio para la imagen */}
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-green-700 mb-2">General</h2>
                            <p className="text-gray-700">Información general sobre el embarazo y la maternidad.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default CardKine

