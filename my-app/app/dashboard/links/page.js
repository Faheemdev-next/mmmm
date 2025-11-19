import LinkPage from "@/components/LinkPage";
import { getInitialUser } from "@/lib/getInitialUser";
import { getUserProfile } from "@/lib/getUserProfile";
import UserProfile from "@/models/UserProfile";
import React from "react";

const LinksManagePage = async () => {
  const userInitial = await getInitialUser()
  const user = await getUserProfile(userInitial.email)


  return (
    <div>
      <LinkPage user={user} />
    </div>
  );
};

export default LinksManagePage;
