"use client";

import React, { use, useCallback, useMemo, useState } from "react";
import TeamV2Data from "@/assets/jsonData/team/TeamV2Datanew.json";
import SingleTeamV2 from "./SingleTeamV2";
import TeamLightbox from "./TeamLightbox";

const TeamV3 = () => {
  const items = useMemo(() => TeamV2Data, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [items.length]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);

  return (
    <>
      <div className="farmer-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row blacklight team-style-one">
                {items.map((team, idx) => (
                  <div className="col-lg-4 col-md-6 farmer-stye-one" key={team.id}>
                    <SingleTeamV2 team={team} index={idx} onOpen={open} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <TeamLightbox
          items={items}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
};

export default TeamV3;
