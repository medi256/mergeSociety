import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content-wrapper">
        <h1 className="title">404</h1>
        <h2 className="subtitle">Page Not Found</h2>
        <p className="message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="home-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
