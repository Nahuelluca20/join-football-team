import {createId} from "@paralleldrive/cuid2";
import {integer, primaryKey, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

import {courtsOwners} from "./courts-owner";
import {users} from "./user";

export const teams = sqliteTable("teams", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  players: integer("players", {mode: "number"}),
  registeredPlayers: integer("registered_players", {mode: "number"}),
  nextMatch: integer("next_match", {mode: "timestamp"}),
  nextPlace: text("next_place").references(() => courtsOwners.id),
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
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    teamId: text("team_id")
      .notNull()
      .references(() => teams.id),
  },
  (t) => ({
    pk: primaryKey({columns: [t.userId, t.teamId]}),
  }),
);

export const playersToTeamsRelations = relations(playersToTeams, ({one}) => ({
  teams: one(teams, {
    fields: [playersToTeams.teamId],
    references: [teams.id],
  }),
  user: one(users, {
    fields: [playersToTeams.userId],
    references: [users.id],
  }),
}));
