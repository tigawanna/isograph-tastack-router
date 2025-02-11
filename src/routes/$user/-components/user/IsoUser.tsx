import { iso } from "@/__isograph/iso";


export const IsoUser = iso(`
  field Query.User($login: String!) @component {
    user(login: $login) {
    UserDetails
    },
  }
`)(function IsoUser({data}){
 if(!data.user){
     return null
 }   
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
    <data.user.UserDetails />
 </div>
);
})
