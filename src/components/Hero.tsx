import { Github, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              Kenneth Lobo
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600">
              Aspiring AI Engineer
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building practical ML systems for audio, vision, and smart cities.
            </p>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Pycoderr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/kenneth-lobo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-blue-700" />
            </a>
            <button
              onClick={scrollToContact}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-700" />
            </button>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
