import { client } from "@/sanity/lib/client";
import React from "react";

export const metadata = {
  title: "Aufa Rijal Portofolio | Posts",
};

export default async function PostsSearchPage() {
  const posts = await client.fetch(/* groq */`*[_type == "post"]{
        _key,
        title,
        "slug": slug.current,
        excerpt,
        date,
        "by": author->firstName + " " + author->lastName
    }`);

  return (
    <>
      <div className="container mx-auto min-h-screen">
        <h1 className="text-center text-6xl font-bold">Posts</h1>

        <div className="max-w-3xl mx-auto mt-10">
          <ul className="flex flex-col gap-6">
            {posts.map((post: any) => (
              <li key={post._key}>
                <PostItem
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.by}
                  slug={post.slug}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const PostItem = ({ title, slug, excerpt, date, author }: any) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <p className="text-gray-500 text-sm">
          {new Date(date).toLocaleDateString()} by {author}
        </p>
        <a href={`/posts/${slug}`} className="text-green-600 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};
