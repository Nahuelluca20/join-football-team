import React from "react";

import CreateTeam from "@/components/cards/create-team";
import MyTeams from "@/components/cards/my-teams";

export default function page() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <CreateTeam />
      <MyTeams />
    </div>
  );
}
