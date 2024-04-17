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
  playersToTeams: many(playersToTeams),
}));

export const teamsRelations = relations(teams, ({many}) => ({
  playersToTeams: many(playersToTeams),
}));

export const playersToTeams = sqliteTable(
  "players_to_teams",
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

export const playersToTeamsRelations = relations(playersToTeams, ({one}) => ({
  group: one(teams, {
    fields: [playersToTeams.groupId],
    references: [teams.id],
  }),
  user: one(users, {
    fields: [playersToTeams.userId],
    references: [users.id],
  }),
}));
