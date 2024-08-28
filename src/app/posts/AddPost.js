"use client";
import React, { useState } from "react";

function AddPost({ onPostAdded }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      const newPost = await response.json();
      onPostAdded(newPost.post);
      setTitle("");
      setBody("");
    } else {
      console.error("Failed to add post");
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
