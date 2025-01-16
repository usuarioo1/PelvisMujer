import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaEnvelope } from "react-icons/fa";

export function Rrss() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-orange-500 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary ml-8">
                        Mensaje de bienvenida
                    </Link>
                </div>
                <nav className="flex items-center space-x-4 mr-4">
                    <Link href="mailto:example@email.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
                        <FaEnvelope className="h-5 w-5" />
                        <span className="sr-only">Correo</span>
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
                        <FaInstagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
                        <FaYoutube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
                        <FaSpotify className="h-5 w-5" />
                        <span className="sr-only">Spotify</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
