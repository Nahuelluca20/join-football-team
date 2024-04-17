import {db} from "@/db";
import {users} from "@/db/schema/user";

export async function getPlayerAvailable() {
  const result = await db
    .select({
      userName: users.name,
      user: users.name,
    })
    .from(users);
}
