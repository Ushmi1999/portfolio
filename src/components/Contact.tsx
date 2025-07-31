import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 relative" id="contact">
      <div className="max-w-6xl mx-auto px-4 relative z-30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-lg">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Let's Connect</h3>
              <p className="text-gray-200 mb-8 leading-relaxed drop-shadow-sm">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 liquid-card">
                <div className="p-3 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl backdrop-blur-sm">
                  <Mail className="text-white drop-shadow-lg" size={20} />
                </div>
                <div>
                  <div className="text-gray-300 text-sm drop-shadow-sm">Email</div>
                  <div className="text-white font-medium drop-shadow-sm">Ushmi@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 liquid-card">
                <div className="p-3 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded-xl backdrop-blur-sm">
                  <Phone className="text-white drop-shadow-lg" size={20} />
                </div>
                <div>
                  <div className="text-gray-300 text-sm drop-shadow-sm">Phone</div>
                  <div className="text-white font-medium drop-shadow-sm">+94 76 527 5654</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 liquid-card">
                <div className="p-3 bg-gradient-to-r from-pink-500/50 to-rose-500/50 rounded-xl backdrop-blur-sm">
                  <MapPin className="text-white drop-shadow-lg" size={20} />
                </div>
                <div>
                  <div className="text-gray-300 text-sm drop-shadow-sm">Location</div>
                  <div className="text-white font-medium drop-shadow-sm">Kurunegala, Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4 drop-shadow-lg">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ushmi1999"
                  className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:border-purple-400/50 text-gray-200 hover:text-purple-300 transition-all duration-300 liquid-button"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ushmi-nimsara-6a30042a8/"
                  className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:border-blue-400/50 text-gray-200 hover:text-blue-300 transition-all duration-300 liquid-button"
                >
                  <Linkedin size={20} />
                </a>
                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl liquid-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Send className="text-white drop-shadow-lg" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Message Sent!</h3>
                <p className="text-gray-200 drop-shadow-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 font-medium mb-2 drop-shadow-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-200 font-medium mb-2 drop-shadow-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-200 font-medium mb-2 drop-shadow-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-200 font-medium mb-2 drop-shadow-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/20 ${
                    isSubmitting
                      ? 'bg-gray-500/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500/50 to-blue-500/50 hover:from-purple-500/70 hover:to-blue-500/70 hover:shadow-lg hover:shadow-purple-500/25 liquid-button'
                  } text-white drop-shadow-lg`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;