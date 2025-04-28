import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or return to the homepage.</p>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
