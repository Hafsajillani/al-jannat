import { Button } from "../ui/button"

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-28 w-full min-h-screen font-syne-500 flex justify-center items-center pb-20 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold mt-12">Get in Touch</h1>
          <p className="text-gray-600 max-w-xl text-base md:text-md mb-8">
            Let's start a conversation. Tell a bit about yourself and send your query to us. We'll get back to you as soon as possible.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 lg:gap-20 mt-8">
          {/* Left Side - Contact Information */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">Contact</h2>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg">
                  62-A Shan Arcade Barkat Market New,
                  Garden Town, Lahore, 54000.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <a href="mailto:business@hashpotato.design" className="text-gray-700 hover:text-yellow-400 transition-colors text-base md:text-lg">
                  info@click2print.pk
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <a href="tel:+13475878695" className="text-gray-700 hover:text-yellow-400 transition-colors text-base md:text-lg">
                  +92 336 3333896
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white border border-gray-300 rounded-3xl p-6 md:p-12 shadow-sm">
            <form className="flex flex-col gap-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Write down your message"
                  rows={6}
                  className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-yellow-400 text-white font-semibold px-8 py-6 rounded-full hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400 active:bg-white active:text-yellow-400 active:border active:border-yellow-400 transition-colors duration-300 hover:cursor-pointer active:cursor-pointer"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact