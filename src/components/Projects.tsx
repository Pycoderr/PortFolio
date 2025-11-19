import { Brain, Activity, TrafficCone, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  icon: React.ReactNode;
  summary: string;
  problem: string;
  approach: string;
  results: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Voice Emotion Detection',
    icon: <Activity className="w-8 h-8" />,
    summary: 'Detects basic emotions from short speech clips to assist mental-health monitoring.',
    problem: 'Identifying emotional states from audio to enable adaptive UX and early-warning signals.',
    approach: 'Extracted MFCC / chroma / mel-spectrogram features; compared classical classifiers vs a hybrid CNN+LSTM model.',
    results: 'Best model reached ~93% accuracy on the validation split.',
    techStack: ['Python', 'Librosa', 'TensorFlow', 'Keras', 'Scikit-learn'],
    githubUrl: 'https://github.com/Pycoderr',
  },
  {
    title: 'Skin Cancer Detection',
    icon: <Brain className="w-8 h-8" />,
    summary: 'CNN-based classifier for dermoscopy images to aid early melanoma screening.',
    problem: 'Early detection of skin cancer from medical imagery using transfer learning.',
    approach: 'Fine-tuned pre-trained CNN architectures with data augmentation and class balancing.',
    results: 'Achieved high precision on minority classes critical for clinical deployment.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    githubUrl: 'https://github.com/Pycoderr',
  },
  {
    title: 'Smart Traffic Management',
    icon: <TrafficCone className="w-8 h-8" />,
    summary: 'YOLO-based adaptive traffic control system that reduces intersection waiting time.',
    problem: 'Static traffic lights cause unnecessary congestion during low-traffic periods.',
    approach: 'YOLOv5 for vehicle detection + adaptive timing algorithm based on real-time vehicle counts.',
    results: 'Reduced average waiting time by 35% in simulation experiments.',
    techStack: ['Python', 'YOLOv5', 'OpenCV', 'Flask'],
    githubUrl: 'https://github.com/Pycoderr',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Applied ML and computer vision projects solving real-world problems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>

                <p className="text-gray-600 font-medium">{project.summary}</p>

                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Problem</h4>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Approach</h4>
                    <p className="text-gray-600">{project.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Results</h4>
                    <p className="text-gray-600">{project.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
