import { useState } from 'react';
import { Youtube, Copy, Download, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleExtract = async () => {
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
        setError('Please enter a valid YouTube URL');
        setLoading(false);
        return;
      }
      
      // Mock tags for demonstration
      setTags(['youtube', 'video', 'tutorial', 'technology', 'education']);
      setLoading(false);
    }, 1500);
  };

  const copyTags = () => {
    navigator.clipboard.writeText(tags.join(', '));
    setShowCopyNotification(true);
    setTimeout(() => {
      setShowCopyNotification(false);
    }, 2000);
  };

  const downloadTags = async () => {
    try {
      setDownloading(true);
      // Create text content
      const content = tags.map(tag => `#${tag}`).join('\n');
      
      // Create blob and download
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'youtube-tags.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download tags. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Notification */}
      <div
        className={`fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-opacity duration-300 ${
          showCopyNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <CheckCircle2 size={20} />
        Tags Copied!
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF4B6E] to-[#4B79FF] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Youtube size={40} />
              <span className="text-2xl font-bold">TagExtractor</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-[#FFB84B] transition-colors">Home</a>
              <a href="#" className="hover:text-[#FFB84B] transition-colors">Tools</a>
              <a href="#" className="hover:text-[#FFB84B] transition-colors">About</a>
              <a href="#" className="hover:text-[#FFB84B] transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#333333]">
            Extract YouTube Video Tags
          </h1>
          
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter YouTube URL"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B79FF] transition-all"
              />
              <button
                onClick={handleExtract}
                disabled={loading}
                className="bg-gradient-to-r from-[#FF4B6E] to-[#4B79FF] text-white px-6 md:px-8 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Extract Tags'
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            {tags.length > 0 && (
              <div className="mt-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                  <h2 className="text-xl font-semibold text-[#333333]">
                    Found {tags.length} Tags
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={copyTags}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Copy size={16} />
                      Copy All
                    </button>
                    <button
                      onClick={downloadTags}
                      disabled={downloading}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      {downloading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Download size={16} />
                      )}
                      Download
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#333333]">How to Use TagExtractor</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Copy the URL of any YouTube video you want to analyze</li>
                <li>Paste the URL into the input field above</li>
                <li>Click the "Extract Tags" button to retrieve the video's tags</li>
                <li>Use the "Copy All" button to copy tags to your clipboard</li>
                <li>Click "Download" to save tags as a text file</li>
              </ol>
            </section>

            <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#333333]">YouTube SEO Best Practices</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Tags play a crucial role in helping YouTube understand your content and recommend it to the right audience. Here are some key tips for effective tag usage:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use specific, relevant tags that accurately describe your content</li>
                  <li>Include a mix of broad and narrow-focused keywords</li>
                  <li>Place the most important tags at the beginning of your tag list</li>
                  <li>Include common misspellings of relevant keywords</li>
                  <li>Use 10-15 tags per video for optimal results</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#333333]">Why Tags Matter</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  While YouTube's algorithm has evolved, tags remain an important factor in video discovery. They help:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Improve search rankings for specific keywords</li>
                  <li>Help videos appear in related videos suggestions</li>
                  <li>Provide context to YouTube's recommendation system</li>
                  <li>Make your content more discoverable to your target audience</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#FF4B6E] to-[#4B79FF] text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TagExtractor</h3>
              <p className="text-sm opacity-80">
                The easiest way to extract and analyze YouTube video tags.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-[#FFB84B] transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-[#FFB84B] transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-[#FFB84B] transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#FFB84B] transition-colors">Twitter</a>
                <a href="#" className="hover:text-[#FFB84B] transition-colors">GitHub</a>
                <a href="#" className="hover:text-[#FFB84B] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-80">
            © {new Date().getFullYear()} TagExtractor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;