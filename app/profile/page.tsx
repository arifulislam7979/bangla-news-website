"use client";

import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="text-center">
      <div>
        <h2>{user?.name}</h2>
        <h2>{user?.email}</h2>
      </div>
      <form >
        <input type="text" name="" id="" />
      </form>
    </div>
  );
};

export default ProfilePage;
