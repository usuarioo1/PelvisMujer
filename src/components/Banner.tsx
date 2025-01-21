import Image from 'next/image'

export default function Banner() {
    return (
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
                src="https://www.yosemite.com/wp-content/uploads/2023/04/Yosemite-Valley-1024x683.webp"
                alt="Banner descriptivo del sitio"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
                    Bienvenido a Pelvis Mujer
                </h1>
            </div>
        </div>
    )
}

