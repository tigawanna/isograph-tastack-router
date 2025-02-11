import { iso } from "@/__isograph/iso";

interface RepositoryisoProps {}

export const Repositoriesiso = iso(`
    field Repository.UserRepository @component {
          id
          name
          nameWithOwner
          description
          pushedAt
          diskUsage
          url
          visibility
          forkCount
          openGraphImageUrl
          isInOrganization
          forkingAllowed
          isFork
          viewerHasStarred
          viewerPermission
          viewerCanAdminister

          owner {
            login
            id
            url
            avatarUrl
          }

          languages(first: 20) {
            edges {
              node {
                id
                color
                name
              }
            }
          }
          releases(first: 1) {
            nodes {
              name
              publishedAt
            }
          }
          stargazerCount
          
        refs(
            refPrefix: "refs/heads/"
            orderBy: {direction: DESC, field: $TAG_COMMIT_DATE}
            first: 2
          ) {
            totalCount
          }


            
          
    }
`)(function Repositoryiso({ data }) {
  return <div className="w-full h-full flex flex-col items-center justify-center">uwu</div>;
});
