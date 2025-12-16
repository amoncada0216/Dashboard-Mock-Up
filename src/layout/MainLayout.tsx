import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";

export default function MainLayout() {
  return (
    <>
      <AppSidebar />

      <main className="w-full h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
}
