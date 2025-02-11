import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__User__param } from './param_type';
import { UserIso as resolver } from '../../../routes/$user/-components/user/UserIso';
import User__UserDetails__resolver_reader from '../../User/UserDetails/resolver_reader';
import User__UserStats__resolver_reader from '../../User/UserStats/resolver_reader';

const readerAst: ReaderAst<Query__User__param> = [
  {
    kind: "Linked",
    fieldName: "user",
    alias: null,
    arguments: [
      [
        "login",
        { kind: "Variable", name: "login" },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Resolver",
        alias: "UserDetails",
        arguments: null,
        readerArtifact: User__UserDetails__resolver_reader,
        usedRefetchQueries: [],
      },
      {
        kind: "Resolver",
        alias: "UserStats",
        arguments: null,
        readerArtifact: User__UserStats__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__User__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.User",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
