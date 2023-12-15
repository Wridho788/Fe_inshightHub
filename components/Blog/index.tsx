"use client"
import { useEffect, useState } from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import BlogPage from './BlogPage';

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const fetchData = async () => {
    try {
      const apiKey = process.env.NEWS_API_KEY;
      console.log(apiKey, 'apikey')
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setBlog(data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=875c8748eabf4a9a822730ac5e2fc04c


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          center
        />

        <div className='w-full'>
          {blog.length > 0 && <BlogPage blog={blog[0]} />}

        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blog.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
