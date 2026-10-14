"use client";

import { useEffect, useRef, useState } from "react";
import { slides } from "./environment-slides";

const labels = ["接待空间", "用品陈列", "护理空间"];

export function EnvironmentCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [restart, setRestart] = useState(0);
  const region = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const preference = useRef(false);
  const manuallyPaused = useRef<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      preference.current = media.matches;
      // Apply the browser preference after hydration without changing the server markup.
      if (manuallyPaused.current === null) setPaused(media.matches);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      const element = region.current;
      if (
        !element ||
        document.hidden ||
        element.matches(":hover") ||
        element.contains(document.activeElement)
      )
        return;
      if (manuallyPaused.current === null && preference.current) return;
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, restart]);

  function show(next: number) {
    setIndex((next + slides.length) % slides.length);
    setRestart((current) => current + 1);
  }

  return (
    <div
      ref={region}
      className="carousel"
      role="region"
      aria-roledescription="轮播图"
      aria-label="店内环境介绍"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          show(index + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
      onTouchStart={(event) => {
        touchX.current = event.changedTouches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(distance) > 45) show(index + (distance < 0 ? 1 : -1));
      }}
      onTouchCancel={() => {
        touchX.current = null;
      }}
    >
      {slides.map((slide, i) => (
        <article
          key={labels[i]}
          className={`slide${i === index ? " active" : ""}`}
          aria-hidden={i !== index}
        >
          {slide}
        </article>
      ))}
      <div className="carousel-controls">
        <button
          id="prev-slide"
          aria-label="上一张"
          onClick={() => show(index - 1)}
        >
          ←
        </button>
        <div className="dots">
          {labels.map((label, i) => (
            <button
              key={label}
              className={i === index ? "active" : ""}
              aria-label={`查看${label}`}
              aria-current={i === index}
              onClick={() => show(i)}
            />
          ))}
        </div>
        <button
          id="pause-slide"
          className="pause"
          onClick={() => {
            manuallyPaused.current = !paused;
            setPaused(!paused);
            setRestart((current) => current + 1);
          }}
        >
          {paused ? "开始轮播" : "暂停轮播"}
        </button>
        <button
          id="next-slide"
          aria-label="下一张"
          onClick={() => show(index + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
