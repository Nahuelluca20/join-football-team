"use server";

import {z} from "zod";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {db} from "@/db";
import {teams} from "@/db/schema/teams";
import {auth, signIn} from "@/auth/auth";

export const createTeam = async (formData: FormData) => {
  const session = await auth();
  const createTeam = z.object({
    players: z.number().min(3).max(21),
    nextMatch: z.date(),
    nextPlace: z.string().datetime(),
    registeredPlayers: z.number(),
  });

  const validateSchema = createTeam.safeParse({
    players: formData.get("players"),
    nextMatch: formData.get("nextMatch"),
    nextPlace: formData.get("nextPlace"),
    registeredPlayers: formData.get("registeredPlayers"),
  });

  if (!validateSchema.success) {
    validateSchema.error;
  } else if (!session?.user?.id) {
    return await signIn();
  } else {
    const newTeam = await db
      .insert(teams)
      .values({
        players: validateSchema.data.players,
        nextMatch: validateSchema.data.nextMatch,
        nextPlace: validateSchema.data.nextPlace,
        registeredPlayers: validateSchema.data.registeredPlayers,
      })
      .returning({id: teams.id});

    revalidatePath("/dashboard/teams");

    return redirect(`/dashboard/teams/${newTeam[0].id}`);
  }
};
