import React from "react";

const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "Maryam",
      avatar: "https://i.pravatar.cc/50?img=1",
      message: "Amazing products! The quality is top-notch.",
      date: "2025-09-19 10:30 AM",
    },
    {
      id: 2,
      name: "Sara",
      avatar: "https://i.pravatar.cc/50?img=2",
      message: "Fast delivery and excellent customer service.",
      date: "2025-09-18 02:15 PM",
    },
    {
      id: 3,
      name: "Noor",
      avatar: "https://i.pravatar.cc/50?img=3",
      message: "I love this store! Highly recommended.",
      date: "2025-09-17 06:45 PM",
    },

    
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24 pb-12 px-4">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Customer Comments
      </h2>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {comments.map((c) => (
          <div key={c.id} className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-5">
            <div className="flex items-center mb-3">
              <img
                src={c.avatar}
                alt={c.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{c.name}</p>
                <p className="text-gray-400 text-xs">{c.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
