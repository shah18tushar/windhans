"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ImPointRight } from "react-icons/im";

type SlideButtonProps = {
  onComplete: () => void;
  label?: string;
  className?: string;
  disabled?: boolean;
};

const SlideButton: React.FC<SlideButtonProps> = ({
  onComplete,
  label = "Slide to submit",
  className = "",
  disabled = false,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const knobRef = useRef<HTMLDivElement | null>(null);

  // Visual state (re-renders)
  const [pos, setPosState] = useState<number>(0);
  const [transition, setTransition] = useState(true);

  // Mutable refs for live values (avoid stale closures)
  const posRef = useRef<number>(0);
  const startRef = useRef<number>(0); // negative start (half-outside)
  const maxRef = useRef<number>(0);
  const draggingRef = useRef<boolean>(false);

  // helper to update both state and ref
  const setPos = (v: number) => {
    posRef.current = v;
    setPosState(v);
  };

  // calculate geometry: knob should start half outside (overlap)
  useEffect(() => {
    const calc = () => {
      const track = trackRef.current;
      const knob = knobRef.current;
      if (!track || !knob) return;
      const trackW = track.clientWidth;
      const knobW = knob.clientWidth;
      const start = -Math.round(knobW / 2); // half outside left
      const max = Math.round(trackW - knobW / 2); // allow center to go almost to the right edge
      startRef.current = start;
      maxRef.current = max;
      setTransition(true);
      setPos(start); // reset to left overlapping position
    };

    calc();
    const ro = new ResizeObserver(calc);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  // pointer move / up handlers attached to window
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      if (!trackRef.current || !knobRef.current) return;
      setTransition(false);

      const rect = trackRef.current.getBoundingClientRect();
      const knobW = knobRef.current.clientWidth;
      // desired center x relative to track left:
      const x = e.clientX - rect.left - knobW / 2;
      const clamped = Math.min(maxRef.current, Math.max(startRef.current, x));
      setPos(clamped);
    };

    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      // threshold (88% of full travel)
      const fullRange = maxRef.current - startRef.current;
      const threshold = startRef.current + fullRange * 0.88;

      if (posRef.current >= threshold) {
        // success
        setTransition(true);
        setPos(maxRef.current);
        // small delay to show final position, then callback and reset
        setTimeout(() => {
          onComplete();
          // reset back to start
          setPos(startRef.current);
        }, 160);
      } else {
        // snap back
        setTransition(true);
        setPos(startRef.current);
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
    // we intentionally do not include pos in deps. mutable refs used instead.
  }, [onComplete]);

  return (
    <div
      ref={trackRef}
      className={[
        "relative h-8 rounded-full select-none",
        "bg-white border border-black/6",
        // track shadow (soft)
        "shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
        disabled ? "opacity-60" : "opacity-100",
        className,
      ].join(" ")}
      aria-disabled={disabled}
    >
      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-700 font-medium text-xs ml-10">{label}</span>
      </div>

      {/* Draggable knob */}
      <div
        ref={knobRef}
        role="button"
        aria-label={label}
        tabIndex={0}
        onPointerDown={(e) => {
          if (disabled) return;
          // capture pointer so we continue receiving pointermove even if pointer leaves the knob
          try {
            (e.currentTarget as Element).setPointerCapture(e.pointerId);
          } catch {
            /* ignore if not supported */
          }
          draggingRef.current = true;
          setTransition(false);
        }}
        onKeyDown={(e) => {
          if (disabled) return;
          // allow keyboard quick complete or nudging
          if (e.key === "Enter" || e.key === " ") {
            setTransition(true);
            setPos(maxRef.current);
            setTimeout(() => {
              onComplete();
              setPos(startRef.current);
            }, 160);
          }
          if (e.key === "ArrowRight") {
            const step = Math.max(
              8,
              (maxRef.current - startRef.current) * 0.08
            );
            setPos(Math.min(maxRef.current, posRef.current + step));
          }
          if (e.key === "ArrowLeft") {
            const step = Math.max(
              8,
              (maxRef.current - startRef.current) * 0.08
            );
            setPos(Math.max(startRef.current, posRef.current - step));
          }
        }}
        className={[
          "absolute top-1/2 left-5",
          // knob size (adjust if you want slightly smaller)
          "h-9 w-12 rounded-full z-20",
          // deep purple gradient
          "bg-gradient-to-br from-blue-500 to-blue-600",
          // knob shadow
          "shadow-[0_8px_20px_rgba(0,0,0,0.28)]",
          "flex items-center justify-center",
          "cursor-pointer touch-none",
          "outline-none",
        ].join(" ")}
        style={{
          // translateX by pos, and translateY -50% to center vertically
          transform: `translate(${pos}px, -50%)`,
          transition: transition
            ? "transform 260ms cubic-bezier(.2,.8,.2,1)"
            : "none",
        }}
      >
        <ImPointRight size={22} color="#fff" strokeWidth={0} />
      </div>
    </div>
  );
};

export default SlideButton;