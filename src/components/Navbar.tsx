'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">Logo</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Inicio</Link>
                            <Link href="/conoceme" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Conóceme</Link>
                            <div className="relative group">
                                <button
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} 
                                >
                                    Plataforma de autocuidado
                                </button>
                                {isSubmenuOpen && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link href="/kinesiologia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Kinesiología</Link>
                                            <Link href="/programas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Programas</Link>
                                            <Link href="/curso-presencial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Curso presencial</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link href="/podcast" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Podcast</Link>
                            <Link href="/eventos" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Eventos</Link>
                            <Link href="/blog" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Blog</Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Inicio</Link>
                    <Link href="/conoces" className="block py-2 px-4 text-sm hover:bg-gray-200">Conoces</Link>
                    <div>
                        <button
                            className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-200 w-full"
                            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                        >
                            Plataforma de autocuidado
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isSubmenuOpen && (
                            <div className="bg-gray-100">
                                <Link href="/kinesiologia" className="block py-2 px-4 text-sm hover:bg-gray-200">Kinesiología</Link>
                                <Link href="/programas" className="block py-2 px-4 text-sm hover:bg-gray-200">Programas</Link>
                                <Link href="/curso-presencial" className="block py-2 px-4 text-sm hover:bg-gray-200">Curso presencial</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/podcast" className="block py-2 px-4 text-sm hover:bg-gray-200">Podcast</Link>
                    <Link href="/eventos" className="block py-2 px-4 text-sm hover:bg-gray-200">Eventos</Link>
                    <Link href="/blog" className="block py-2 px-4 text-sm hover:bg-gray-200">Blog</Link>
                </div>
            )}
        </nav>
    )
}

