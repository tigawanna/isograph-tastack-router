
Get the user stats
```graphql
query viewerStats {
  	
    viewer {
    # Basic profile stats
    login
    name
    email
    bio
    avatarUrl
    createdAt
    updatedAt

    # Repository stats
    repositories(first: 1) {
      totalCount
      totalDiskUsage
    }

    # Starred repositories
    starredRepositories(first: 1) {
      totalCount
      isOverLimit
    }

    # Social stats
    followers(first: 1) {
      totalCount
    }
    following(first: 1) {
      totalCount
    }

    # Watching stats
    watching(first: 1) {
      totalCount
    }

    # Top repositories
    topRepositories(first: 1, orderBy: {field: PUSHED_AT, direction: DESC}) {
      totalCount
    }

    # Contribution stats
    contributionsCollection {
      totalCommitContributions
      totalIssueContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalRepositoriesWithContributedIssues
      totalRepositoriesWithContributedPullRequests
      totalRepositoriesWithContributedCommits
      totalRepositoriesWithContributedPullRequestReviews
    }

    # Issue stats
    issues(first: 1) {
      totalCount
    }

    # Pull request stats
    pullRequests(first: 1) {
      totalCount
    }

    # Organization stats
    organizations(first: 1) {
      totalCount
    }

    # Gist stats
    gists(first: 1) {
      totalCount
    }


    # Package stats
    packages(first: 1) {
      totalCount
    }

    # Repository discussion stats
    repositoryDiscussions(first: 1) {
      totalCount
    }

    # Sponsor stats
    sponsors(first: 1) {
      totalCount
    }
    sponsoring(first: 1) {
      totalCount
    }
  }
  
}
```
