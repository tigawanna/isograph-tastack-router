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
    } | null),
  },
  readonly parameters: Mutation__FollowUser__parameters,
};
