import React from 'react'
import BlogCard from '../../../components/BlogCard';
import Button from '../../../components/Button';
import avatar1 from '../../../assets/Avatar1.png'
import avatar2 from '../../../assets/Avatar2.png'
import avatar3 from '../../../assets/Avatar3.png'
import blog1 from '../../../assets/blog1.png'
import blog2 from '../../../assets/blog2.png'
import blog3 from '../../../assets/blog3.png'

const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      authorImage: avatar1,
      date: "20 Jan 2024",
      image: blog1,
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      authorImage: avatar3,
      date: "19 Jan 2024",
      image:blog2 ,
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      authorImage: avatar2,
      date: "18 Jan 2024",
      image: blog3,
    },
  ];

const BlogSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <header className="flex items-center justify-between mb-8">
        <div>
            <h4 className="text-sm font-semibold text-red-500 uppercase">Our blog</h4>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Latest blog posts</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
            Tools and strategies modern teams need to help their companies grow.
            </p>
        </div>

        <div className="hidden md:flex text-center mt-8 min-w-24">
          <Button className='rounded-md'>View all posts</Button>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard post={post} key={index}/>
        ))}
      </div>

      <div className="flex md:hidden text-center mt-7 w-full">
          <Button className='rounded-md w-full'>View all posts</Button>
        </div>
    </section>
  )
}

export default BlogSection