import React from "react";
import Navbar from "../components/navigation/navbar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
