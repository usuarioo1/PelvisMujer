"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CursoPartoRespetado() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center"
            >
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image
                        src="https://gsmcapacitacion.cl/wp-content/uploads/2021/02/parto-respetado.jpg"
                        alt="Taller de preparación al parto"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold text-indigo-700 mb-4"
                    >
                        Taller de preparación al parto, pelvis libre y parto respetado
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-600 mb-6"
                    >
                        Únete a nuestro taller presencial diseñado para empoderar a futuras madres y padres. Aprende técnicas de
                        respiración, movimiento pélvico y estrategias para un parto respetado y consciente.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                    >
                        Inscríbete ahora
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

