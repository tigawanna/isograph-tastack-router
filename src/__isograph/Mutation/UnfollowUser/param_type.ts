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
    } | null),
  },
  readonly parameters: Mutation__UnfollowUser__parameters,
};
