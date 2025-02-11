import { iso } from "@iso";
import { useLazyReference, useResult } from "@isograph/react";

interface UserPageComponentProps {
login: string
}


export function UserPageComponent({login}: UserPageComponentProps) {
  const { fragmentReference } = useLazyReference(iso(`entrypoint Query.User`), {
    /* query variables */
    login
  });
  const UserContainer = useResult(fragmentReference);
  return <UserContainer />;
}
