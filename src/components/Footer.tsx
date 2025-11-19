export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kenneth Lobo. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            AI Engineer | ML Practitioner | B.Tech CSE @ Bennett University
          </p>
        </div>
      </div>
    </footer>
  );
}
