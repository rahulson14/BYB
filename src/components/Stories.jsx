import React from "react";

const videos = [
  {
    title: "Story 1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://source.unsplash.com/300x200/?nature,water"
  },
  {
    title: "Story 2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://source.unsplash.com/300x200/?forest"
  },
  {
    title: "Story 3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://source.unsplash.com/300x200/?climate,change"
  },
  {
    title: "Story 4",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://source.unsplash.com/300x200/?tree,earth"
  }
];

const Stories = () => {
  return (
    <div className="bg-red-700 py-8 px-4">
      <h2 className="text-3xl font-bold text-white mb-6">STORIES FOR AWARENESS</h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <video
              src={video.videoUrl}
              poster={video.thumbnail}
              controls
              className="w-full h-40 object-cover"
              autoPlay="true"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
