import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Mutation__FollowUser__param} from './param_type';
import {Mutation__FollowUser__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'mutation FollowUser ($input: FollowUserInput!) {\
  followUser____input___v_input: followUser(input: $input) {\
    clientMutationId,\
    user {\
      id,\
      isFollowingViewer,\
      viewerIsFollowing,\
    },\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "followUser",
      arguments: [
        [
          "input",
          { kind: "Variable", name: "input" },
        ],
      ],
      concreteType: "FollowUserPayload",
      selections: [
        {
          kind: "Scalar",
          fieldName: "clientMutationId",
          arguments: null,
        },
        {
          kind: "Linked",
          fieldName: "user",
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
              fieldName: "isFollowingViewer",
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
    },
  ],
};
const artifact: IsographEntrypoint<
  Mutation__FollowUser__param,
  Mutation__FollowUser__output_type,
  NormalizationAst
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Mutation",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
