import {db} from "@/db";
import {users} from "@/db/schema/user";

export async function getPlayerAvailable() {
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

  return result;
}
