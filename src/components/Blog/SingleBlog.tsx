"use client";
import React, { useState } from 'react';

// Define TypeScript interfaces
interface Author {
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  hasAvatarBorder?: boolean;
}

interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  authors: Author[];
  readMoreLink: string;
  stats?: {
    value: string;
    description: string;
  };
}

// Single blog post data
const blogPost: BlogPost = {
  id: "4",
  category: "Industry",
  title: "The top industries and business models using AI for fraud prevention",
  date: "August 12, 2025",
  excerpt: "Our recent survey of more than 4,000 payments leaders worldwide showed that 47% of businesses now use an AI tool or feature to detect and prevent fraud—making it the most popular application of AI in payments. But adoption isn't uniform across all sectors. Understanding which types of companies are leading this shift—and why—offers insights into where fraud prevention is heading and which strategies are most effective.",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  imageAlt: "AI for fraud prevention",
  authors: [
    {
      name: "Josh Ackerman",
      role: "Product Lead, Stripe Radar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=96&h=96&q=80",
      linkedin: "https://www.linkedin.com/",
      hasAvatarBorder: true
    }
  ],
  readMoreLink: "/blog/ai-fraud-prevention-industries",
  stats: {
    value: "62%",
    description: "of insurance companies use AI to fight fraud"
  }
};

// Blog Author Component
const BlogAuthor: React.FC<{ author: Author }> = ({ author }) => {
  const profileLink = author.linkedin || author.twitter || "#";
  
  return (
    <figure className="flex items-center">
      <a href={profileLink} target="_blank" rel="noopener noreferrer">
        <img 
          className={`w-12 h-12 rounded-full object-cover ${author.hasAvatarBorder ? 'ring-2 ring-blue-100' : ''}`}
          src={author.avatar} 
          alt={author.name}
          width={48}
          height={48}
        />
      </a>
      <figcaption className="ml-4">
        <a 
          className="block text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author.name}
        </a>
        <span className="block text-sm text-gray-600">{author.role}</span>
      </figcaption>
    </figure>
  );
};

// Single Blog Post Component
const SingleBlogPost: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", count: 123, link: "/blog" },
    { name: "Corporate", count: 15, link: "/blog/corporate" },
    { name: "Engineering", count: 42, link: "/blog/engineering" },
    { name: "Industry", count: 28, link: "/blog/industry" },
    { name: "Product", count: 38, link: "/blog/product" }
  ];

  const handleCategoryClick = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveCategory(category);
    // In a real implementation, this would filter posts or navigate to category page
    console.log(`Category clicked: ${category}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background with guides */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="flex justify-center h-full mx-auto max-w-6xl">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-px h-full bg-gray-200"
              style={{ marginLeft: i === 0 ? '0' : '20%' }}
            />
          ))}
        </div>
      </div>

      <div className="relative px-6 mx-auto max-w-4xl py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Updates, insights, and tips from the teams building Stripe
          </p>
        </header>

        {/* Category Navigation */}
        <nav className="mb-12 border-b border-gray-200">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-2">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.link}
                onClick={(e) => handleCategoryClick(category.name, e)}
                className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeCategory === category.name
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {category.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Blog Post Content */}
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Category */}
          <div className="px-8 pt-8">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <a 
                href={`/blog/${blogPost.category.toLowerCase()}`}
                className="hover:text-blue-800 transition-colors"
              >
                {blogPost.category}
              </a>
            </h2>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <a 
                href={blogPost.readMoreLink}
                className="hover:text-blue-600 transition-colors"
              >
                {blogPost.title}
              </a>
            </h1>

            {/* Excerpt */}
            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">{blogPost.excerpt}</p>
            </div>

            {/* Read More Link */}
            <div className="mb-6">
              <a 
                href={blogPost.readMoreLink}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group transition-colors"
              >
                Read more
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 10 10" aria-hidden="true">
                  <g fillRule="evenodd">
                    <path className="stroke-current" d="M0 5h7" strokeWidth="1.5" />
                    <path className="fill-current" d="M1 1l4 4-4 4" />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full">
            <img
              className="w-full h-64 object-cover"
              src={blogPost.image}
              alt={blogPost.imageAlt}
              width={1080}
              height={720}
              loading="lazy"
            />
          </figure>

          {/* Stats Box */}
          {blogPost.stats && (
            <div className="px-8 py-6 bg-blue-50 border-t border-blue-100">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-blue-900 mr-4">{blogPost.stats.value}</span>
                <span className="text-lg text-blue-800">{blogPost.stats.description}</span>
              </div>
            </div>
          )}

          {/* Meta Information */}
          <div className="px-8 py-6 border-t border-gray-100">
            {/* Date */}
            <time className="block text-sm text-gray-600 mb-4">
              <a 
                href={blogPost.readMoreLink}
                className="hover:text-blue-600 transition-colors"
              >
                {blogPost.date}
              </a>
            </time>

            {/* Author */}
            <div className="flex items-center justify-between">
              {blogPost.authors.map((author, index) => (
                <BlogAuthor key={index} author={author} />
              ))}
              
              {/* Social Sharing (optional) */}
              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts or CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <a 
            href="/blog/industry"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View more Industry posts
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 10 10" aria-hidden="true">
              <g fillRule="evenodd">
                <path className="stroke-current" d="M0 5h7" strokeWidth="1.5" />
                <path className="fill-current" d="M1 1l4 4-4 4" />
              </g>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SingleBlogPost;