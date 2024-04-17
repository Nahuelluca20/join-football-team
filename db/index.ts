import {drizzle} from "drizzle-orm/libsql";
import {createClient} from "@libsql/client";

import {users as userSchema} from "./schema/user";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {schema: {...userSchema}});
