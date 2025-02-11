import { iso } from "@/__isograph/iso";
import { UserDetailsComponent } from "./UserDetailsComponent";

export const UserDetailsIso = iso(`
  field User.UserDetails @component {
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
  }
`)(function UserDetailsIso(props){
    
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
  <UserDetailsComponent user={props} />
 </div>
);
})
