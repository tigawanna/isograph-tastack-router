import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__User__param} from './param_type';
import {Query__User__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query User ($login: String!) {\
  user____login___v_login: user(login: $login) {\
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
    repositories____first___l_1: repositories(first: 1) {\
      totalCount,\
      totalDiskUsage,\
    },\
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
      fieldName: "user",
      arguments: [
        [
          "login",
          { kind: "Variable", name: "login" },
        ],
      ],
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
          kind: "Linked",
          fieldName: "repositories",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "RepositoryConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalDiskUsage",
              arguments: null,
            },
          ],
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
  Query__User__param,
  Query__User__output_type,
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
