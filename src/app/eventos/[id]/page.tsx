"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";  // Importamos la librería Motion

interface Evento {
    _id: string;
    nombre: string;
    descripcion: string;
    fecha: string;
    lugar: string;
    precio: number;
    cupo: string;
    img?: string;
}

const EventoDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [evento, setEvento] = useState<Evento | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchEvento = async () => {
            try {
                const response = await fetch(`/api/eventos/${id}`);
                if (!response.ok) {
                    throw new Error("Evento no encontrado");
                }
                const data: Evento = await response.json();
                setEvento(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvento();
    }, [id]);

    if (loading) return <p className="text-center text-gray-600">Cargando evento...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            {evento && (
                <motion.div
                    className="max-w-5xl w-full bg-white shadow-2xl rounded-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {evento.img && (
                        <img
                            src={evento.img}
                            alt={evento.nombre}
                            className="w-full h-96 object-cover rounded-t-lg"
                        />
                    )}
                    <div className="p-8">
                        <h2 className="text-4xl font-semibold text-gray-900 mt-4">{evento.nombre}</h2>
                        <p className="text-gray-700 mt-4 text-lg">{evento.descripcion}</p>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <p className="text-gray-600 text-lg font-semibold">Fecha</p>
                                <p className="text-gray-700">{evento.fecha}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-lg font-semibold">Lugar</p>
                                <p className="text-gray-700">{evento.lugar}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-lg font-semibold">Precio</p>
                                <p className="text-gray-700 text-xl font-bold">${evento.precio}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-lg font-semibold">Cupos</p>
                                <p className="text-gray-700">{evento.cupo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-b-lg">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md focus:outline-none text-lg">
                            Comprar Boletos
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default EventoDetail;
