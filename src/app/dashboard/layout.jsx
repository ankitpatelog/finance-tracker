"use client";

import React from "react";
import Header from "../components/header";
import Headerdash from "../components/header2"
import Sidenav from "../components/sidenav";

export default function Layout({ children }) {
  return (
    <div >
      {/* Navbar on top */}
      <Headerdash />

      {/* Sidebar and main content area */}
      <div >
        <Sidenav />

        {/* Main content changes based on page route */}
        <main >
          {children}
        </main>
      </div>
    </div>
  );
}
