import {db} from "@/db";
import {users} from "@/db/schema/user";

export async function getPlayerAvailable() {
  const result = await db
    .select({
      userName: users.name,
      email: users.email,
      available: users.availableNow,
      image: users.image,
      position: users.position,
      liveIn: users.liveIn,
    })
    .from(users);

  return result.length > 0 ? result : [];
}
