"use server";
import {eq} from "drizzle-orm";

import {db} from "@/db";
import {playersToTeams, teams} from "@/db/schema/teams";
import {users} from "@/db/schema/user";

export const getPlayerAvailable = async () => {
  const result = await db
    .select({
      userName: users.name,
      email: users.email,
      available: users.availableNow,
      image: users.image,
      liveIn: users.liveIn,
      position: users.position,
    })
    .from(users);

  return result.length > 0 ? result : [];
};

export const getMyTeamsLength = async (id: string) => {
  const result = db
    .select({
      teams: teams,
    })
    .from(playersToTeams)
    .leftJoin(users, eq(playersToTeams.userId, users.id))
    .where(eq(users.id, id))
    .leftJoin(teams, eq(playersToTeams.teamId, teams.id))
    .all();

  const resultLength = (await result).length;

  return resultLength;
};
