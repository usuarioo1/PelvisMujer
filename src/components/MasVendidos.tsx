import Image from 'next/image'

export default function ProgramCards() {
    const programs = [
        {
            title: "Programa de Yoga",
            image: "https://www.cibdol.es/modules/psblog/uploads/1698911680.jpg",
            price: 49990
        },
        {
            title: "Entrenamiento Funcional",
            image: "https://www.cibdol.es/modules/psblog/uploads/1698911680.jpg",
            price: 59990
        },
        {
            title: "Meditación Guiada",
            image: "https://www.cibdol.es/modules/psblog/uploads/1698911680.jpg",
            price: 39990
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Programas Más Vendidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                style={{ objectFit: 'cover' }} // Reemplaza objectFit
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                            <p className="text-gray-600">
                                Valor: {program.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}