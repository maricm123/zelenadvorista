"use client";

import Image from "next/image";
import React, { useEffect } from "react";

type TeamItem = {
  id?: number;
  name?: string;
  title?: string;
  galerija?: string;
};

export default function TeamLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: TeamItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 980,
          width: "100%",
          background: "#111",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
          <Image
            src={`/assets/img/farmers/${item.galerija}`}
            alt={item.name ?? "Team member"}
            fill
            sizes="(max-width: 768px) 100vw, 980px"
            style={{ objectFit: "contain" }}
            quality={80}
            priority
          />
        </div>

        <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ flex: 1, color: "#fff" }}>
            <div style={{ opacity: 0.8, fontSize: 14 }}>{item.title}</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{item.name}</div>
          </div>

          <button onClick={onPrev} style={btnStyle} aria-label="Previous">◀</button>
          <button onClick={onNext} style={btnStyle} aria-label="Next">▶</button>
          <button onClick={onClose} style={btnStyle} aria-label="Close">✕</button>
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: 10,
  cursor: "pointer",
};
