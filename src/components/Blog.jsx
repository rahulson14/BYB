// src/components/Blog.jsx
import { useState } from 'react';

const Blog = () => {
  // Sample blog posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'May 15, 2023',
      excerpt: 'Learn the basics of React and how to create your first component.',
      content: 'React is a JavaScript library for building user interfaces...',
      category: 'React'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      date: 'June 2, 2023',
      excerpt: 'Tips and tricks for using Tailwind CSS effectively in your projects.',
      content: 'Tailwind CSS is a utility-first CSS framework that allows you...',
      category: 'CSS'
    },
    {
      id: 3,
      title: 'State Management in 2023',
      date: 'June 18, 2023',
      excerpt: 'Comparing different state management solutions for React applications.',
      content: 'When building complex React applications, you often need...',
      category: 'React'
    }
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  // Filter posts by category
  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-container p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      {!selectedPost ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <span className="text-sm text-blue-600">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
                <button className="mt-4 text-blue-600 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Single Post View */
        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-4 text-blue-600 hover:underline flex items-center"
          >
            ← Back to all posts
          </button>
          <span className="text-sm text-blue-600">{selectedPost.category}</span>
          <h2 className="text-2xl font-bold mt-2 mb-2">{selectedPost.title}</h2>
          <p className="text-gray-500 text-sm mb-6">{selectedPost.date}</p>
          <div className="prose max-w-none">
            <p>{selectedPost.content}</p>
            {/* In a real app, you might use dangerouslySetInnerHTML for HTML content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;