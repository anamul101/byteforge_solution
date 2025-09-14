"use client";
import React, { useState } from 'react';

// Define TypeScript interfaces for our data
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
}

interface BlogCategory {
  name: string;
  count: number;
  link: string;
}

// Mock data - including the Industry post from the image
const blogPosts: BlogPost[] = [
  {
    id: "1",
    category: "Product",
    title: "Stripe Tax: An all-in-one global tax compliance solution",
    date: "June 5, 2025",
    excerpt: "Stripe Tax is now an all-in-one global tax compliance solution, after adding international registration and filing to round out its tax calculation and collection features.",
    image: "https://images.stripeassets.com/fzn2n1nzq965/1jcYLFwhgFatWQW0GXq7iS/cccd8f2acf3f6824125fbaf8ff76a71a/Blog_Hero-Image_2160x1572px_RUN_WPP-1565.png?w=1080&q=80",
    imageAlt: "Blog > Stripe Tax > Hero image",
    authors: [
      {
        name: "Stephanie Neill",
        role: "Stripe Tax",
        avatar: "https://images.stripeassets.com/fzn2n1nzq965/mwlGt3ZMWM4UygQLsJY21/18896ed184cc9899881f52ebad496bf2/stephaneill.jpg.png?w=96&h=96",
        linkedin: "https://www.linkedin.com/in/stephanieneill/"
      }
    ],
    readMoreLink: "/blog/stripe-tax-an-all-in-one-global-tax-compliance-solution"
  },
  {
    id: "2",
    category: "Product",
    title: "Global Payouts: A new way to send money directly to third parties",
    date: "June 2, 2025",
    excerpt: "Last month at Stripe Sessions, we announced Global Payouts, which allows you to easily and securely send money to third parties around the world.",
    image: "https://images.stripeassets.com/fzn2n1nzq965/Bm1nefmuEX8HVplzo6vux/8b2b25efa2395b3b00edf651a03f9433/Blog_index_image__2500x2500_.png?w=1080&q=80",
    imageAlt: "Blog > Global Payouts > Index image",
    authors: [
      {
        name: "Stacey Wong",
        role: "Product, Global Payouts",
        avatar: "https://images.stripeassets.com/fzn2n1nzq965/swILlTroXi7QILZ87kQ0o/8ea2fcd73d5551a6a396b33d260eac34/stacey.jpg.png?w=96&h=96",
        linkedin: "https://www.linkedin.com/in/staceyelisewong/",
        hasAvatarBorder: true
      }
    ],
    readMoreLink: "/blog/global-payouts-a-new-way-to-send-money-directly-to-third-parties"
  },
  {
    id: "3",
    category: "Product",
    title: "Introducing Stablecoin Financial Accounts in 101 countries",
    date: "May 20, 2025",
    excerpt: "Earlier this month at Stripe Sessions, we announced Stablecoin Financial Accounts—our largest effort to date in expanding money management capabilities.",
    image: "https://images.stripeassets.com/fzn2n1nzq965/7atPhVIabiWA6rlbMRuchi/eed52544d77d5335c3fdb8c67499ec0d/V2_Blog_Index_Image.png?w=1080&q=80",
    imageAlt: "Blog > Introducing Stablecoin Financial Accounts > Index image",
    authors: [
      {
        name: "John Egan",
        role: "Crypto",
        avatar: "https://images.stripeassets.com/fzn2n1nzq965/2OuGEHchYAufzdrWbewPpu/1fd8f2fb772ec56e0fdb71c3102076fb/John_Egan_-_Headshot.jpg.png?w=96&h=96",
        linkedin: "https://www.linkedin.com/in/john3gan/",
        hasAvatarBorder: true
      }
    ],
    readMoreLink: "/blog/introducing-stablecoin-financial-accounts"
  },
  {
    id: "4",
    category: "Industry",
    title: "The top industries and business models using AI for fraud prevention",
    date: "August 12, 2025",
    excerpt: "Our recent survey of more than 4,000 payments leaders worldwide showed that 47% of businesses now use an AI tool or feature to detect and prevent fraud—making it the most popular application of AI in payments.",
    image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    imageAlt: "Blog > Industry > AI for fraud prevention",
    authors: [
      {
        name: "Josh Ackerman",
        role: "Product Lead, Stripe Radar",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=96&h=96&q=80",
        linkedin: "#",
        hasAvatarBorder: true
      }
    ],
    readMoreLink: "/blog/industries-using-ai-for-fraud-prevention"
  }
];

