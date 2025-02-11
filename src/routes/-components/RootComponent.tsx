import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { useIsographEnviroment } from "@/lib/isograph/client";
import { RouterPendingComponent } from "@/lib/tanstack/router/RouterPendingComponent";
import { IsographEnvironmentProvider } from "@isograph/react/dist/react/IsographEnvironmentProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, useRouteContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export function RootComponent() {
  const { PAT } = useRouteContext({ from: "__root__" });
  const environment = useIsographEnviroment(PAT!);
  return (
    <div className="content min-h-screen w-full">
      <IsographEnvironmentProvider environment={environment}>
        <TailwindIndicator />
        <Suspense fallback={<RouterPendingComponent />}>
          <Outlet />
        </Suspense>
        <TanStackRouterDevtools position="bottom-left" />
        <ReactQueryDevtools buttonPosition="bottom-right" />
        <Toaster reverseOrder />
      </IsographEnvironmentProvider>
    </div>
  );
}
