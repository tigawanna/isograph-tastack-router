import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__UnfollowUser__param } from './param_type';
import { Mutation__UnfollowUser__output_type } from './output_type';
import { unfollowUser as resolver } from '../../../routes/$user/-components/user/Profile';

const readerAst: ReaderAst<Mutation__UnfollowUser__param> = [
  {
    kind: "Linked",
    fieldName: "unfollowUser",
    alias: null,
    arguments: [
      [
        "input",
        { kind: "Variable", name: "input" },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "clientMutationId",
        alias: null,
        arguments: null,
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Mutation__UnfollowUser__param,
  Mutation__UnfollowUser__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
