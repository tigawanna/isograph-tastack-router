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
    contributionsCollection {\
      totalCommitContributions,\
      totalIssueContributions,\
      totalPullRequestContributions,\
      totalPullRequestReviewContributions,\
      totalRepositoriesWithContributedCommits,\
      totalRepositoriesWithContributedIssues,\
      totalRepositoriesWithContributedPullRequestReviews,\
      totalRepositoriesWithContributedPullRequests,\
    },\
    createdAt,\
    email,\
    followers____first___l_1: followers(first: 1) {\
      totalCount,\
    },\
    following____first___l_1: following(first: 1) {\
      totalCount,\
    },\
    gists____first___l_1: gists(first: 1) {\
      totalCount,\
    },\
    isFollowingViewer,\
    isViewer,\
    issues____first___l_1: issues(first: 1) {\
      totalCount,\
    },\
    location,\
    login,\
    name,\
    organizations____first___l_1: organizations(first: 1) {\
      totalCount,\
    },\
    packages____first___l_1: packages(first: 1) {\
      totalCount,\
    },\
    pullRequests____first___l_1: pullRequests(first: 1) {\
      totalCount,\
    },\
    repositories____first___l_1: repositories(first: 1) {\
      totalCount,\
      totalDiskUsage,\
    },\
    repositoryDiscussions____first___l_1: repositoryDiscussions(first: 1) {\
      totalCount,\
    },\
    sponsoring____first___l_1: sponsoring(first: 1) {\
      totalCount,\
    },\
    sponsors____first___l_1: sponsors(first: 1) {\
      totalCount,\
    },\
    starredRepositories____first___l_1: starredRepositories(first: 1) {\
      isOverLimit,\
      totalCount,\
    },\
    twitterUsername,\
    url,\
    viewerIsFollowing,\
    watching____first___l_1: watching(first: 1) {\
      totalCount,\
    },\
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
          kind: "Linked",
          fieldName: "contributionsCollection",
          arguments: null,
          concreteType: "ContributionsCollection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCommitContributions",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalIssueContributions",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalPullRequestContributions",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalPullRequestReviewContributions",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalRepositoriesWithContributedCommits",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalRepositoriesWithContributedIssues",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalRepositoriesWithContributedPullRequestReviews",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalRepositoriesWithContributedPullRequests",
              arguments: null,
            },
          ],
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
          kind: "Linked",
          fieldName: "followers",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "FollowerConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "following",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "FollowingConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "gists",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "GistConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
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
          kind: "Linked",
          fieldName: "issues",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "IssueConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
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
          fieldName: "organizations",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "OrganizationConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "packages",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "PackageConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "pullRequests",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "PullRequestConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
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
          kind: "Linked",
          fieldName: "repositoryDiscussions",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "DiscussionConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "sponsoring",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "SponsorConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "sponsors",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "SponsorConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "totalCount",
              arguments: null,
            },
          ],
        },
        {
          kind: "Linked",
          fieldName: "starredRepositories",
          arguments: [
            [
              "first",
              { kind: "Literal", value: 1 },
            ],
          ],
          concreteType: "StarredRepositoryConnection",
          selections: [
            {
              kind: "Scalar",
              fieldName: "isOverLimit",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "totalCount",
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
        {
          kind: "Linked",
          fieldName: "watching",
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
          ],
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
