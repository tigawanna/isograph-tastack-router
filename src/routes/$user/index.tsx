import { createFileRoute, useParams } from "@tanstack/react-router";
import { ViewerComponent } from "./-components/user/ViewerComponent";

export const Route = createFileRoute("/$user/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useParams({ from: "/$user" });
  return (
    <div className="min--screen flex justify-center items-center gap-2 p-2">
      <ViewerComponent login={user} />
    </div>
  );
}
