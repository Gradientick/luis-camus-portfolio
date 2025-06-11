// src/components/LoadingScreen.jsx
import React from "react";

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-blue-600"></div>
  </div>
);

export default LoadingScreen;