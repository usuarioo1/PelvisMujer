"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function TestimonioForm() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        occupation: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            const response = await fetch("/api/testimonios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error("Error al enviar el testimonio")
            }

            const data = await response.json()
            console.log("Testimonio guardado:", data)
            router.push("/gracias")
        } catch (err) {
            setError("Hubo un error al enviar el testimonio. Por favor, inténtalo de nuevo.")
            console.error("Error:", err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Comparte tu Testimonio</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                        Ocupación
                    </label>
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="occupation"
                        name="occupation"
                        required
                        value={formData.occupation}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Tu Testimonio
                    </label>
                    <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    ></motion.textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-300 ease-in-out"
                >
                    {isSubmitting ? "Enviando..." : "Enviar Testimonio"}
                </motion.button>
            </form>
        </motion.div>
    )
}

