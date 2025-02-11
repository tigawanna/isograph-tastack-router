import type { Mutation__FollowUser__parameters } from './parameters_type';

export type Mutation__FollowUser__param = {
  readonly data: {
    /**
Follow a user.
    */
    readonly followUser: ({
      /**
A unique identifier for the client performing the mutation.
      */
      readonly clientMutationId: (string | null),
      /**
The user that was followed.
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
  readonly parameters: Mutation__FollowUser__parameters,
};
