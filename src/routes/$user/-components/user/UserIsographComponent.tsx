import { iso } from "@iso";
import { ProfileDetails } from "./Profile";
import { useImperativeReference } from "@isograph/react";
interface ViewerProps {}

export const UserIsograph = iso(`
  field Query.User($login: String!) @component {
    user(login: $login) {
    id
    name
    login
    email
    bio
    avatarUrl
    company
    twitterUsername
    createdAt
    isFollowingViewer
    viewerIsFollowing
    isViewer
    location
    url
    },
  }
`)(function UserIsographComponent(props) {
  const { fragmentReference: followMutationRef, loadFragmentReference: followMutation } =
    useImperativeReference(iso(`entrypoint Mutation.FollowUser`));

  const { fragmentReference: unfollowMutationRef, loadFragmentReference: unfollowMutation } =
    useImperativeReference(iso(`entrypoint Mutation.UnfollowUser`));

  return (
    <div>
      <ProfileDetails
        user={props}
        follow={(id) => followMutation({ input: { userId: id, clientMutationId: "1" } })}
        unfollow={(id) => unfollowMutation({ input: { userId: id, clientMutationId: "1" } })}
      />
    </div>
  );
});
