"use client";

import React, { useEffect, useState, memo } from "react";

/* ---------------- ASSETS ---------------- */

import djangoSvg from "../assets/django.svg";
import github from "../assets/github.svg";
import mongoDB from "../assets/mongoDB.svg";
import mySQL from "../assets/mysql.svg";
import postgreSQL from "../assets/postgresql.svg";
import python from "../assets/python.svg";
import sql from "../assets/sql.svg";
import vscode from "../assets/vscode.svg";
import express from "../assets/express.svg";
import java from "../assets/java.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";

/* ---------------- HELPERS ---------------- */

const iconImg = (src, alt) => (
  <img src={src} alt={alt} className="w-full h-full object-contain" />
);

const formatLabel = (text) =>
  text.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

/* ---------------- ICON MAP ---------------- */

const iconComponents = {
  python: { component: () => iconImg(python, "Python"), color: "#38bdf8" },
  java: { component: () => iconImg(java, "Java"), color: "#ef4444" },
  c: { component: () => <span className="text-blue-400 font-bold">C</span>, color: "#60a5fa" },

  html: { component: () => iconImg(html, "HTML"), color: "#f97316" },
  css: { component: () => iconImg(css, "CSS"), color: "#3b82f6" },
  javascript: { component: () => iconImg(javascript, "JavaScript"), color: "#facc15" },
  react: { component: () => iconImg(react, "React"), color: "#22d3ee" },
  node: { component: () => iconImg(node, "Node"), color: "#22c55e" },

  express: { component: () => iconImg(express, "Express"), color: "#e5e7eb" },
  django: { component: () => iconImg(djangoSvg, "Django"), color: "#22c55e" },

  mongoDB: { component: () => iconImg(mongoDB, "MongoDB"), color: "#22c55e" },
  sql: { component: () => iconImg(sql, "SQL"), color: "#38bdf8" },
  postgreSQL: { component: () => iconImg(postgreSQL, "PostgreSQL"), color: "#3b82f6" },
  mySQL: { component: () => iconImg(mySQL, "MySQL"), color: "#60a5fa" },

  vscode: { component: () => iconImg(vscode, "VS Code"), color: "#38bdf8" },
  github: { component: () => iconImg(github, "GitHub"), color: "#e5e7eb" },
};

const SkillIcon = memo(({ type }) => {
  const Icon = iconComponents[type]?.component;
  return Icon ? <Icon /> : null;
});

/* ---------------- ORBITS ---------------- */

const orbitGroups = [
  { radius: 0.18, speed: 0.5, items: ["python", "java", "c"] },
  { radius: 0.30, speed: -0.45, items: ["html", "css", "javascript", "react", "node", "express", "django"] },
  { radius: 0.40, speed: 0.35, items: ["mongoDB", "sql", "postgreSQL", "mySQL"] },
  { radius: 0.48, speed: -0.25, items: ["vscode", "github"] },
];

const orbitLabels = [
  "Programming Skills",
  "Web Technologies",
  "Databases",
  "Tools",
];

/* ---------------- PLANET ---------------- */

const OrbitingSkill = memo(
  ({ radius, angle, type, categoryIndex, setPaused, setActiveCategory, containerSize }) => {
    const size = containerSize * 0.06;
    const r = containerSize * radius;

    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    return (
      <div
        className="absolute top-1/2 left-1/2 group"
        style={{
          width: size,
          height: size,
          transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        }}
        onMouseEnter={() => {
          setPaused(true);
          setActiveCategory(categoryIndex);
        }}
        onMouseLeave={() => {
          setPaused(false);
          setActiveCategory(null);
        }}
      >
        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
          {formatLabel(type)}
        </div>

        <div
          className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center"
          style={{ boxShadow: `0 0 18px ${iconComponents[type]?.color}66` }}
        >
          <div className="w-full h-full p-2 bg-white rounded-full flex items-center justify-center">
            <SkillIcon type={type} />
          </div>
        </div>
      </div>
    );
  }
);

/* ---------------- ORBIT RING ---------------- */

const OrbitRing = ({ radius, containerSize }) => {
  const r = containerSize * radius;

  return (
    <div
      className="absolute rounded-full border border-white/10"
      style={{
        width: r * 2,
        height: r * 2,
      }}
    />
  );
};

/* ---------------- MAIN ---------------- */

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const [containerSize, setContainerSize] = useState(600);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width < 500) setContainerSize(320);
      else if (width < 768) setContainerSize(420);
      else if (width < 1024) setContainerSize(520);
      else setContainerSize(650);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    let raf;
    const loop = () => {
      if (!paused) setTime((t) => t + 0.016);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-slate-950 px-4 py-20 relative overflow-hidden">
      <div className="w-full max-w-[85rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* LEFT PANE: Header and Active Category text */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center text-center lg:text-left z-10">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-b from-blue-400 to-transparent bg-clip-text text-transparent tracking-widest w-full mx-auto lg:mx-0">
            SKILLS
          </h2>
          <div className="mt-6 h-8 text-blue-300 text-sm sm:text-base font-semibold uppercase tracking-widest transition-opacity duration-300">
            {activeCategory !== null ? orbitLabels[activeCategory] : ""}
          </div>
        </div>

        {/* RIGHT PANE: Orbiting Design */}
        <div className="w-full lg:w-[60%] flex items-center justify-center">
          <div
            className="relative flex items-center justify-center"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Center Core dot (optional sleek detail) */}
            <div className="absolute w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>

            {/* ORBIT RINGS */}
            {orbitGroups.map((o) => (
              <OrbitRing key={o.radius} radius={o.radius} containerSize={containerSize} />
            ))}

            {/* SKILL ICONS */}
            {orbitGroups.map((orbit, orbitIndex) =>
              orbit.items.map((type, i) => (
                <OrbitingSkill
                  key={`${orbit.radius}-${type}`}
                  radius={orbit.radius}
                  angle={(2 * Math.PI * i) / orbit.items.length + time * orbit.speed}
                  type={type}
                  categoryIndex={orbitIndex}
                  setPaused={setPaused}
                  setActiveCategory={setActiveCategory}
                  containerSize={containerSize}
                />
              ))
            )}
          </div>
        </div>

      </div>
    </main>
  );
}