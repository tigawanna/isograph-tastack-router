import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { User__UserStats__param } from './param_type';
import { UserStatsIso as resolver } from '../../../routes/$user/-components/user/UserStatsIso';

const readerAst: ReaderAst<User__UserStats__param> = [
  {
    kind: "Linked",
    fieldName: "repositories",
    alias: null,
    arguments: [
      [
        "first",
        { kind: "Literal", value: 1 },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "totalCount",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalDiskUsage",
        alias: null,
        arguments: null,
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  User__UserStats__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "User.UserStats",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
