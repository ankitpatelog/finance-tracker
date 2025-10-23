"use client";

import { Wrench } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="-ml-7 pt-5 px-8 ">
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Wrench className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-semibold text-slate-800">
          This Page is Under Development
        </h1>
        <p className="text-slate-500 max-w-md">
          We’re currently working on this feature to make your experience even better.
          Please check back soon!
        </p>
      </div>
    </div>
    </div>
  );
}
