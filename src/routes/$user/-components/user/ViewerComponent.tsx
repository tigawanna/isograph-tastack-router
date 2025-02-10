import { iso } from "@iso";
import { useLazyReference, useResult } from "@isograph/react";

interface ViewerComponentProps {
login: string
}

export function ViewerComponent({login}: ViewerComponentProps) {
  const { fragmentReference } = useLazyReference(iso(`entrypoint Query.User`), {
    /* query variables */
    login
  });
  const ViewerContainer = useResult(fragmentReference);
  return <ViewerContainer />;
}
