import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateImage = (e) => {
    e.preventDefault();

    if (prompt.trim() === "") {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError("");
    setImages([]);

    const url = 'https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '2a1bcafe60msh9010fe08f0f9df6p144d19jsn9ad061decf42',
		'x-rapidapi-host': 'ai-text-to-image-generator-flux-free-api.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
      body: JSON.stringify({
        prompt: prompt,
        style_id: 4,
        size: "1-1",
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.final_result && result.final_result.length > 0) {
          setImages(result.final_result);
        } else if (result.message) {
          setError(result.message);
        } else {
          setError("No image generated.");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl p-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-slate-900">
            AI Image Generator
          </h1>

          <p className="mt-3 text-slate-500">
            Describe anything and let AI create beautiful images.
          </p>
        </div>

        {/* Prompt */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Prompt
          </label>

          <textarea
            rows="4"
            placeholder="Example: A futuristic city at sunset..."
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 resize-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={generateImage}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-indigo-600 py-4 text-white font-semibold transition hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-lg bg-red-100 border border-red-300 text-red-700 p-3">
            {error}
          </div>
        )}

        {/* Images */}
        <div className="mt-10">

          {loading && (
            <p className="text-center text-slate-500">
              Generating your images...
            </p>
          )}

          {!loading && images.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">

              {images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <img
                    src={img.origin}
                    alt={`Generated ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}

            </div>
          )}

          {!loading && images.length === 0 && !error && (
            <div className="mt-8 h-80 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-400">
              Your generated images will appear here.
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default ImageGenerator;