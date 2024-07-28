import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { FaCity } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


interface Info {
  email: string;
  no_telp: string;
  addres: string;
}

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ervq039', 'template_k3itg3b', form.current!, 'wL_o9yYB5FTVMOToZ')
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          alert('Pesan anda telah berhasi tersampaikan!');
          setIsFormSubmitted(true); // Set state to indicate form submission
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.error('FAILED...', error);
          alert('An error occurred while sending the email. Please try again later.');
        }
      );
  };

  const resetForm = () => {
    if (form.current) {
      form.current.reset(); // Reset the form fields
    }
    setIsFormSubmitted(false); // Reset the form submission state
  };

  const infos: Info[] = [
    {
      email: 'muhammadhafidzfurqon27@gmail.com',
      no_telp: '(+62)-895-1800-1464',
      addres: 'Kab.Bogor Kp. Ciherang Kidul RT 02/02',
    },
  ];

  return (
    <section id="contact" className="pt-28 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="text-center font-bold text-3xl mb-5 md:text-5xl">
            Contact <span className="text-primary">Me</span>
          </div>
          <h2 className="text-center max-w-lg mx-auto md:text-xl">
            Feel Free To Contact Me if you want me to join with your project
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center" data-aos="fade-up">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-md mx-auto">
              <form ref={form} onSubmit={sendEmail} className="mt-10">
                <div className="w-full mb-8 px-4">
                  <label htmlFor="name" className="font-bold text-base text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border-b-2 bg-transparent border-gray-300 p-2 px-0 border-r-0 text-base text-white mt-1 focus:ring-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-sm"
                    placeholder="Field Your Name"
                    id="name"
                    required
                  />
                </div>
                <div className="w-full mb-8 px-4">
                  <label htmlFor="email" className="font-bold text-base text-primary">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full border-b-2 bg-transparent border-gray-300 p-2 px-0 border-r-0 text-base text-white mt-1 focus:ring-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-sm"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="w-full mb-8 px-4">
                  <label htmlFor="message" className="font-bold text-base text-primary relative">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className="w-full border-b-2 bg-transparent border-gray-300 p-2 px-0 border-r-0 text-base text-white mt-1 focus:ring-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-sm placeholder:absolute"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="px-4">
                  <button
                    type="submit"
                    id="send"
                    className="bg-secondary w-full py-3 rounded-md text-lg font-bold hover:bg-primary hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out"
                    disabled={isFormSubmitted} // Disable button after form submission
                  >
                    {isFormSubmitted ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-20 max-w-full px-4 lg:w-1/2 flex items-center justify-center">
            <div className="bg-primary opacity-90 relative" data-aos="fade-up">
              <h2 className="font-bold px-4 py-4 text-2xl">Another Information</h2>
              {infos.map((info, index) => (
                <div key={index} className="px-4 pb-4">
                  <p className="flex items-center gap-x-3 text-lg font-medium tracking-[2px] hover:text-slate-800 transition duration-300 ease-in-out hover:cursor-pointer">
                    <MdOutlineAttachEmail className="w-[40px] h-[10vh] lg:w-[20px]" />
                    <a href="mailto:hpsgaming212@gmail.com" className="font-semibold tracking-[2px]">
                      Click here to send me an email
                    </a>
                  </p>
                  <a href={`https://wa.me/6289518001464`} target='_blank' className="flex items-center gap-x-3 text-lg font-medium tracking-[2px] hover:text-slate-800 transition duration-300 ease-in-out hover:cursor-pointer">
                    <FaWhatsapp className="w-[40px] h-[10vh] lg:w-[20px]" /> {info.no_telp}
                  </a>
                  <p className="flex items-center gap-x-3 text-lg font-medium tracking-[2px] hover:text-slate-800 transition duration-300 ease-in-out hover:cursor-pointer">
                    <FaCity className="w-[40px] h-[10vh] lg:w-[20px]" /> {info.addres}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
