"use client";
import dynamic from "next/dynamic";
import {useSearchParams} from "next/navigation";
import {useMemo} from "react";

export default function MapContainer() {
  const searchParams = useSearchParams();
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/maps/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  const longitude = searchParams.get("longitude") ?? -32.88896148001692;
  const latitude = searchParams.get("latitude") ?? -68.88015997301575;

  return (
    <div className="h-full rounded-md overflow-hidden z-1">
      <Map latitude={Number(latitude)} longitude={Number(longitude)} />
    </div>
  );
}
