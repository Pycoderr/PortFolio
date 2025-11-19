import { GraduationCap, Award } from 'lucide-react';

const certifications = [
  { name: 'TensorFlow for AI/ML', score: '100%' },
  { name: 'Dynamic Programming & Greedy', score: '99.9%' },
  { name: 'Data Visualization with R', score: '98%' },
  { name: 'SQL for Data Science', score: '92.5%' },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">B.Tech — Computer Science & Engineering</h4>
                <p className="text-gray-600 mt-1">Bennett University</p>
                <p className="text-gray-600">Expected Graduation: 2027</p>
                <p className="text-blue-600 font-semibold mt-2">CGPA: 8.6–8.9</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-lg">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700 font-medium">{cert.name}</span>
                  <span className="text-blue-600 font-semibold">{cert.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
