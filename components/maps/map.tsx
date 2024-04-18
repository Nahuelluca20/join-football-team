"use client";

import {useSearchParams} from "next/navigation";
import React from "react";

export default function Map() {
  const searchParams = useSearchParams();

  const longitude = searchParams.get("longitude");
  const latitude = searchParams.get("latitude");

  return (
    <div>
      Este es mi mapa
      {longitude}
      {latitude}
    </div>
  );
}
