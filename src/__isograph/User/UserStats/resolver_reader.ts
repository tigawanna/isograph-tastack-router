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
  {
    kind: "Linked",
    fieldName: "starredRepositories",
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
        fieldName: "isOverLimit",
        alias: null,
        arguments: null,
      },
    ],
  },
  {
    kind: "Linked",
    fieldName: "followers",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "following",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "watching",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "contributionsCollection",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "totalCommitContributions",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalIssueContributions",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalPullRequestContributions",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalPullRequestReviewContributions",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalRepositoriesWithContributedIssues",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalRepositoriesWithContributedPullRequests",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalRepositoriesWithContributedCommits",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "totalRepositoriesWithContributedPullRequestReviews",
        alias: null,
        arguments: null,
      },
    ],
  },
  {
    kind: "Linked",
    fieldName: "issues",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "pullRequests",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "organizations",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "gists",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "packages",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "repositoryDiscussions",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "sponsors",
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
    ],
  },
  {
    kind: "Linked",
    fieldName: "sponsoring",
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
