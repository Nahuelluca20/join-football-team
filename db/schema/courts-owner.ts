import {createId} from "@paralleldrive/cuid2";
import {blob, integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

type CourtType = {
  courtLength: number;
  covered: boolean;
  groundType: "tierra" | "cesped" | "cemento" | "sintético";
};

export const courtsOwners = sqliteTable("courts_owner", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  direction: text("direction"),
  placeName: text("place_name"),
  description: text("description"),
  longitude: text("longitude"),
  latitude: text("latitude"),
  courts: blob("courts", {mode: "json"}).$type<CourtType[]>(),
  numCourts: integer("num_courts", {mode: "number"}),
});
