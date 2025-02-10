import { iso } from "@iso";
import { ProfileDetails } from "./Profile";
import { useImperativeReference } from "@isograph/react";
interface ViewerProps {}

export const ViewerIsograph = iso(`
  field Query.Viewer @component {
    viewer {
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
`)(function ViewerIsographComponent(props) {
  const { fragmentReference: followMutationRef, loadFragmentReference: followMutation } =
    useImperativeReference(iso(`entrypoint Mutation.FollowUser`));

  const { fragmentReference: unfollowMutationRef, loadFragmentReference: unfollowMutation } =
    useImperativeReference(iso(`entrypoint Mutation.UnfollowUser`));

  return (
    <div>
      <ProfileDetails
        user={props}
        followThem={(id) => followMutation({ input: { userId: id, clientMutationId: "1" } })}
        unfollowThem={(id) => unfollowMutation({ input: { userId: id, clientMutationId: "1" } })}
      />
    </div>
  );
});
