"use client";

import React, { useCallback, useMemo, useState } from "react";
import TeamV2Data from "@/assets/jsonData/team/TeamV2Datanew.json";
import TeamV2DataOstalo from "@/assets/jsonData/team/TeamV2DatanewOstalo.json";
import SingleTeamV2 from "./SingleTeamV2";
import TeamLightbox from "./TeamLightbox";

type TeamItem = {
  id?: number;
  name?: string;
  title?: string;
  galerija?: string; // ako koristiš posebno polje za lightbox
};

type TeamItemOstalo = {
  id?: number;
  name?: string;
  title?: string;
  galerija?: string; // ako koristiš posebno polje za lightbox
};

export default function TeamV3() {
  const items = useMemo(() => TeamV2Data as TeamItem[], []);
  const itemsOstalo = useMemo(() => TeamV2DataOstalo as TeamItemOstalo[], []);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const allItems = useMemo(
  () => [...TeamV2Data, ...TeamV2DataOstalo] as TeamItem[],
  []
);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + allItems.length) % allItems.length);
  }, [allItems.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % allItems.length);
  }, [allItems.length]);

  return (
    <>
      <div className="farmer-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="text-center">Pre / Posle</h3>
<div className="row">
  {items.map((team, i) => (
    <div key={team.id ?? i} className="col-lg-4 col-md-6 farmer-stye-one">
      <SingleTeamV2 team={team} onOpen={() => openAt(i)} />
    </div>
  ))}
</div>

<h3 className="text-center">Deo radova</h3>
<div className="row">
  {itemsOstalo.map((team, i) => (
    <div key={team.id ?? i} className="col-lg-4 col-md-6 farmer-stye-one">
      <SingleTeamV2
        team={team}
        onOpen={() => openAt(items.length + i)}
      />
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <TeamLightbox
          items={allItems}
          index={index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
