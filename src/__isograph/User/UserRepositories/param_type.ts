import { type Repository__UserRepository__output_type } from '../../Repository/UserRepository/output_type';

export type User__UserRepositories__param = {
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
A list of edges.
      */
      readonly edges: (ReadonlyArray<({
        /**
The item at the end of the edge.
        */
        readonly node: ({
          readonly UserRepository: Repository__UserRepository__output_type,
        } | null),
      } | null)> | null),
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
