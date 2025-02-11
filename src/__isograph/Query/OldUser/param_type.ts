import type { Query__OldUser__parameters } from './parameters_type';

export type Query__OldUser__param = {
  readonly data: {
    /**
Lookup a user by login.
    */
    readonly user: ({
      /**
The Node ID of the User object
      */
      readonly id: string,
      /**
The user's public profile name.
      */
      readonly name: (string | null),
      /**
The username used to login.
      */
      readonly login: string,
      /**
The user's publicly visible profile email.
      */
      readonly email: string,
      /**
The user's public profile bio.
      */
      readonly bio: (string | null),
      /**
A URL pointing to the user's public avatar.
      */
      readonly avatarUrl: string,
      /**
The user's public profile company.
      */
      readonly company: (string | null),
      /**
The user's Twitter username.
      */
      readonly twitterUsername: (string | null),
      /**
Identifies the date and time when the object was created.
      */
      readonly createdAt: string,
      /**
Whether or not this user is following the viewer. Inverse of viewerIsFollowing
      */
      readonly isFollowingViewer: boolean,
      /**
Whether or not this user is followed by the viewer. Inverse of isFollowingViewer.
      */
      readonly viewerIsFollowing: boolean,
      /**
Whether or not this user is the viewing user.
      */
      readonly isViewer: boolean,
      /**
The user's public profile location.
      */
      readonly location: (string | null),
      /**
The HTTP URL for this user
      */
      readonly url: string,
    } | null),
  },
  readonly parameters: Query__OldUser__parameters,
};
