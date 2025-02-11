
export type User__UserStats__param = {
  readonly data: {
    /**
A list of repositories that the user owns.
    */
    readonly repositories: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
      /**
The total size in kilobytes of all repositories in the connection. Value will
never be larger than max 32-bit signed integer.
      */
      readonly totalDiskUsage: number,
    },
    /**
Repositories the user has starred.
    */
    readonly starredRepositories: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
      /**
Is the list of stars for this user truncated? This is true for users that have many stars.
      */
      readonly isOverLimit: boolean,
    },
    /**
A list of users the given user is followed by.
    */
    readonly followers: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
A list of users the given user is following.
    */
    readonly following: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
A list of repositories the given user is watching.
    */
    readonly watching: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
The collection of contributions this user has made to different repositories.
    */
    readonly contributionsCollection: {
      /**
How many commits were made by the user in this time span.
      */
      readonly totalCommitContributions: number,
      /**
How many issues the user opened.
      */
      readonly totalIssueContributions: number,
      /**
How many pull requests the user opened.
      */
      readonly totalPullRequestContributions: number,
      /**
How many pull request reviews the user left.
      */
      readonly totalPullRequestReviewContributions: number,
      /**
How many different repositories the user opened issues in.
      */
      readonly totalRepositoriesWithContributedIssues: number,
      /**
How many different repositories the user opened pull requests in.
      */
      readonly totalRepositoriesWithContributedPullRequests: number,
      /**
How many different repositories the user committed to.
      */
      readonly totalRepositoriesWithContributedCommits: number,
      /**
How many different repositories the user left pull request reviews in.
      */
      readonly totalRepositoriesWithContributedPullRequestReviews: number,
    },
    /**
A list of issues associated with this user.
    */
    readonly issues: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
A list of pull requests associated with this user.
    */
    readonly pullRequests: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
A list of organizations the user belongs to.
    */
    readonly organizations: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
A list of the Gists the user has created.
    */
    readonly gists: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
A list of packages under the owner.
    */
    readonly packages: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
Discussions this user has started.
    */
    readonly repositoryDiscussions: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
List of sponsors for this user or organization.
    */
    readonly sponsors: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
    /**
List of users and organizations this entity is sponsoring.
    */
    readonly sponsoring: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
