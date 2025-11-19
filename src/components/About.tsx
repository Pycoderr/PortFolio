export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I'm Kenneth Lobo, an aspiring AI Engineer and B.Tech (CSE) student at Bennett University.
            I focus on applied machine learning and computer vision — translating research ideas into
            working systems and prototypes. I enjoy projects that combine signal processing, deep learning,
            and real-world constraints: for example, building voice-emotion classifiers for mental-health
            monitoring and developing YOLO-based traffic solutions that reduce waiting time in simulation.
          </p>

          <p>
            My toolkit includes Python, TensorFlow/Keras, OpenCV, Librosa, and Scikit-learn, and I work
            comfortably across the full model lifecycle: data cleaning and augmentation, model training,
            evaluation, and deployment (Flask/REST demos). I also contribute to algorithmic problem solving
            and system-level design — which helps when models must be efficient and robust.
          </p>

          <p>
            Outside of projects, I pursue online certs to keep my foundation strong (TensorFlow, Data Viz, SQL)
            and participate in hackathons where I can test prototypes in short timeframes. I'm actively looking
            for internships and collaborations — if you have a problem that could benefit from ML, let's talk.
          </p>
        </div>
      </div>
    </section>
  );
}
