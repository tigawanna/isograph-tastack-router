import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__Viewer__param} from './param_type';
import {Query__Viewer__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query Viewer  {\
  viewer {\
    id,\
    avatarUrl,\
    bio,\
    company,\
    createdAt,\
    email,\
    isFollowingViewer,\
    isViewer,\
    location,\
    login,\
    name,\
    twitterUsername,\
    url,\
    viewerIsFollowing,\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "viewer",
      arguments: null,
      concreteType: "User",
      selections: [
        {
          kind: "Scalar",
          fieldName: "id",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "avatarUrl",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "bio",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "company",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "createdAt",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "email",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "isFollowingViewer",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "isViewer",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "location",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "login",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "name",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "twitterUsername",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "url",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "viewerIsFollowing",
          arguments: null,
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Query__Viewer__param,
  Query__Viewer__output_type,
  NormalizationAst
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Query",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
