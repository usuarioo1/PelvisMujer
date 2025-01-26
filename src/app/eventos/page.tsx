import Image from 'next/image';
import Link from 'next/link'; // Importa el componente Link
import { connectDB } from "@/utils/mongoose";
import Evento from '@/models/eventoSchema';

async function loadEventData() {
    connectDB();
    const eventData = await Evento.find();
    return eventData;
}

interface Evento {
    id: string;
    titulo: string;
    descripcion: string;
    lugar: string;
    fecha: string;
    imagen: string;
}

export default async function ListaEventos() {
    const eventos = await loadEventData();
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Próximos Eventos
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {eventos.map((evento) => (
                        <Link key={evento._id} href={`/eventos/${evento._id}`} passHref>
                            <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
                                <div className="relative h-48">
                                    <Image
                                        src={evento.img || "/placeholder.svg"}
                                        alt={evento.nombre}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-xl text-gray-800 mb-2">{evento.nombre}</h3>
                                    <p className="text-gray-600 mb-4">{evento.descripcion}</p>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {evento.lugar}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {evento.fecha}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}