import React from 'react';

const Portfolio = () => {
  // Data portfolio dengan gambar dan video
  const portfolioItems = [
    {
      type: "image",
      src: "https://via.placeholder.com/300x200",
      title: "Amazing Architecture",
      description: "A beautiful view of modern architecture."
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Travel Highlights",
      description: "A short video showcasing scenic travel destinations."
    },
    {
      type: "image",
      src: "https://via.placeholder.com/300x200",
      title: "Urban Landscape",
      description: "Capturing the essence of city life."
    },
    // Tambahkan lebih banyak item jika diperlukan
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="aspect-w-16 aspect-h-9">
              {item.type === "video" ? (
                <video src={item.src} controls className="w-full h-full object-cover rounded-lg" />
              ) : (
                <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg" />
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center text-gray-800">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
