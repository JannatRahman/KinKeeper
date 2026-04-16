"use client";



export default function NoActivityPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-md w-full border border-pink-100">
        
        <div className="flex justify-center mb-4">
          <div className="bg-pink-100 p-4 rounded-full">
            
          </div>
        </div>

        <h1 className="text-2xl font-bold text-pink-600 mb-2">
          No Activity Yet
        </h1>

        <p className="text-gray-500 mb-6">
          You don’t have any activity right now. Once you contact your friends,
          everything will appear here.
        </p>

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition">
          Get Started
        </button>

      </div>
    </div>
  );
}