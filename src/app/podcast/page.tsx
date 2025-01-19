import Link from 'next/link'
import Image from 'next/image'
import { connectDB } from "@/utils/mongoose";
import Spotify from '@/models/spotifySchema'

async function loadpodcastData() {
    connectDB();
    const podcastData = await Spotify.find()
    return podcastData;

}

interface Podcast {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    spotifyUrl: string;
}

const podcastData: Podcast[] = [
    {
        id: '1',
        title: "Voces del Cambio",
        description: "Explorando la evolución del rol femenino en la política y los negocios.",
        imageUrl: "/placeholder.svg?height=80&width=80",
        spotifyUrl: "https://open.spotify.com/show/placeholder1"
    },
    {
        id: '2',
        title: "Rompiendo el Techo de Cristal",
        description: "Historias inspiradoras de mujeres que desafían las normas en sus campos.",
        imageUrl: "/placeholder.svg?height=80&width=80",
        spotifyUrl: "https://open.spotify.com/show/placeholder2"
    },
    {
        id: '3',
        title: "Madres Modernas",
        description: "Debates sobre la maternidad en el siglo XXI y sus desafíos únicos.",
        imageUrl: "/placeholder.svg?height=80&width=80",
        spotifyUrl: "https://open.spotify.com/show/placeholder3"
    },
    {
        id: '4',
        title: "Feminismo en Acción",
        description: "Analizando movimientos actuales y su impacto en la sociedad global.",
        imageUrl: "/placeholder.svg?height=80&width=80",
        spotifyUrl: "https://open.spotify.com/show/placeholder4"
    },
    {
        id: '5',
        title: "Ciencia en Femenino",
        description: "Destacando los logros de mujeres en STEM y su lucha por la igualdad.",
        imageUrl: "/placeholder.svg?height=80&width=80",
        spotifyUrl: "https://open.spotify.com/show/placeholder5"
    }
];

export default async function CleanPodcastList() {

    const podcasts = await loadpodcastData();
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Podcasts sobre el Rol de la Mujer
                </h2>
                <ul className="space-y-6">
                    {podcasts.map((podcast) => (
                        <li key={podcast._id} className="border-b border-gray-200 pb-6 last:border-b-0">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={podcast.img || "/placeholder.svg"}
                                        alt={podcast.title}
                                        width={80}
                                        height={80}
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-medium text-gray-900">{podcast.title}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{podcast.description}</p>
                                    <div className="mt-2">
                                        <Link
                                            href={podcast.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-green-600 hover:text-green-500"
                                        >
                                            Escuchar en Spotify →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

