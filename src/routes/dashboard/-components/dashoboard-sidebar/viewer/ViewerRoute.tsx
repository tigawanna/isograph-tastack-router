import { iso } from "@iso";
import { useLazyReference, useResult } from "@isograph/react";

interface ViewerRouteProps {}

export function ViewerRoute({}: ViewerRouteProps) {
  const { fragmentReference } = useLazyReference(iso(`entrypoint Query.Viewer`), {
    /* query variables */
  });
  const HomePage = useResult(fragmentReference);
  return <HomePage />;
}
