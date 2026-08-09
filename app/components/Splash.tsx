"use client";

import { useEffect, useState } from "react";

export default function Splash() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-500 animate-pulse">
        TRUETEAM
      </h1>
    </div>
  );
}