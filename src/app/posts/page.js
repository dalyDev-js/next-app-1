import Link from "next/link";
import React from "react";

async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return (
    <div className="min-h-screen flex items-center justify-center flex-wrap gap-8">
      {data.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
