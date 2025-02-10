import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Mutation__UnfollowUser__param} from './param_type';
import {Mutation__UnfollowUser__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'mutation UnfollowUser ($input: UnfollowUserInput!) {\
  unfollowUser____input___v_input: unfollowUser(input: $input) {\
    clientMutationId,\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "unfollowUser",
      arguments: [
        [
          "input",
          { kind: "Variable", name: "input" },
        ],
      ],
      concreteType: "UnfollowUserPayload",
      selections: [
        {
          kind: "Scalar",
          fieldName: "clientMutationId",
          arguments: null,
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Mutation__UnfollowUser__param,
  Mutation__UnfollowUser__output_type,
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
