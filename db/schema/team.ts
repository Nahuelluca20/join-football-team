import {createId} from "@paralleldrive/cuid2";
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const team = sqliteTable("team", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  players: integer("players", {mode: "number"}),
});
