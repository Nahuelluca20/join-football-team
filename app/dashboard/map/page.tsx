import {Suspense} from "react";

import MapContainer from "@/components/maps/map-container";

export default function Page() {
  return (
    <div className="w-full md:w-[300px] lg:w-[600px] xl:w-[900px] h-[600px]">
      <Suspense>
        <MapContainer />
      </Suspense>
    </div>
  );
}
