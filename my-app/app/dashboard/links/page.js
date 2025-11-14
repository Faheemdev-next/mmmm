import LinkPage from "@/components/LinkPage";
import UserProfile from "@/models/UserProfile";
import React from "react";

const LinksManagePage = async () => {
  const Fake_username = "bhatfaheem";

  // ✅ Use lean() to avoid circular refs
  const user = await UserProfile.findOne({ username: Fake_username }).lean();

  return (
    <div>
      <LinkPage user={user} />
    </div>
  );
};

export default LinksManagePage;
