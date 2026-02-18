"use client";

import Image from "next/image";
import React from "react";

type TeamItem = {
  id?: number;
  name?: string;
  title?: string;
  galerija?: string;
};

export default function SingleTeamV2({
  team,
  onOpen,
}: {
  team: TeamItem;
  onOpen: () => void;
}) {
  const { name, galerija } = team;

  return (
    <div className="farmer-style-one-item">
      <div className="thumb team-thumb" onClick={onOpen} role="button" tabIndex={0}>
        <Image
          src={`/assets/img/farmers/${galerija}`}
          alt={name ?? "Team member"}
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="1.jpg"
        />
        <div className="team-thumb-overlay">View</div>
      </div>

      {/* <div className="info">
        <span>{title}</span>
        <h4>{name}</h4>
      </div> */}
    </div>
  );
}
