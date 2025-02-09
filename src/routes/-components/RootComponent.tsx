import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export function RootComponent() {
  return (
    <div className="content min-h-screen w-full">
      <TailwindIndicator />
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <Toaster reverseOrder />
    </div>
  );
}
