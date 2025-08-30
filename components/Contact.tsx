import React, { useState } from 'react';

const ContactInfoItem: React.FC<{ icon: JSX.Element; text: string; href?: string }> = ({ icon, text, href }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center mt-1">
      {icon}
    </div>
    <div>
      {href ? (
        <a 
          href={href} 
          className="text-lg text-slate-200 hover:text-pink-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <p className="text-lg text-slate-200">{text}</p>
      )}
    </div>
  </div>
);

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formData.name) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid.';
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required.';
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormStatus('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Contact us for a free consultation. Let's discuss how we can achieve your technology goals.
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfoItem icon={<PhoneIcon />} text="+971 56 687 0197" href="tel:+971566870197" />
                <ContactInfoItem icon={<PhoneIcon />} text="+971 56 350 7826" href="tel:+971563507826" />
                <ContactInfoItem icon={<MailIcon />} text="sah.itservicesdxb@gmail.com" href="mailto:sah.itservicesdxb@gmail.com" />
                <ContactInfoItem icon={<LocationIcon />} text="Office 39-4, 402 H.H. Saud Bin Saqar, Al Muteena, Dubai." />
              </div>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none" />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                 <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none" />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none"></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                <div>
                  <button type="submit" className="w-full bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </div>
                {formStatus && <p className="text-green-400 text-center">{formStatus}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;