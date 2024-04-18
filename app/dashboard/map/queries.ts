import {db} from "@/db";
import {courtsOwners} from "@/db/schema/courts-owner";

export async function getCourtsOwnersDetails() {
  const result = await db
    .select({
      id: courtsOwners.id,
      placeName: courtsOwners.placeName,
      description: courtsOwners.description,
      longitude: courtsOwners.longitude,
      latitude: courtsOwners.latitude,
    })
    .from(courtsOwners);

  return result.length > 0 ? result : [];
}
