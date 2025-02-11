
export type Repository__UserRepository__param = {
  readonly data: {
    /**
The Node ID of the Repository object
    */
    readonly id: string,
    /**
The name of the repository.
    */
    readonly name: string,
    /**
The repository's name with owner.
    */
    readonly nameWithOwner: string,
    /**
The description of the repository.
    */
    readonly description: (string | null),
    /**
Identifies the date and time when the repository was last pushed to.
    */
    readonly pushedAt: (string | null),
    /**
The number of kilobytes this repository occupies on disk.
    */
    readonly diskUsage: (number | null),
    /**
The HTTP URL for this repository
    */
    readonly url: string,
    /**
Indicates the repository's visibility level.
    */
    readonly visibility: string,
    /**
Returns how many forks there are of this repository in the whole network.
    */
    readonly forkCount: number,
    /**
The image used to represent this repository in Open Graph data.
    */
    readonly openGraphImageUrl: string,
    /**
Indicates if a repository is either owned by an organization, or is a private fork of an organization repository.
    */
    readonly isInOrganization: boolean,
    /**
Whether this repository allows forks.
    */
    readonly forkingAllowed: boolean,
    /**
Identifies if the repository is a fork.
    */
    readonly isFork: boolean,
    /**
Returns a boolean indicating whether the viewing user has starred this starrable.
    */
    readonly viewerHasStarred: boolean,
    /**
The users permission level on the repository. Will return null if authenticated as an GitHub App.
    */
    readonly viewerPermission: (string | null),
    /**
Indicates whether the viewer has admin permissions on this repository.
    */
    readonly viewerCanAdminister: boolean,
    /**
The User owner of the repository.
    */
    readonly owner: {
      /**
The username used to login.
      */
      readonly login: string,
      /**
The Node ID of the RepositoryOwner object
      */
      readonly id: string,
      /**
The HTTP URL for the owner.
      */
      readonly url: string,
      /**
A URL pointing to the owner's public avatar.
      */
      readonly avatarUrl: string,
    },
    /**
A list containing a breakdown of the language composition of the repository.
    */
    readonly languages: ({
      /**
A list of edges.
      */
      readonly edges: (ReadonlyArray<({
        readonly node: {
          /**
The Node ID of the Language object
          */
          readonly id: string,
          /**
The color defined for the current language.
          */
          readonly color: (string | null),
          /**
The name of the current language.
          */
          readonly name: string,
        },
      } | null)> | null),
    } | null),
    /**
List of releases which are dependent on this repository.
    */
    readonly releases: {
      /**
A list of nodes.
      */
      readonly nodes: (ReadonlyArray<({
        /**
The title of the release.
        */
        readonly name: (string | null),
        /**
Identifies the date and time when the release was created.
        */
        readonly publishedAt: (string | null),
      } | null)> | null),
    },
    /**
Returns a count of how many stargazers there are on this object
    */
    readonly stargazerCount: number,
  },
  readonly parameters: Record<PropertyKey, never>,
};
