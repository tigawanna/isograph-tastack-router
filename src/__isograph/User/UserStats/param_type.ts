
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
  },
  readonly parameters: Record<PropertyKey, never>,
};
