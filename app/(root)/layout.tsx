import React from "react";
import Navbar from "../components/navigation/navbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default HomeLayout;
