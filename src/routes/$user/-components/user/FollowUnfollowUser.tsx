import { iso } from "@/__isograph/iso";
import { Mutation__FollowUser__parameters } from "@/__isograph/Mutation/FollowUser/parameters_type";
import { Mutation__UnfollowUser__parameters } from "@/__isograph/Mutation/UnfollowUser/parameters_type";
import { User__UserDetails__param } from "@/__isograph/User/UserDetails/param_type";
import { Button } from "@/components/shadcn/ui/button";
import { FetchOptions, useImperativeReference } from "@isograph/react";
import { useState } from "react";

// Define the mutation fields
export const followUser = iso(`
  field Mutation.FollowUser($input: FollowUserInput!) {
    followUser(input: $input) {
      clientMutationId
       user {
        id
        viewerIsFollowing
        isFollowingViewer
      }
    }
  }
`)(() => {});

export const unfollowUser = iso(`
  field Mutation.UnfollowUser($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      clientMutationId
        user {
        id
        viewerIsFollowing
        isFollowingViewer
      }
    }
  }
`)(() => {});

interface FollowUnfollowUserProps {
  user: User__UserDetails__param;
  followMutation: (
    variables: Mutation__FollowUser__parameters,
    fetchOptions?: FetchOptions<void> | undefined
  ) => void;
  unfollowMutation: (
    variables: Mutation__UnfollowUser__parameters,
    fetchOptions?: FetchOptions<void> | undefined
  ) => void;
}

export function FollowUnfollowUser({
  user,
  followMutation,
  unfollowMutation,
}: FollowUnfollowUserProps) {
  const [yes, setYes] = useState(user.data?.viewerIsFollowing);

  const followThem = (their_id: string) => {
    setYes(true);
    //   follow(their_id);
    followMutation({ input: { userId: their_id, clientMutationId: their_id } });
  };
  const unfollowThem = (their_id: string) => {
    setYes(false);
    //   unfollow(their_id);
    unfollowMutation({ input: { userId: their_id, clientMutationId: their_id } });
  };
  if (user.data.isViewer) {
    return null;
  }
  return (
    <div className="flex">
      <div>
        {yes ? (
          <Button
            onClick={() => unfollowThem(user.data?.id as string)}
            // variant="ghost"
            className="btn btn-primary btn-wide rounded-md   ">
            {"Unfollow"}
          </Button>
        ) : (
          <Button
            onClick={() => followThem(user.data?.id as string)}
            // variant="ghost"
            className="btn btn-secondary btn-wide rounded-md ">
            {user.data?.isFollowingViewer ? "Follow back" : "Follow"}
          </Button>
        )}
      </div>
    </div>
  );
}
