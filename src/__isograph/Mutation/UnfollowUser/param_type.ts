import type { Mutation__UnfollowUser__parameters } from './parameters_type';

export type Mutation__UnfollowUser__param = {
  readonly data: {
    /**
Unfollow a user.
    */
    readonly unfollowUser: ({
      /**
A unique identifier for the client performing the mutation.
      */
      readonly clientMutationId: (string | null),
      /**
The user that was unfollowed.
      */
      readonly user: ({
        /**
The Node ID of the User object
        */
        readonly id: string,
        /**
Whether or not this user is followed by the viewer. Inverse of isFollowingViewer.
        */
        readonly viewerIsFollowing: boolean,
        /**
Whether or not this user is following the viewer. Inverse of viewerIsFollowing
        */
        readonly isFollowingViewer: boolean,
      } | null),
    } | null),
  },
  readonly parameters: Mutation__UnfollowUser__parameters,
};
