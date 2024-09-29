"use client";

import { useRouter } from "next/navigation";

const BlogButton = ({ whereToGo }) => {
  const navigate = useRouter();

  return (
    <div className="nav-button-container">
      <button
        className="nav-button nav-button-back"
        onClick={() => navigate.back()}
      >
        Back
      </button>
      <button
        className="nav-button nav-button-next"
        onClick={() => navigate.push(whereToGo)}
      >
        Read Next Blog
      </button>
    </div>
  );
};

export default BlogButton;
