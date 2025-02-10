import { iso } from "@/__isograph/iso";
import { useImperativeReference } from "@isograph/react";

interface FollowUnfollowButtonProps {}

export function FollowUnfollowButton({}: FollowUnfollowButtonProps) {
  const { fragmentReference: followMutationRef, loadFragmentReference: followMutation } =
    useImperativeReference(iso(`entrypoint Mutation.FollowUser`));

  const { fragmentReference: unfollowMutationRef, loadFragmentReference: unfollowMutation } =
    useImperativeReference(iso(`entrypoint Mutation.UnfollowUser`));
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <button>follow</button>
    </div>
  );
}
