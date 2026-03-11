import Image from "next/image"

const collabImages = [
    { id: 1, src: "/images/bop.webp", alt: "Collaboration 1" },
    { id: 2, src: "/images/logo-descon.jpg", alt: "Collaboration 2" },
    { id: 3, src: "/images/nes-pack.jpg", alt: "Collaboration 3" },
    { id: 4, src: "/images/barclays-logo.png", alt: "Collaboration 4" },
    { id: 5, src: "/images/silk-bank.jpg", alt: "Collaboration 5" },
    { id: 6, src: "/images/UBL-Logo-Vector.png", alt: "Collaboration 6" },
]

const Collaborations = () => {
  return (
    <div className="w-full h-fit py-10 md:py-20 flex flex-col justify-center items-center px-4 gap-8">
        
        {/* Heading Section */}
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-black">
                Companies We Worked With
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
                Al Jannat Scan & Print is providing satisfactory printer maintenance 
                services all over Pakistan, since last two years. The performance of the engineers and 
                trouble shooting time is very good.
            </p>
        </div>

        {/* Logos Grid */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 mt-18">
            {collabImages.map((image) => (
                <div key={image.id} className="w-full h-24 md:h-32 relative">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Collaborations