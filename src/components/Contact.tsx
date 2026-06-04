const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase border-4 border-black py-4 px-12 bg-[#E5E5E5] text-black">
            Contact
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-700 text-xs font-semibold tracking-widest mb-12 uppercase leading-relaxed">
            Have a project in mind, want to collaborate, or just say hello? Drop me a message below or connect with me via my social profiles.
          </p>
          <form className="space-y-8 flex flex-col items-center">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME*"
                className="w-full bg-transparent border-b-4 border-black py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors uppercase text-xs tracking-widest font-bold"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL*"
                className="w-full bg-transparent border-b-4 border-black py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors uppercase text-xs tracking-widest font-bold"
                required
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE*"
                rows={1}
                className="w-full bg-transparent border-b-4 border-black py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors uppercase text-xs tracking-widest font-bold resize-none"
                required
              ></textarea>
            </div>
            <div className="pt-12">
              <button
                type="submit"
                className="text-black font-bold uppercase tracking-[0.2em] hover:text-gray-600 transition-colors border-l-2 border-r-2 border-black px-8"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
