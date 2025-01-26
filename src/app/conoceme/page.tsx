
export default function Conoceme() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Sección de Conóceme */}
                <div className="flex flex-col lg:flex-row items-center mb-16">
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/221127_Kazuha_%28LE_SSERAFIM%29.jpg/667px-221127_Kazuha_%28LE_SSERAFIM%29.jpg"
                            alt="Foto de la terapeuta"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-2/3 lg:pl-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Conóceme</h2>

                        <p className="text-lg text-gray-700 mb-6">
                            Como terapeuta especializada en asistencia al parto y psicología Gestalt, mi enfoque se centra en proporcionar un apoyo integral durante uno de los momentos más transformadores de la vida. Combino técnicas de respiración y relajación con principios de la psicología Gestalt para ayudar a las madres a conectar profundamente con su experiencia presente, facilitando un parto más consciente y empoderado.
                        </p>
                        <p className="text-lg text-gray-700">
                            Mi formación en psicología Gestalt me permite abordar los aspectos emocionales y psicológicos del parto, ayudando a las mujeres a superar miedos, cerrar asuntos inconclusos y estar plenamente presentes en el proceso de dar a luz. Esta combinación única de habilidades permite una experiencia de parto más holística y satisfactoria.
                        </p>
                    </div>
                </div>

                {/* Sección de Misión y Visión */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Misión y Visión</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-medium text-gray-900 mb-3">Misión</h4>
                            <p className="text-gray-700">
                                Nuestra misión es empoderar a las mujeres durante el proceso de parto a través del autoconocimiento y técnicas de autocuidado. Buscamos crear un espacio seguro donde cada mujer pueda conectar con su sabiduría interior, facilitando una experiencia de parto consciente y transformadora.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-medium text-gray-900 mb-3">Visión</h4>
                            <p className="text-gray-700">
                                Aspiramos a un mundo donde cada mujer aborde el parto con confianza, conocimiento y apoyo emocional. Visualizamos una sociedad que valora el autocuidado y el autoconocimiento como pilares fundamentales para una maternidad plena y una vida equilibrada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

