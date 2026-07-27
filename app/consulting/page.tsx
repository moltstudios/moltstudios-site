"use client";

import React from "react";
import Link from "next/link";
import { useReveal, Rv, Jar } from "../../components/atoms";

export default function Consulting() {
  const ref = useReveal();

  const offers = [
    {
      tag: "Offer A",
      title: "Accreditation-ready policy systems",
      sub: "A complete, survey-ready CARF or Joint Commission policies and procedures system for behavioral health providers — delivered in six weeks.",
      bullets: [
        "Complete policies and procedures manual, mapped standard by standard",
        "Standards crosswalk — the surveyor-facing document",
        "Forms and templates library",
        "Staff orientation and training packet",
        "A maintainable source system: amendments regenerate the manual",
      ],
      price: "$14,000",
      terms: "Fixed · 6 weeks · 50 / 50",
      study:
        "A 152-page CARF-accreditation-ready manual for a provider delivering RB-BHT services under North Carolina Medicaid Clinical Coverage Policy 8F. Built as a modular, version-controlled system — amend one policy, regenerate the formatted manual in minutes.",
    },
    {
      tag: "Offer B",
      title: "AI systems audit and implementation",
      sub: "Two weeks. A working implementation handed to your team, not a slide deck and a roadmap.",
      bullets: [
        "Week 1 — audit: your workflows ranked by hours recoverable per dollar",
        "An honest account of where AI will not help",
        "Week 2 — build: the top-ranked item, deployed and documented",
        "Written findings on everything else, with effort estimates",
        "Optional continuing engagement at roughly 10 hours a week",
      ],
      price: "$8,500",
      terms: "Two weeks · then $6,500/mo",
      study:
        "Project Prometheus: compressed a 35B-parameter mixture-of-experts model from 67 GB to 25.3 GB at 99% quality retention, and identified that MoE router layers are effectively immune to quantization. The model now runs on consumer hardware instead of a rented A100.",
    },
  ];

  return (
    <div ref={ref}>
      <section
        className="wrap sec-tight"
        style={{ paddingTop: "clamp(48px,7vw,84px)" }}
      >
        <Rv>
          <Jar a="Consulting" b="Two offers" />
        </Rv>
        <Rv i={1}>
          <h1 className="h1" style={{ fontSize: "clamp(34px,5.6vw,58px)" }}>
            Fixed scope.
            <br />
            Stated price. Stated end date.
          </h1>
        </Rv>
        <Rv i={2}>
          <p className="lede" style={{ marginTop: 20 }}>
            Both engagements are priced up front and delivered by the person who scoped them.
            No hourly billing on the core work, and no discovery phase that quietly becomes the
            project.
          </p>
        </Rv>
      </section>

      <section className="wrap sec-tight">
        <div className="grid g2">
          {offers.map((o, idx) => (
            <Rv key={o.tag} i={idx}>
              <div className="card card-i">
                <Jar a={o.tag} />
                <h3
                  className="h2"
                  style={{ fontSize: "clamp(23px,2.6vw,30px)" }}
                >
                  {o.title}
                </h3>
                <p className="small dim" style={{ marginTop: 10 }}>
                  {o.sub}
                </p>
                <hr className="rule" style={{ margin: "20px 0" }} />
                <div className="mono dim" style={{ marginBottom: 10 }}>
                  What you get
                </div>
                <ul style={{ listStyle: "none", flex: 1 }}>
                  {o.bullets.map((b) => (
                    <li
                      key={b}
                      className="small"
                      style={{ display: "flex", gap: 10, padding: "5px 0" }}
                    >
                      <span
                        style={{ color: "var(--moss)", flex: "0 0 auto" }}
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <hr className="rule" style={{ margin: "20px 0" }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span className="stat">{o.price}</span>
                  <span className="mono dim">{o.terms}</span>
                </div>
                <div
                  style={{
                    marginTop: 18,
                    background: "rgba(13,92,63,.05)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: 4,
                    padding: 16,
                  }}
                >
                  <div
                    className="mono"
                    style={{ color: "var(--moss)", marginBottom: 7 }}
                  >
                    Case study
                  </div>
                  <p className="small">{o.study}</p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Link
                    className="btn btn-fill"
                    href="/contact"
                  >
                    Enquire
                    <span className="arw" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <Rv>
          <Jar a="Who this is for" />
        </Rv>
        <div className="grid g2" style={{ gap: 30 }}>
          <Rv>
            <p className="lede">
              Behavioral health providers of 15 to 75 people facing a first accreditation, a
              re-survey, or a new state contract. And teams of 50 to 500 in regulated industries
              that have budget approved and nobody free to build with it.
            </p>
          </Rv>
          <Rv i={1}>
            <p className="lede dim">
              If what you need is a strategy deck or a vendor evaluation, this is the wrong shop —
              and you will hear that on the first call rather than at the end of a paid discovery
              phase.
            </p>
          </Rv>
        </div>
      </section>

      <section className="dark">
        <div className="wrap sec-tight">
          <Rv>
            <Jar a="Stack" b="What we build with" />
          </Rv>
          <Rv i={1}>
            <div style={{ marginTop: 4 }}>
              {[
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "PyTorch",
                "Supabase",
                "Postgres",
                "Docker",
                "Vercel",
                "MCP",
                "OpenClaw",
                "Node.js",
              ].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Rv>
        </div>
      </section>
    </div>
  );
}
