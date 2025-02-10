import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";
import { queryClient, router } from "./main";
import { themeChange } from "theme-change";

export function App() {
  useEffect(() => {
    document.documentElement.dataset.style = "vertical";
    themeChange(false);
  }, []);
  // const viewer = useViewer();
  return (
    <RouterProvider
      router={router}
      defaultPreload="intent"
      context={{
        queryClient,
        // viewer:viewer.viewer
      }}
    />
  );
}
