import { createFileRoute, useParams } from "@tanstack/react-router";
import { UserPageComponent } from "./-components/user/UserPageComponent";
import { Suspense } from "react";
import { RouterPendingComponent } from "@/lib/tanstack/router/RouterPendingComponent";


export const Route = createFileRoute("/$user/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useParams({ from: "/$user" });
  return (
    <div className="min--screen flex justify-center items-center gap-2 p-2">
      <Suspense fallback={<RouterPendingComponent />}>
      <UserPageComponent login={user} />
      </Suspense>
    </div>
  );
}
