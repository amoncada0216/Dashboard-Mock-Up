import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";
import Homepage from "../pages/Homepage";

export default function AppLayout() {
  return (
    <>
      <AppSidebar />
      <main className="w-full h-screen flex flex-col">
        <Navbar />
        <Homepage />
      </main>
    </>
  );
}
