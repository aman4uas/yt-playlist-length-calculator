import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
  document.title = "Contact - YT Playlist Length Calculator";
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [btn_text, setBtnText] = useState("Send Message");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  async function submitHandler(event) {
    let result;
    event.preventDefault();
    setBtnText(" Sending");
    setLoading(true);
    try {
      result = await emailjs.sendForm('service_pzxyzpq', 'template_v0s4o91', form.current, process.env.REACT_APP_EMAIL_KEY);
      if (result.status !== 200) toast.error('Error Sending Message !!');
      else toast.success('Message sent sucessfully !!');
    }
    catch (error) {
      console.log(error.text);
      toast.error('Error Sending Message !!');
    }
    finally {
      setEmail(""); setMessage(""); setName(""); setSubject("");
      setBtnText("Send Message");
      setLoading(false);
    }

  }


  return (
    <section className="bg-black/60 w-full h-full">
      <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-4 lg:mb-10 font-light text-center text-[#D9D9D9] sm:text-xl">Got a technical issue? Want to send feedback? Let us know.</p>
        <form ref={form} className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
            <input name="username" onChange={(event) => setName(event.target.value)} value={username} autoComplete="off" type="text" id="name" className="block bg-transparent p-2.5 w-full text-sm rounded-lg border border-gray-300 shadow-sm" placeholder="John Doe" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-white/90">Your Email</label>
            <input name="email" onChange={(event) => setEmail(event.target.value)} value={email} autoComplete="off" required type="email" id="email" className="shadow-sm bg-transparent border border-gray-300 text-sm rounded-lg ring-primary-500 border-primary-500 block w-full p-2.5" placeholder="mail@email.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-sm font-medium">Subject</label>
            <input name="subject" onChange={(event) => setSubject(event.target.value)} value={subject} autoComplete="off" type="text" id="subject" className="block bg-transparent p-2.5 w-full text-sm rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-1 text-sm font-medium">Your Message</label>
            <textarea name="message" onChange={(event) => setMessage(event.target.value)} value={message} autoComplete="off" id="message" rows="4" className="block bg-transparent p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300" placeholder="Leave a comment..." required></textarea>
          </div>
          <div>
            <button disabled={loading} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0DDB94] sm:w-fit "><i className={`${(loading) ? 'fa fa-spinner fa-spin' : ''}`}></i>{btn_text}</button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;