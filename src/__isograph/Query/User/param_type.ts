import { type User__UserDetails__output_type } from '../../User/UserDetails/output_type';
import type { Query__User__parameters } from './parameters_type';

export type Query__User__param = {
  readonly data: {
    /**
Lookup a user by login.
    */
    readonly user: ({
      readonly UserDetails: User__UserDetails__output_type,
    } | null),
  },
  readonly parameters: Query__User__parameters,
};
