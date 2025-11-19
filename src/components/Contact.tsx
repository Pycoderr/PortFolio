import { Mail, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Want to collaborate or hire me?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          I'm open to internships, research collaborations, and freelance projects in AI/ML and computer vision.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:E23CSEU1418@bennett.edu.in?subject=[Internship/Project] — ML Intern / Collaboration with Kenneth Lobo"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Mail size={24} />
                Email Kenneth
              </a>

              <a
                href="https://github.com/Pycoderr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Github size={24} />
                View GitHub
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <Mail size={20} />
                  <a
                    href="mailto:E23CSEU1418@bennett.edu.in"
                    className="hover:text-blue-600 transition-colors"
                  >
                    E23CSEU1418@bennett.edu.in
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <Github size={20} />
                  <a
                    href="https://github.com/Pycoderr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    github.com/Pycoderr
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 rounded-lg p-4 mt-6">
              <div className="flex items-start gap-3">
                <Send size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Suggested Email Subject</h4>
                  <p className="text-sm text-gray-700">
                    "[Internship/Project] — ML Intern / Collaboration with Kenneth Lobo"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
