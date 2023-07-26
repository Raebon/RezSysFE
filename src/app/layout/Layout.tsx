import { FC } from "react";
import AuthStatus from "./AuthStatus";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 antialisased text-slate-900">
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-2 min-h-[80vh]">
        <AuthStatus />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
