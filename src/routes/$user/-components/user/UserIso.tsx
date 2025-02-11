import { iso } from "@/__isograph/iso";


export const UserIso = iso(`
  field Query.User($login: String!) @component {
    user(login: $login) {
    UserDetails
    UserStats
    },
  }
`)(function UserIso({data}){
 if(!data.user){
     return null
 }   
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
    <data.user.UserDetails />
    <data.user.UserStats />
 </div>
);
})
