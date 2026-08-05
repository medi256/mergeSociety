import React from "react";
import Link from "next/link";

const MoreArticles = ({ route }) => {
  return (
    <Link href={route} aria-label="See more articles" className="next-btn">
      See More
    </Link>
  );
};

export default MoreArticles;
