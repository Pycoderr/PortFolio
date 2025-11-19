import { Code, Brain, Wrench, Users } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: <Code className="w-6 h-6" />,
    skills: ['Python', 'C++', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'ML & Libraries',
    icon: <Brain className="w-6 h-6" />,
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'Librosa'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Jupyter', 'VS Code', 'Git', 'Flask'],
  },
  {
    title: 'Soft Skills',
    icon: <Users className="w-6 h-6" />,
    skills: ['Teamwork', 'Communication', 'Problem Solving'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 text-white rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
