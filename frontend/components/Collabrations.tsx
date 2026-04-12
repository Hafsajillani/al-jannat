import Image from "next/image"
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const collabImages = [
  { id: 1, src: "/images/bop.webp",             alt: "Bank of Punjab" },
  { id: 2, src: "/images/logo-descon.jpg",       alt: "Descon Engineering" },
  { id: 3, src: "/images/nes-pack.jpg",          alt: "Nes Pack" },
  { id: 4, src: "/images/barclays-logo.png",     alt: "Barclays" },
  { id: 5, src: "/images/silk-bank.jpg",         alt: "Silk Bank" },
  { id: 6, src: "/images/UBL-Logo-Vector.png",   alt: "UBL" },
];

const Collaborations = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-12 lg:px-16 flex flex-col items-center">

      {/* Eyebrow */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="w-9 h-px bg-[#79A88B]" />
        <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#79A88B]">
          Trusted Partners
        </span>
      </div>

      {/* Heading */}
      <div className="text-center max-w-2xl mb-5">
        <h2 className={`text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight text-[#1a1a1a] ${cormorant.className}`}>
          Companies We{" "}
          <span className="text-[#79A88B]"><em>Worked With</em></span>
        </h2>
      </div>

      {/* Body Copy */}
      <p className="text-sm font-light leading-relaxed text-[#aaaaaa] max-w-lg text-center mb-16">
        Al Jannat Scan & Print is providing satisfactory printer maintenance
        services all over Pakistan, since last two years. The performance of the
        engineers and trouble shooting time is very good.
      </p>

      {/* Logos Grid — clean, no boxes, no hover effects */}
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">
        {collabImages.map((image) => (
          <div key={image.id} className="relative w-full h-20">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* Footer tag */}
      <div className="flex items-center gap-3.5 mt-14">
        <div className="w-6 h-px bg-[#dddddd]" />
        <span className="text-[9px] tracking-[0.18em] uppercase text-[#bbbbbb]">
          Serving across Pakistan
        </span>
        <div className="w-6 h-px bg-[#dddddd]" />
      </div>

    </section>
  );
};

export default Collaborations;