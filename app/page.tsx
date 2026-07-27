"use client";

import React from "react";
import Link from "next/link";
import { useReveal, Rv, Jar, Btn, Frame, FrondBackdrop, Ticker } from "../components/atoms";
import Lily from "../components/Lily";
import { CLIENTS } from "../components/routes";

export default function Home() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className="hero">
        <FrondBackdrop />
        <div
          className="wrap hero-in"
          style={{
            paddingTop: "clamp(56px,9vw,116px)",
            paddingBottom: "clamp(48px,7vw,92px)",
          }}
        >
          <Rv>
            <Jar a="Reynoso Industries LLC" b="Winston-Salem, NC" />
          </Rv>
          <Rv i={1}>
            <h1 className="h1" style={{ maxWidth: "14ch" }}>
              We build AI systems and engineered biology.
            </h1>
          </Rv>
          <Rv i={2}>
            <p className="lede" style={{ marginTop: 24 }}>
              A working engineering practice and a tissue culture lab, run out of one building.
              We ship production AI for regulated teams, publish the research, and grow the plants
              ourselves.
            </p>
          </Rv>
          <Rv i={3}>
            <div className="row" style={{ marginTop: 30 }}>
              <Link className="btn btn-fill" href="/consulting">
                Start a project
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link className="btn btn-line" href="/lab">
                See the lab
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Rv>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(28px,4vw,44px)" }}>
        <Rv>
          <div className="legend"><span>Worked with</span></div>
          <Ticker items={CLIENTS} />
          <p className="tkr-note">
            Enterprise delivery at Infosys for Truist and Lumen. Direct engagements with
            Valera Counseling Services, Safe Haven ABC, and ABA practices.
          </p>
        </Rv>
      </section>

      <section className="wrap sec">
        <Rv>
          <Jar a="What we do" b="Three lines" />
        </Rv>
        <div className="grid g3">
          {[
            [
              "AI systems",
              "Model compression, distillation, and multi-agent orchestration — built to run in production, not in a notebook.",
              "9 agents · continuous",
              "Consulting",
              "/consulting",
            ],
            [
              "Software products",
              "Developer tooling shipped as open source and on npm. Lumnix is an MCP server for e-commerce research.",
              "npm lumnix@0.2.1",
              "Products",
              "/products",
            ],
            [
              "Biotechnology",
              "A four-station plant tissue culture lab. Micropropagation, engineered pigment, and an open image dataset.",
              "Coker 312 · bpsA / sfp",
              "Bio Lab",
              "/lab",
            ],
          ].map(([t, d, fact, cta, r], i) => (
            <Rv key={t as string} i={i}>
              <div className="card card-i">
                <h3 className="h3">{t}</h3>
                <p className="small dim" style={{ marginTop: 9, flex: 1 }}>
                  {d}
                </p>
                <div
                  className="mono"
                  style={{
                    color: "var(--moss)",
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: "1px solid var(--line-soft)",
                  }}
                >
                  {fact}
                </div>
                <Link
                  href={r as string}
                  className="mono inline-cta"
                  style={{ marginTop: 4, textDecoration: "none" }}
                >
                  {cta} →
                </Link>
              </div>
            </Rv>
          ))}
        </div>
      </section>

      <section className="dark">
        <div className="wrap sec">
          <Rv>
            <Jar a="Selected work" b="Evidence, not claims" />
          </Rv>
          <div className="grid g3">
            {[
              [
                "Project Prometheus",
                "Model compression research",
                "Compressed a 35B-parameter mixture-of-experts model to 38% of its size at 99% quality retention, and found that MoE router layers are effectively immune to quantization.",
                "Prometheus paper cover — 3:2",
              ],
              [
                "Lumnix MCP Server",
                "Open source, on npm",
                "Nineteen tools over JSON-RPC 2.0 for product and marketplace research, with 698 tests in the suite. Runs anywhere an MCP client does.",
                "lumnix.dev screenshot — 3:2",
              ],
              [
                "The tissue culture lab",
                "Four stations, in operation",
                "Sterile prep, laminar flow, incubation, and grow-out. Currently running micropropagation lines and building a labeled contamination dataset.",
                "Flow hood, real photo — 3:2",
              ],
            ].map(([t, k, d, f], i) => (
              <Rv key={t as string} i={i}>
                <div className="card card-i" style={{ padding: 0, overflow: "hidden" }}>
                  <Frame note={f as string} ratio="3 / 2" />
                  <div style={{ padding: 22 }}>
                    <div className="mono dim" style={{ marginBottom: 7 }}>
                      {k}
                    </div>
                    <h3 className="h3">{t}</h3>
                    <p className="small dim" style={{ marginTop: 9 }}>
                      {d}
                    </p>
                  </div>
                </div>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="grid g2" style={{ alignItems: "center", gap: 40 }}>
          <Rv>
            <Jar a="Mission" b="Bio" />
            <h2 className="h2">
              Blue cotton is the R&amp;D.
              <br />
              The blue spider lily is the mission.
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              No blue flower exists in the genus <em>Lycoris</em> — it has no pathway to the
              pigment. That is the point. We are working the problem from the tractable end, in
              cotton, and publishing what we learn along the way.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-line" href="/lab">
                Read the science
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Rv>
          <Rv i={1} style={{ display: "flex", justifyContent: "center" }}>
            <Lily size={220} />
          </Rv>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(56px,8vw,104px)" }}>
        <Rv>
          <div
            className="card"
            style={{
              padding: "clamp(28px,5vw,52px)",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h2 className="h2">Have something that needs building?</h2>
            <p className="lede" style={{ marginTop: 12, textAlign: "center" }}>
              Two fixed-scope offers, both with a stated price and a stated end date.
            </p>
            <div className="row" style={{ marginTop: 24, justifyContent: "center" }}>
              <Link className="btn btn-fill" href="/consulting">
                See the offers
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link className="btn btn-line" href="/contact">
                Get in touch
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Rv>
      </section>
    </div>
  );
}
