"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FormularioInscripcion() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError("")

        try {
            const response = await fetch("/api/inscripciones", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error("Error al enviar el formulario")
            }

            const data = await response.json()
            console.log("Inscripción guardada:", data)
            router.push("/gracias") // Asumiendo que tienes una página de agradecimiento
        } catch (err) {
            setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
            console.error("Error:", err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Formulario de Inscripción</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                        Curso
                    </label>
                    <select
                        id="course"
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="">Selecciona un curso</option>
                        <option value="Taller de preparación al parto">Taller de preparación al parto</option>
                        <option value="Pelvis libre">Pelvis libre</option>
                        <option value="Parto respetado">Parto respetado</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Mensaje (opcional)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar inscripción"}
                    </button>
                </div>
            </form>
        </div>
    )
}

