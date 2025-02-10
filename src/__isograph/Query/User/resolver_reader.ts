import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__User__param } from './param_type';
import { UserIsograph as resolver } from '../../../routes/$user/-components/user/UserIsographComponent';

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
        kind: "Scalar",
        fieldName: "id",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "name",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "login",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "email",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "bio",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "avatarUrl",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "company",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "twitterUsername",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "createdAt",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "isFollowingViewer",
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
        fieldName: "isViewer",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "location",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "url",
        alias: null,
        arguments: null,
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
