async function Page({ params }) {
  const id = Number(params.id);

  let post;
  let allPosts = [];
  try {
    const response = await fetch(
      `https://main--next-iti.netlify.app/next-app-1/api/posts?id=${id}`
    );
    const allPostsResponse = await fetch(
      `https://main--next-iti.netlify.app/next-app-1/api/posts`
    );

    post = await response.json();
    allPosts = await allPostsResponse.json();
  } catch (err) {
    console.log("Error fetching post:", err);
  }

  console.log(post);
  const currentIndex = allPosts.findIndex((p) => p.id === id);
  const previousPost = allPosts[currentIndex - 1] || null;
  const nextPost = allPosts[currentIndex + 1] || null;

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      {post ? (
        <>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {post.title}
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            {post.body}
          </p>
          <div className="flex gap-4">
            {previousPost && (
              <a
                href={`/next-app-1/posts/${previousPost.id}`}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Previous
              </a>
            )}
            {nextPost && (
              <a
                href={`/next-app-1/posts/${nextPost.id}`}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Next
              </a>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center flex-col min-h-screen">
          <h1 className="text-4xl font-extrabold text-red-600">
            Post not found
          </h1>
        </div>
      )}
    </div>
  );
}

export default Page;
