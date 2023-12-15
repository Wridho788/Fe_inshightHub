import Head from 'next/head';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import BlogSidebarPage from './blog-sidebar/page';

export const metadata = {
  title: "InsightHub",
  description: "Platform untuk Berbagi dan Menemukan Cerita Terbaik",
  author: "Ridho Wahyu Nugroho",
  keywords: ["Instagram", "Media Sosial", "Fotografi", "Berbagi Gambar", "Blog", "News", "Berita"],
  image: "/images/instahub-logo.png", // URL atau path relatif ke gambar logo InstaHub
  // tambahkan metadata lain sesuai kebutuhan proyek kamu
};
export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(',')} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <ScrollUp />
      <Hero />
      {/* <Blog /> */}
      <BlogSidebarPage />
    </>
  );
}
