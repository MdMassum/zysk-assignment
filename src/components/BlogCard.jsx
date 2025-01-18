import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = ({ post }) => {
  return (
    <div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xs font-semibold text-red-500">{post.category}</p>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mt-2 hover:text-red-500 cursor-pointer">
                  {post.title}
                </h3>
                <FiArrowUpRight size={20} className="mt-2 mr-3 cursor-pointer"/>
              </div>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <div className="flex items-center mt-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
  );
};

export default BlogCard;
