export default function TestimoniosGestalt() {
    const testimonios = [
        {
            nombre: "María González",
            ocupacion: "Psicóloga Clínica",
            texto: "La terapia Gestalt me ha permitido ayudar a mis pacientes a conectar con su experiencia presente de una manera más profunda. He visto cambios sorprendentes en su capacidad para afrontar conflictos y cerrar asuntos inconclusos."
        },
        {
            nombre: "Carlos Rodríguez",
            ocupacion: "Paciente",
            texto: "Gracias a la terapia Gestalt, he aprendido a ser más consciente de mis emociones y sensaciones corporales. Ahora puedo vivir más plenamente en el aquí y ahora, lo que ha mejorado significativamente mi calidad de vida."
        },
        {
            nombre: "Ana Martínez",
            ocupacion: "Estudiante de Psicología",
            texto: "Estudiar la psicología Gestalt ha ampliado mi perspectiva sobre la percepción y la conciencia humana. Los principios de la Gestalt me han ayudado a entender mejor cómo las personas integran sus experiencias para formar un todo coherente."
        }
    ]

    return (
        <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Testimonios 
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonios.map((testimonio, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-semibold">
                                        {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">{testimonio.nombre}</h3>
                                        <p className="text-sm text-gray-500">{testimonio.ocupacion}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">{testimonio.texto}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

