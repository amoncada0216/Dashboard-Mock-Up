import { ThemeProvider } from "@/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultOpen = localStorage.getItem("sidebar_state") === "true";

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
