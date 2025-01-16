import Image from 'next/image'

interface Evento {
    id: string;
    titulo: string;
    descripcion: string;
    lugar: string;
    fecha: string;
    imagen: string;
}

const eventos: Evento[] = [
    {
        id: '1',
        titulo: "Taller de Liderazgo Femenino",
        descripcion: "Aprende estrategias efectivas para potenciar tu liderazgo en el ámbito profesional y personal.",
        lugar: "Centro Cultural María Zambrano",
        fecha: "15 de Julio, 2023",
        imagen: "https://images.stockcake.com/public/5/c/d/5cd54a33-c1f4-4e5b-a82a-fd3646543990_large/outdoor-group-meeting-stockcake.jpg"
    },
    {
        id: '2',
        titulo: "Conferencia: Mujeres en la Ciencia",
        descripcion: "Destacadas científicas compartirán sus experiencias y los desafíos superados en sus campos de investigación.",
        lugar: "Auditorio Universidad Autónoma",
        fecha: "22-23 de Agosto, 2023",
        imagen: "https://images.stockcake.com/public/5/c/d/5cd54a33-c1f4-4e5b-a82a-fd3646543990_large/outdoor-group-meeting-stockcake.jpg"
    },
    {
        id: '3',
        titulo: "Retiro de Bienestar y Autocuidado",
        descripcion: "Un fin de semana dedicado a reconectar contigo misma a través de yoga, meditación y talleres de crecimiento personal.",
        lugar: "Eco-resort La Armonía",
        fecha: "8-10 de Septiembre, 2023",
        imagen: "https://images.stockcake.com/public/5/c/d/5cd54a33-c1f4-4e5b-a82a-fd3646543990_large/outdoor-group-meeting-stockcake.jpg"
    },
    {
        id: '4',
        titulo: "Foro: Conciliación Laboral y Familiar",
        descripcion: "Debate abierto sobre políticas y estrategias para lograr un equilibrio entre la vida profesional y personal.",
        lugar: "Cámara de Comercio",
        fecha: "5 de Octubre, 2023",
        imagen: "https://images.stockcake.com/public/5/c/d/5cd54a33-c1f4-4e5b-a82a-fd3646543990_large/outdoor-group-meeting-stockcake.jpg"
    },
    {
        id: '5',
        titulo: "Festival de Arte y Emprendimiento Femenino",
        descripcion: "Exposición y venta de obras de artistas locales, acompañado de charlas sobre emprendimiento y networking.",
        lugar: "Parque de las Artes",
        fecha: "18-20 de Noviembre, 2023",
        imagen: "https://images.stockcake.com/public/5/c/d/5cd54a33-c1f4-4e5b-a82a-fd3646543990_large/outdoor-group-meeting-stockcake.jpg"
    }
];

export default function ListaEventos() {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Próximos Eventos
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {eventos.map((evento) => (
                        <div key={evento.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-48">
                                <Image
                                    src={evento.imagen || "/placeholder.svg"}
                                    alt={evento.titulo}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-xl text-gray-800 mb-2">{evento.titulo}</h3>
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
                    ))}
                </div>
            </div>
        </div>
    );
}

