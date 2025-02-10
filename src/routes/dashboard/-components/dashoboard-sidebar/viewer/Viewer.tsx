import { iso } from "@iso";
import { ProfileDetails } from "./Profile";
interface ViewerProps {}


export const Viewer = iso(`
  field Query.Viewer @component {
    viewer {
    id
    name
    login
    email
    bio
    avatarUrl
    company
    twitterUsername
    createdAt
    isFollowingViewer
    viewerIsFollowing
    isViewer
    location
    url
    },
  }
`)(function ViewerComponent(props) {
  return (
    <div>
      <ProfileDetails {...props} />
    </div>
  );
});
