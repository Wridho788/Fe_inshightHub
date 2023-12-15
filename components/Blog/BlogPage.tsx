import Image from "next/image";
import Link from "next/link";
import { NewsData } from "@/types/data";

const BlogPage = ({ blog }: { blog: NewsData }) => {
    const imgurl = 'https://images.unsplash.com/photo-1594663653925-365bcbf7ef86?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const { source, author, title, url, publishedAt, content } = blog;
    return (
        <div className="w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-10 rounded-xl p-4 mb-4  hover:shadow-two dark:hover:shadow-gray-dark ">
            <div className="blog-image mr-4">

                <Image src={imgurl} alt={title}
                    width={500}
                    height={500}
                    className="rounded-md" />
            </div>
            <div className="blog-details flex-grow">
                <Link href={url} >
                    <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-300">
                        {title}
                    </h2>
                </Link>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">{content}</p>
                <p className="text-gray-500">Author: <strong>{author}</strong></p>
                <p className="text-gray-500">Source: <strong>{source?.name}</strong></p>
                <p className="text-gray-500">Published At: <strong>{new Date(publishedAt).toLocaleString()}</strong></p>
                <p className="text-gray-500 border border-gray-300 rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize inline-flex text-white mt-2">Technology</p>
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 block"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogPage