import { useEffect, useState } from "react";

export default function RandomNumberGenerator({ min: initialMin = "", max: initialMax = "" }) {
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setMin(initialMin);
    setMax(initialMax);
  }, [initialMin, initialMax]);

  const generate = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);

    if (isNaN(minVal) || isNaN(maxVal) || minVal > maxVal) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    const random = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setResult(random);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Random Number Generator</h1>
        <div className="flex gap-4 justify-center mb-4">
          <div>
            <label className="block text-sm">Min</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            />
          </div>
          <div>
            <label className="block text-sm">Max</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            />
          </div>
        </div>
        <button
          onClick={generate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result !== null && (
          <div className="text-xl font-semibold mt-4">
            🎲 Your number is: {result}
          </div>
        )}
      </div>
    </div>
  );
}
