import { iso } from "@/__isograph/iso";

interface RepositoriesisoProps {}

export const Repositoriesiso = iso(`
    field User.UserRepositories @component {
        repositories(first: 1) {
            totalCount
            edges {
                node {
                UserRepository
                }
            }
        }          
    }
`)(function Repositoriesiso({ data }) {
  return <div className="w-full h-full flex flex-col items-center justify-center">uwu</div>;
});
