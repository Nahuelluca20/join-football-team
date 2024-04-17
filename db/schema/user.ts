import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", {mode: "timestamp_ms"}),
  image: text("image"),
  availableNow: integer("available_now", {mode: "boolean"}).default(true),
  position: text("position", {enum: ["mediocampo", "delantero", "defensor", "arquero"]}),
  liveIn: text("live_in", {
    enum: [
      "Ciudad de Mendoza",
      "General Alvear",
      "Godoy Cruz",
      "Guaymallén",
      "Junín",
      "La Paz",
      "Las Heras",
      "Lavalle",
      "Luján de Cuyo",
      "Maipú",
      "Malargüe",
      "Rivadavia",
      "San Carlos",
      "San Martín",
      "San Rafael",
      "Santa Rosa",
      "Tunuyán",
      "Tupungato",
    ],
  }),
});
