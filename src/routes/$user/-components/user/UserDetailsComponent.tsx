import { Helmet } from "@/components/wrappers/custom-helmet";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { TbPoint, TbBrandTwitter } from "react-icons/tb";
import { MdCorporateFare } from "react-icons/md";
import { Suspense } from "react";
import { getRelativeTimeString } from "@/utils/date";
import { iso } from "@iso";
import { FollowUnfollowUser } from "./FollowUnfollowUser";
import { User__UserDetails__param } from "@/__isograph/User/UserDetails/param_type";
import { useImperativeReference } from "@isograph/react";
import { Loader } from "lucide-react";

interface UserDetailsComponent {
  user: User__UserDetails__param;
}

export function UserDetailsComponent({ user }: UserDetailsComponent) {
  const { fragmentReference: followMutationRef, loadFragmentReference: followMutation } =
    useImperativeReference(iso(`entrypoint Mutation.FollowUser`));

  const { fragmentReference: unfollowMutationRef, loadFragmentReference: unfollowMutation } =
    useImperativeReference(iso(`entrypoint Mutation.UnfollowUser`));

  const user_data = user.data;
  const extradetails = {
    company: user_data?.company,
    email: user_data?.email,
    location: user_data?.location,
    twitter: user_data?.twitterUsername,
  };

  return (
    <div className="w-full flex">
      <Helmet title={user_data?.login} description={user_data?.bio ?? "Github user profile"} />
      <div className="w-full flex flex-col items-center justify-center  p-2  ">
        <div className="p-1 h-full w-full flex flex-col md:flex-row items-center">
          <img
            className="
           h-[100%] w-[100%] md:w-[30%] lg:w-[20%] object-cover aspect-square rounded-[5%]  p-1"
            src={user_data?.avatarUrl as string}
            alt=""
            height={500}
            width={500}
          />
          <div
            className="text-[15px]  flex flex-col md:flex-row  items-center md:justify-evenly
           p-3  m-2 w-full  bg-base-200 rounded-lg shadow-lg
           font-sans  h-full gap-2">
            <div className="text-[15px] w-full ">
              <div className=" text-[15px] md:text-xl font-bold  ">{user_data?.name}</div>
              <div className="text-[15px] md:text-lg ">@{user_data?.login}</div>
              <div className="text-[15px] max-w-[80%] bg-base-100  p-1">{user_data?.bio}</div>
              {user_data?.createdAt && (
                <div className="text-[15px]">
                  Joined {" :"} {getRelativeTimeString(new Date(user_data?.createdAt))}
                </div>
              )}
            </div>

            <div className="w-full flex flex-wrap md:justify-center items-center gap-5 md:gap-5 ">
              <ProfileInfoItemWrapper valkey="email" value={extradetails?.email} />
              <ProfileInfoItemWrapper valkey={"company"} value={extradetails?.company} />
              <ProfileInfoItemWrapper valkey="location" value={extradetails?.location} />
              <ProfileInfoItemWrapper valkey={"twitter"} value={extradetails?.twitter} />
              {/*  user follow button goes here  */}
              <Suspense fallback={<button disabled  className="btn btn-wide "><Loader className="animate-spin"/></button>}>
              <FollowUnfollowUser user={user} followMutation={followMutation}  unfollowMutation={unfollowMutation}/>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProfileInfoItemWrapperProps {
  value: string | null | undefined;
  valkey: string;
}

export const ProfileInfoItemWrapper: React.FC<ProfileInfoItemWrapperProps> = ({
  valkey,
  value,
}) => {
  // console.log("kyett",valkey,value)
  if (!value) {
    return null;
  }

  const WhatIcon = () => {
    // console.log("kye",valkey,value)
    switch (valkey) {
      case "company":
        return MdCorporateFare;
      case "email":
        return AiOutlineMail;
      case "twitter":
        return TbBrandTwitter;
      case "location":
        return IoLocationOutline;
      default:
        return TbPoint;
    }
  };
  const UserDetailsComponentIcons = WhatIcon();
  return (
    <div className="flex items-center justify-center gap-1">
      <UserDetailsComponentIcons />
      <div className=" ">{value}</div>
    </div>
  );
};
