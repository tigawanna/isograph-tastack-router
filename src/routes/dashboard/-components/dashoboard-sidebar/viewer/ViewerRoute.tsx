import { iso } from "@iso";
import { useLazyReference, useResult } from "@isograph/react";

interface ViewerComponentProps {}

export function ViewerComponent({}: ViewerComponentProps) {
  const { fragmentReference } = useLazyReference(iso(`entrypoint Query.Viewer`), {
    /* query variables */
  });
  const ViewerContainer = useResult(fragmentReference);
  return <ViewerContainer />;
}
