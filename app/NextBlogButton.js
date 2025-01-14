"use client";

import { useRouter } from "next/navigation";

export const Project = () => {
  const navigate = useRouter();

  return (
    <button className="nav-button" onClick={() => navigate.back()}>
      BACK
    </button>
  );
};
