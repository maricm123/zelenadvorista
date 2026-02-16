"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

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

  // ---- mobile swipe ----
  const startX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX.current;
    const dx = endX - startX.current;
    const threshold = 50;

    if (dx > threshold) onPrev();
    if (dx < -threshold) onNext();

    startX.current = null;
  };

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

  const img = item.galerija;
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
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
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
  src={`/assets/img/farmers/${img}`}
  alt={item.name ?? "Team member"}
  fill
  sizes="100vw"
  style={{ objectFit: "contain" }}
  quality={75}
/>
        </div>

        <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ flex: 1, color: "#fff" }}>
            <div style={{ opacity: 0.8, fontSize: 14 }}>{item.title}</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{item.name}</div>
            <div style={{ opacity: 0.7, fontSize: 13, marginTop: 4 }}>
              {index + 1}/{items.length}
            </div>
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
