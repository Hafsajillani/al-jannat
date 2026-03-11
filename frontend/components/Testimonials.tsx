const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Claudio M.",
      company: "Nexus Mutual",
      text: "The team delivered good work and I enjoyed working with them. Their communication was top-notch, they met all deadlines, and their skills were strong.",
      color: "bg-emerald-500"
    },
    {
      id: 2,
      name: "Andrea B.",
      company: "Kaliperyon",
      text: "The click2print and al jannat team is great. I totally recommend them for a job well done, with a proactive attitude and organized approach. I am impressed by their dedication and business ethic. Will surely rehire. Thank you guys!",
      color: "bg-pink-400"
    },
    {
      id: 3,
      name: "Nagesh A.",
      company: "Tezoro",
      text: "Excellent work by the team. They understood the requirements and did a good job of translating to UI design without need to repeat the requirements. Team responded well to feedback and was able to replicate the ask when provided with suitable examples. Look forward to working with the team again!",
      color: "bg-purple-400"
    },
    {
      id: 4,
      name: "Stephen H.",
      company: "Byte Insights",
      text: "I needed branding, logo design and CSS for a website and this is how my experience was:\n• The colours chosen and style were top notch\n• Provided all the documentation on request\n• Clear communication and a can do attitude",
      color: "bg-teal-500"
    },
    {
      id: 5,
      name: "Zeeshan G.",
      company: "Search The Quran",
      text: "It has been an absolute pleasure working with them. They are a very talented design team and came up with really nice ideas in regard to the user experience and the logo. Most important was their positive and can-do attitude.\n\nI apologise for taking a bit longer to provide feedback at times. The team lead is a very patient person. Turn around time was very quick.\n\nI highly recommend them to anyone wanting to build a new or improve an existing UI/UX or logo.",
      color: "bg-emerald-500"
    },
    {
      id: 6,
      name: "Soonbong K.",
      company: "KUSA",
      text: "They are the best team you could imagine! I will hire this team again if I have next project!",
      color: "bg-teal-500"
    },
    {
      id: 7,
      name: "George B.",
      company: "Egg Heads Club",
      text: "The team at click2print and al jannat are one of the best in the game and we had an excellent experience working with them over several months. They are blockchain gurus - Ali and the team helped us successfully launch not only a successful Ethereum NFT project.",
      color: "bg-emerald-500"
    },
    {
      id: 8,
      name: "George B.",
      company: "Egg Heads Club",
      text: "The team at click2print and al jannat are one of the best in the game and we had an excellent experience working with them over several months. They are blockchain gurus - Ali and the team helped us successfully launch not only a successful Ethereum NFT project.\n\nTheir knowledge of all things design is spotless and very reliable. The communication throughout this project was excellent and you can expect a reply within a matter of minutes, no matter what time of the day it is.",
      color: "bg-emerald-500"
    },
    {
      id: 9,
      name: "Verified Client",
      company: "Business Solutions",
      text: "They designed our business profile and printed presentation folders. Everything felt premium and impactful.",
      color: "bg-yellow-500"
    },
    {
      id: 10,
      name: "Event Coordinator",
      company: "Community NGO",
      text: "We use them for all our NGO event material. Banners, brochures, donor folders — always on point.",
      color: "bg-blue-400"
    },
    {
      id: 11,
      name: "Local Business Owner",
      company: "Digital Growth",
      text: "Super clean website development and SEO. They even ranked us locally on Google within 2 months.",
      color: "bg-purple-500"
    }
  ]

  return (
    <div className="w-full min-h-fit font-syne-500 flex justify-center items-center">
      <div className="w-[90%] md:w-[90%] flex flex-col gap-6 md:gap-12">
        <h1 className="text-2xl text-center md:text-[3rem] font-bold">What Our Clients Are
          <span className=""> Saying</span></h1>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-3xl border border-black bg-white flex flex-col gap-4 hover:shadow-lg hover:shadow-[#202ecb20] transition-shadow break-inside-avoid mb-6"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-sm ${testimonial.color}`}></div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials