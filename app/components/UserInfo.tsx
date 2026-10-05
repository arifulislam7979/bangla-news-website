"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  const hendleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          <Link href={'/profile'}><h2>{user?.name}</h2></Link>
          <button onClick={hendleSignOut} className="btn bg-red-700 text-white">
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 md:gap-3">
          <Link href={"/sign-in"}>
            <button className="text-xs md:text-sm font-medium text-gray-700 hover:text-red-700 transition-colors px-2 py-1.5 cursor-pointer">
              সাইন ইন
            </button>
          </Link>
          <Link href={'/sign-up'}>
            <button className="bg-red-700 hover:bg-red-800 text-white font-medium text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md transition-colors cursor-pointer">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
