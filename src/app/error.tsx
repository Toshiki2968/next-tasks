"use client";

import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">Error</h1>
      <p className="text-4xl font-medium">UnExcepted Error Occurred</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;