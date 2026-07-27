"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Lily from "./Lily";
import { ROUTES } from "./routes";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", k);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="wrap nav-in">
          <Link className="brand" href="/" aria-label="Molt Studios, home">
            <Lily size={22} />
            <b>Molt Studios</b>
          </Link>
          <div className="nav-links">
            {ROUTES.map(([r, label]) => (
              <Link
                key={r}
                className="nlink"
                href={r}
                aria-current={isActive(r) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
          <button
            className="burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg width="17" height="12" viewBox="0 0 17 12" aria-hidden="true">
              {[1, 6, 11].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="17"
                  y2={y}
                  stroke="#101512"
                  strokeWidth="1.4"
                />
              ))}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <>
          <div className="scrim" onClick={() => setOpen(false)} />
          <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <span className="mono dim">Menu</span>
              <button
                className="burger"
                style={{ display: "flex" }}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
                  <line x1="1" y1="1" x2="14" y2="14" stroke="#101512" strokeWidth="1.4" />
                  <line x1="14" y1="1" x2="1" y2="14" stroke="#101512" strokeWidth="1.4" />
                </svg>
              </button>
            </div>
            {ROUTES.map(([r, label]) => (
              <Link
                key={r}
                className="dlink"
                href={r}
                onClick={() => setOpen(false)}
                aria-current={isActive(r) ? "page" : undefined}
              >
                {label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <div style={{ marginTop: "auto", paddingTop: 20 }}>
              <div className="mono dim" style={{ lineHeight: 2 }}>
                hello@moltstudios.app
                <br />
                1-833-366-5801
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
