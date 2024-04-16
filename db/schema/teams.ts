import {createId} from "@paralleldrive/cuid2";
import {integer, primaryKey, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

import {courtsOwners} from "./courts-owner";
import {users} from "./user";

export const teams = sqliteTable("teams", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  players: integer("players", {mode: "number"}),
  nextMatch: integer("next_match", {mode: "timestamp"}),
  nextPlace: integer("user_id").references(() => courtsOwners.id),
});

export const playerRelations = relations(users, ({many}) => ({
  playersToGroups: many(playersToGroups),
}));

export const teamsRelations = relations(teams, ({many}) => ({
  usersToGroups: many(playersToGroups),
}));

export const playersToGroups = sqliteTable(
  "users_to_groups",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    groupId: integer("group_id")
      .notNull()
      .references(() => teams.id),
  },
  (t) => ({
    pk: primaryKey({columns: [t.userId, t.groupId]}),
  }),
);
