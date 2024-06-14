export const ContactSection = () => {
  return (
    <div className="h-screen flex items-center justify-center"  id="contact" >
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-center pb-8 text-4xl md:text-5xl lg:text-4xl">Contact</h1>
          <form action="" className="flex flex-col items-center ">
            <div className="md:w-full lg:w-full xl:w-full">
              <div className="flex flex-col md:flex-row">
              <input type="text" placeholder="Name" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-1 focus:ring-teal-400" />
              <input type="email" placeholder="Email" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-1 focus:ring-teal-400"/>
              </div>
              <input type="text" placeholder="Subject" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full outline-none focus:ring-1 focus:ring-teal-400" />
              <input type="text" placeholder="Message" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full outline-none focus:ring-1 focus:ring-teal-400" />
            </div>
              <button className="border border-blue-200 py-1 px-40 mt-8 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
