import { Copy, Download, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react'

const URLInputSection = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseURL = import.meta.env.VITE_BASE_API_URL;
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  
  {/* URL to VideoId */}
  const extractVideoID = (url: string): string | null => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  {/* Fetch Tags */}
  const fetchVideoTags = async (videoId: string, apiKey: string): Promise<string[] | null> => {
    const apiUrl = `${baseURL}&id=${videoId}&key=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        return data.items[0].snippet.tags || [];
      } else {
        console.error('No video found with the provided ID.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching video details:', error);
      return null;
    }
  };
  
  {/* Handle Btn Press */}
    const handleExtract = async () => {
      setLoading(true);
      setError('');
      
        if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
          setError('Please enter a valid YouTube URL');
          setLoading(false);
          return;
        }

      console.log(url);
      const videoId = extractVideoID(url);
      console.log(videoId);

        if (videoId) {
          const result = await fetchVideoTags(videoId, apiKey);
          if (result) {
            setTags(result);
          } else {
            setError('Failed to fetch tags.');
          }
        } else {
          setError('Please enter a valid YouTube URL');
          setLoading(false);
          return;
        }

        setLoading(false);
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
    <div className="bg-transparent rounded-xl shadow-xl">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Input Field */}
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter YouTube URL"
                className="flex-grow px-4 py-3 rounded-lg border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0000B6] transition-all text-white"
              />
              <button
                onClick={handleExtract}
                disabled={loading}
                className="bg-white/20 border border-white/20 text-white px-6 md:px-8 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Extract Tags'
                )}
              </button>
            </div>
            {/* Error Container */}
            {error && (
              <div className="mt-4 p-4 bg-red-600/20 border border-red-600/50 text-red-600 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} />
                {error}
              </div>
            )}
            {/* Result Container */}
            {tags.length > 0 && (
              <div className="mt-4 p-6 rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                  <h2 className="text-xl font-semibold text-white">
                    Found {tags.length} Tags
                  </h2>
            <div className="flex gap-2">
                    {/* Notification & Coppy Btn */}
                    {
                      showCopyNotification ? 
                          <div
                            className={`bg-green-500/20 text-green-500 border border-green-500/50 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-opacity duration-300 ${showCopyNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                          >
                            <CheckCircle2 size={20} />
                            Tags Copied!
                          </div>
                        :
                          <button
                            onClick={copyTags}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 border border-white/20 hover:opacity-90 transition-colors duration-300 hover:border-white/50"
                          >
                            <Copy size={16} />
                            Copy All
                          </button>
                    }
                    <button
                      onClick={downloadTags}
                      disabled={downloading}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 border border-white/20 hover:opacity-90 transition-colors duration-300 hover:border-white/50"
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
                {/* Extracted Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/20 rounded-lg p-3 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
  )
}

export default URLInputSection