const categories: BlogCategory[] = [
  { name: "All", count: blogPosts.length, link: "/blog" },
  { name: "Corporate", count: 0, link: "/blog/corporate" },
  { name: "Engineering", count: 0, link: "/blog/engineering" },
  { name: "Industry", count: blogPosts.filter(post => post.category === "Industry").length, link: "/blog/industry" },
  { name: "Product", count: blogPosts.filter(post => post.category === "Product").length, link: "/blog/product" }
];

// Blog Author Component
const BlogAuthor: React.FC<{ author: Author }> = ({ author }) => {
  const profileLink = author.linkedin || author.twitter || "#";
  
  return (
    <figure className="flex items-center">
      <a href={profileLink} target="_blank" rel="noopener noreferrer">
        <img 
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ${author.hasAvatarBorder ? 'ring-2 ring-blue-500' : ''}`}
          src={author.avatar} 
          alt={author.name}
          width={48}
          height={48}
        />
      </a>
      <figcaption className="ml-3 sm:ml-4">
        <a 
          className="block text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author.name}
        </a>
        <span className="block text-xs sm:text-sm text-gray-600 dark:text-gray-400">{author.role}</span>
      </figcaption>
    </figure>
  );
};

// Blog Post Card Component
const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="mb-12 sm:mb-16 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/30 transition-all hover:shadow-lg dark:hover:shadow-gray-900/50">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
            <div className="flex-1">
              <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                <a 
                  href={`/blog/${post.category.toLowerCase()}`}
                  className="hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  {post.category}
                </a>
              </h2>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                <a 
                  href={post.readMoreLink}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </a>
              </h1>
            </div>

            <div className="sm:text-right">
              <time className="block text-sm text-gray-600 dark:text-gray-400 mb-3">
                <a 
                  href={post.readMoreLink}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.date}
                </a>
              </time>

              <div className="mb-4">
                {post.authors.map((author, index) => (
                  <BlogAuthor key={index} author={author} />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{post.excerpt}</p>
          </div>

          <a 
            href={post.readMoreLink}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 group transition-colors"
          >
            Read More
            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

        {/* Image */}
        <div className="lg:w-2/5">
          <figure className="rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-auto object-cover"
              src={post.image}
              alt={post.imageAlt}
              width={1080}
              height={720}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </article>
  );
};

// Category Navigation Component
const CategoryNavigation: React.FC<{ 
  categories: BlogCategory[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <nav className="mb-8 sm:mb-12 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-hide py-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeCategory === category.name
                ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
            }`}
          >
            {category.name} {category.count > 0 && `(${category.count})`}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Theme Toggle Component
const ThemeToggle: React.FC<{ 
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      )}
    </button>
  );
};

// Main Blog Component
const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Background with guides */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="flex justify-center h-full mx-auto max-w-6xl">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-px h-full bg-gray-100 dark:bg-gray-800"
              style={{ marginLeft: i === 0 ? '0' : '20%' }}
            />
          ))}
        </div>
      </div>

      <div className="relative px-4 sm:px-6 mx-auto max-w-6xl py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Updates, insights, and tips from the teams building Stripe
          </p>
        </header>

        {/* Category Navigation */}
        <CategoryNavigation 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">No posts found in this category.</p>
            </div>
          )}
        </div>

        {/* CTA Section - Only show if we're viewing a filtered category */}
        {activeCategory !== "All" && filteredPosts.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <a 
              href={`/blog/${activeCategory.toLowerCase()}`}
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              View all {activeCategory} posts
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        )}
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

export default BlogSection;