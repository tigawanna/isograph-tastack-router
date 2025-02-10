import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__Viewer__param } from './param_type';
import { Viewer as resolver } from '../../../routes/dashboard/-components/dashoboard-sidebar/viewer/Viewer';

const readerAst: ReaderAst<Query__Viewer__param> = [
  {
    kind: "Linked",
    fieldName: "viewer",
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
  Query__Viewer__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.Viewer",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
