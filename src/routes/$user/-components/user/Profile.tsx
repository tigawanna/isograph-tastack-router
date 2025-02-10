import { Button } from "@/components/shadcn/ui/button";
import { Helmet } from "@/components/wrappers/custom-helmet";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { TbPoint, TbBrandTwitter } from "react-icons/tb";
import { MdCorporateFare } from "react-icons/md";
import { useState } from "react";
import { getRelativeTimeString } from "@/utils/date";
import { iso } from "@iso";
import { Query__User__param } from "@/__isograph/Query/User/param_type";

// Define the mutation fields
export const followUser = iso(`
  field Mutation.FollowUser($input: FollowUserInput!) {
    followUser(input: $input) {
      clientMutationId
    }
  }
`)(() => {});

export const unfollowUser = iso(`
  field Mutation.UnfollowUser($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      clientMutationId
    }
  }
`)(() => {});

// In your component where you want to use the mutations

interface ProfileDetails {
  user: Query__User__param;
  follow: (their_id: string) => void;
  unfollow: (their_id: string) => void;
}

export function ProfileDetails({ user: { data },follow,unfollow }: ProfileDetails) {
  const user_data = data?.user;
  const extradetails = {
    company: user_data?.company,
    email: user_data?.email,
    location: user_data?.location,
    twitter: user_data?.twitterUsername,
  };

  const [yes, setYes] = useState<any>(user_data?.viewerIsFollowing);

  const admin = user_data?.isViewer;
  //console.log("og user",admin)
  const followThem = (their_id: string) => {
    setYes(true);
    follow(their_id);
    // followMutation({ variables: { input: { userId: their_id } } });
  };
  const unfollowThem = (their_id: string) => {
    setYes(false);
    unfollow(their_id);
    // unfollowMutation({ variables: { input: { userId: their_id } } });
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
           font-sans  h-full">
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

            <div className="w-full flex flex-wrap md:justify-center items-center gap-5 md:gap-2">
              <ProfileInfoItemWrapper valkey="email" value={extradetails?.email} />
              <ProfileInfoItemWrapper valkey={"company"} value={extradetails?.company} />
              <ProfileInfoItemWrapper valkey="location" value={extradetails?.location} />
              <ProfileInfoItemWrapper valkey={"twitter"} value={extradetails?.twitter} />
              <div className="flex">
                {!admin ? (
                  <div>
                    {yes ? (
                      <Button
                        onClick={() => unfollowThem(user_data?.id as string)}
                        // variant="ghost"
                        className="btn btn-ghost btn-wide rounded-md   hover:bg-error">
                        {"Unfollow"}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => followThem(user_data?.id as string)}
                        // variant="ghost"
                        className="btn btn-ghost btn-wide rounded-md hover:bg-success">
                        {user_data?.isFollowingViewer ? "Follow back" : "Follow"}
                      </Button>
                    )}
                  </div>
                ) : null}
              </div>
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
  const ProfileDetailsIcons = WhatIcon();
  return (
    <div className="flex items-center justify-center gap-1">
      <ProfileDetailsIcons />
      <div className=" ">{value}</div>
    </div>
  );
};
