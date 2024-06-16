import { useState } from "react";

export const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [showModal, setShowModal] = useState(false); 



  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const url = "https://api.web3forms.com/submit"; 

    const resetForm = () => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormSubmitted(false);
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setShowModal(true); 
      } else {
        setSubmitStatus("error");
        setShowModal(true); 
      }
    } catch (error) {
      setSubmitStatus("error");
      setShowModal(true); 
    }
  };

  const closeModal = () => {
    setShowModal(false); 
    setSubmitStatus(null); 
  };
  

  return (
    <div className="h-screen flex items-center justify-center mb-10" id="contact" style={{ overflowX: 'hidden' }}>
      <div className="pt-5 md:pt-20 w-full">
        <div className="p-2 md:p-8 w-full">
          <h1 className="text-white text-start pb-5 text-4xl md:text-5xl lg:text-4xl px-10">Contact</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full px-10" >
            <input type="hidden" name="access_key" value="25d24851-278b-485e-9a72-35d513d280e5"/>
            <input type="checkbox" name="botcheck" className="hidden" />
            <div className="w-full">
              <div className="flex flex-col md:flex-row w-full">
                <input type="text" placeholder="Name" name="name" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full md:mr-2 outline-none focus:ring-1 focus:ring-teal-400" />
                <input type="email" placeholder="Email" name="email" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full md:ml-2 outline-none focus:ring-1 focus:ring-teal-400"/>
              </div>
              <input type="text" placeholder="Subject" name="subject" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full outline-none focus:ring-1 focus:ring-teal-400" />
              <textarea placeholder="Message" name="message" className="my-5 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full outline-none focus:ring-1 focus:ring-teal-400 h-24" rows="5"></textarea>
            </div>
            <button className="border border-blue-200 py-1 px-40 mt-8 rounded-lg" type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
          <div className="bg-transparent backdrop-blur-3xl p-8 rounded-lg max-w-md border text-center">
            <h2 className="text-lg font-semibold mb-4">
              {submitStatus === "success" ? "Message Sent Successfully!" : "Failed to Send Message"}
            </h2>
            <p className="text-md">
              {submitStatus === "success"
                ? "Thank you for your message. i will get back to you shortly."
                : "There was an error while sending your message. Please try again later."}
            </p>
            <button
              className="border border-blue-200 py-1 px-10  rounded-lg  mt-5 "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
