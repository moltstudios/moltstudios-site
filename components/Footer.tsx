import React from "react";
import Link from "next/link";
import Lily from "./Lily";
import { ROUTES, LINKS } from "./routes";

export default function Footer() {
  return (
    <footer className="dark">
      <div className="wrap sec-tight">
        <div className="grid g3" style={{ gap: 34 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
              <Lily size={24} />
              <b style={{ fontSize: 15, color: "#F4F7F3" }}>Molt Studios</b>
            </div>
            <p className="small dim" style={{ maxWidth: "34ch" }}>
              The product and AI division of Reynoso Industries LLC. Winston-Salem, North Carolina.
            </p>
          </div>
          <div>
            <div className="mono dim" style={{ marginBottom: 12 }}>Site</div>
            {ROUTES.map(([r, l]) => (
              <Link
                key={r}
                href={r}
                style={{
                  display: "block",
                  padding: "9px 0",
                  color: "#C3D2C9",
                  fontFamily: "var(--sans)",
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                {l}
              </Link>
            ))}
          </div>
          <div>
            <div className="mono dim" style={{ marginBottom: 12 }}>Elsewhere</div>
            {LINKS.slice(0, 5).map(([l, h]) => (
              <a
                key={h}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "9px 0",
                  color: "#C3D2C9",
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <hr className="rule" style={{ margin: "30px 0 16px" }} />
        <div className="mono dim" style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
          <span>© {new Date().getFullYear()} Reynoso Industries LLC</span>
          <span>hello@moltstudios.app</span>
          <span>1-833-366-5801</span>
        </div>
      </div>
    </footer>
  );
}
