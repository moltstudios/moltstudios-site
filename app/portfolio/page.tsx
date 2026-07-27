"use client";

import React from "react";
import Link from "next/link";
import { useReveal, Rv, Jar } from "../../components/atoms";

export default function Portfolio() {
  const ref = useReveal();

  const timeline = [
    ["2024 — now", "Reynoso Industries LLC", "Founder", "Parent company for Molt Studios and the biotechnology lab. Owns the research, the products, and the client work."],
    ["2024 — now", "Molt Studios", "Founder, AI engineering", "Production AI systems, model compression research, and the multi-agent orchestration platform. Client delivery in regulated industries."],
    ["2019 — 2024", "Infosys", "AI / ML Engineer", "Five years of enterprise engineering, delivering for clients including Truist and Lumen."],
    ["2018 — 2019", "Kenzie Academy", "Software Engineering", "Full-stack program."],
  ];

  const capabilities: [string, string[]][] = [
    ["Machine learning", ["Model compression and quantization", "Cross-tokenizer distillation", "Fine-tuning: LoRA, QLoRA, SFT, DPO", "GPU deployment and inference"]],
    ["Systems", ["Multi-agent orchestration", "MCP protocol and tooling", "Python, TypeScript, C++", "Docker, CUDA, distributed training"]],
    ["Product", ["React and Next.js", "Supabase and Postgres", "Technical documentation systems", "Regulatory and compliance tooling"]],
  ];

  return (
    <div ref={ref}>
      <section className="wrap sec-tight" style={{ paddingTop: "clamp(48px,7vw,84px)" }}>
        <Rv><Jar a="Portfolio" b="Timothy Reynoso" /></Rv>
        <Rv i={1}><h1 className="h1" style={{ fontSize: "clamp(34px,5.6vw,58px)" }}>AI and ML engineer.</h1></Rv>
        <Rv i={2}>
          <p className="lede" style={{ marginTop: 18 }}>
            Five-plus years of enterprise engineering at Infosys, delivering for clients including
            Truist and Lumen, now running an independent practice in model compression,
            multi-agent systems, and AI deployment for regulated teams.
          </p>
        </Rv>
        <Rv i={3}>
          <div className="row" style={{ marginTop: 26 }}>
            <a className="btn btn-fill" href="https://linkedin.com/in/timothy-reynoso" target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="arw" aria-hidden="true">→</span>
            </a>
            <Link className="btn btn-line" href="/contact">
              Request résumé
              <span className="arw" aria-hidden="true">→</span>
            </Link>
          </div>
        </Rv>
      </section>

      <section className="wrap sec-tight">
        <Rv><Jar a="Capabilities" /></Rv>
        <div className="grid g3">
          {capabilities.map(([t, list], i) => (
            <Rv key={t} i={i}>
              <div className="card card-i">
                <h3 className="h3">{t}</h3>
                <ul style={{ listStyle: "none", marginTop: 12 }}>
                  {list.map((l) => (
                    <li key={l} className="small dim" style={{ display: "flex", gap: 9, padding: "4px 0" }}>
                      <span style={{ color: "var(--moss)" }} aria-hidden="true">—</span>{l}
                    </li>
                  ))}
                </ul>
              </div>
            </Rv>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <Rv><Jar a="Experience" b="Reverse chronological" /></Rv>
        <div>
          {timeline.map(([when, org, role, d], i) => (
            <Rv key={org} i={i}>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", padding: "22px 0", borderTop: "1px solid var(--line)" }}>
                <div className="mono dim" style={{ flex: "0 0 130px" }}>{when}</div>
                <div style={{ flex: "1 1 380px" }}>
                  <h3 className="h3">{org}</h3>
                  <div className="mono" style={{ color: "var(--moss)", margin: "6px 0 9px" }}>{role}</div>
                  <p className="small dim">{d}</p>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </section>

      <section className="dark">
        <div className="wrap sec-tight">
          <Rv><Jar a="Education" /></Rv>
          <div className="grid g2">
            <Rv>
              <div className="card">
                <h3 className="h3">Southern New Hampshire University</h3>
                <p className="small dim" style={{ marginTop: 8 }}>
                  B.S. Information Technology — expected October 2026
                </p>
              </div>
            </Rv>
            <Rv i={1}>
              <div className="card">
                <h3 className="h3">Kenzie Academy</h3>
                <p className="small dim" style={{ marginTop: 8 }}>Software Engineering</p>
              </div>
            </Rv>
          </div>
        </div>
      </section>
    </div>
  );
}
