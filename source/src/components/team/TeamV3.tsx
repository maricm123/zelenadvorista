"use client";

import React, { useCallback, useMemo, useState } from "react";
import TeamV2Data from "@/assets/jsonData/team/TeamV2Datanew.json";
import SingleTeamV2 from "./SingleTeamV2";
import TeamLightbox from "./TeamLightbox";

type TeamItem = {
  id?: number;
  name?: string;
  title?: string;
  galerija?: string; // ako koristiš posebno polje za lightbox
};

export default function TeamV3() {
  const items = useMemo(() => TeamV2Data as TeamItem[], []);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  return (
    <>
      <div className="farmer-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                {items.map((team, i) => (
                  <div className="col-lg-4 col-md-6 farmer-stye-one" key={team.id ?? i}>
                    <SingleTeamV2 team={team} onOpen={() => openAt(i)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <TeamLightbox
          items={items}
          index={index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
