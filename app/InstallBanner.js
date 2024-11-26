"use client";

import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      const isAppInstalled = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;
      const isPromptDismissed =
        localStorage.getItem("installPromptDismissed") === "true";

      if (!isAppInstalled && !isPromptDismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("installPromptDismissed", "true");
  };

  if (!showPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0", // Changed from bottom to top
        left: "0",
        right: "0",
        backgroundColor: "#007bff", // Updated background color
        color: "white", // Updated text color
        padding: "16px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>Install Our App</h3>
      <p style={{ margin: "0 0 16px" }}>
        Get quick access to our website from your home screen!
      </p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={handleInstall}
          style={{
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #ccc",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Not Now
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
