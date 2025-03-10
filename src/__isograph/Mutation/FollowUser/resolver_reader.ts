import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Mutation__FollowUser__param } from './param_type';
import { Mutation__FollowUser__output_type } from './output_type';
import { followUser as resolver } from '../../../routes/$user/-components/user/FollowUnfollowUser';

const readerAst: ReaderAst<Mutation__FollowUser__param> = [
  {
    kind: "Linked",
    fieldName: "followUser",
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
      {
        kind: "Linked",
        fieldName: "user",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "id",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "viewerIsFollowing",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "isFollowingViewer",
            alias: null,
            arguments: null,
          },
        ],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Mutation__FollowUser__param,
  Mutation__FollowUser__output_type
> = {
  kind: "EagerReaderArtifact",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
