"use client";

import React, { useState, useCallback } from "react";
import { useReveal, Rv, Jar, Frame, Counter } from "../../components/atoms";

export default function Products() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    const el = document.createElement("textarea");
    el.value = "npm install lumnix";
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  const repos = [
    {
      title: "Lumnix MCP Server",
      kind: "TypeScript · npm",
      desc: "Nineteen tools over JSON-RPC 2.0, with per-platform rate limiting and a 698-test suite.",
      meta: ["MCP", "TypeScript", "Supabase", "Stripe"],
      href: "https://github.com/moltstudios/lumnix-mcp",
      frame: "Terminal — tool listing — 16:9",
    },
    {
      title: "Multi-agent orchestration",
      kind: "Python · internal system, open",
      desc: "Nine autonomous agents running continuously, with task routing, semantic memory, and heartbeat scheduling.",
      meta: ["Python", "Agents", "Semantic memory"],
      href: "https://github.com/TimothyReynoso/ai-agent-orchestration",
      frame: "Agent topology diagram — 16:9",
    },
    {
      title: "ESP32 drone navigation",
      kind: "C++ · firmware",
      desc: "Custom firmware with a GPS binary protocol parser, written for FPV navigation hardware.",
      meta: ["C++", "ESP32", "GPS"],
      href: "https://github.com/moltstudios/esp32-drone-navigation",
      frame: "Bench photo — board and GPS module — 16:9",
    },
    {
      title: "Avatar video pipeline",
      kind: "Python · inference",
      desc: "A deployment pipeline for video avatar models, packaged with Cog for reproducible GPU inference.",
      meta: ["Python", "Cog", "CUDA"],
      href: "https://github.com/TimothyReynoso/avatar-video-pipeline",
      frame: "Pipeline diagram — 16:9",
    },
    {
      title: "Prometheus — quantization paper",
      kind: "Research · preprint",
      desc: "MoE router layers are effectively immune to quantization. A 35B model reduced from 67 GB to 25.3 GB at 99% quality retention.",
      meta: ["Quantization", "MoE", "Distillation"],
      pending: "Preprint pending — arXiv link on publication",
      frame: "Paper first page — 16:9",
    },
    {
      title: "Prometheus — model weights",
      kind: "Hugging Face",
      desc: "The distilled student model and its card, published with an explicit account of which pipeline stages were run.",
      meta: ["Hugging Face", "Model card"],
      pending: "Model card pending — link on release",
      frame: "Model card preview — 16:9",
    },
  ];

  return (
    <div ref={ref}>
      <section
        className="wrap sec-tight"
        style={{ paddingTop: "clamp(48px,7vw,84px)" }}
      >
        <Rv>
          <Jar a="Products" b="Open source" />
        </Rv>
        <Rv i={1}>
          <h1 className="h1" style={{ fontSize: "clamp(34px,5.6vw,58px)" }}>
            Things we shipped.
          </h1>
        </Rv>
        <Rv i={2}>
          <p className="lede" style={{ marginTop: 18 }}>
            Everything below is public. Read the source, run the tests, open an issue.
          </p>
        </Rv>
      </section>

      <section className="wrap sec-tight">
        <Rv>
          <div className="card" style={{ padding: "clamp(24px,4vw,40px)" }}>
            <div
              className="grid g2"
              style={{ gap: 30, alignItems: "center" }}
            >
              <div>
                <div className="mono dim" style={{ marginBottom: 8 }}>
                  Featured · MCP server
                </div>
                <h2 className="h2">Lumnix</h2>
                <p className="lede" style={{ marginTop: 12 }}>
                  An MCP server that gives an AI assistant real tools for product and
                  marketplace research — Amazon, Alibaba, AliExpress, and Keepa — over JSON-RPC
                  2.0.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 30,
                    marginTop: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <Counter to={19} />
                    <div className="mono dim" style={{ marginTop: 5 }}>
                      Tools
                    </div>
                  </div>
                  <div>
                    <Counter to={698} />
                    <div className="mono dim" style={{ marginTop: 5 }}>
                      Tests
                    </div>
                  </div>
                  <div>
                    <span className="stat">0.2.1</span>
                    <div className="mono dim" style={{ marginTop: 5 }}>
                      npm version
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 26 }}>
                  <a
                    className="btn btn-fill"
                    href="https://lumnix.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lumnix.dev
                    <span className="arw" aria-hidden="true">
                      →
                    </span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-line"
                    onClick={copy}
                  >
                    {copied ? "Copied" : "npm install lumnix"}
                  </button>
                </div>
              </div>
              <Frame note="lumnix.dev — tool call in an MCP client — 16:10" />
            </div>
          </div>
        </Rv>
      </section>

      <section className="wrap sec">
        <Rv>
          <Jar a="Repositories" b="Public" />
        </Rv>
        <div className="grid g3">
          {repos.map((r, i) => (
            <Rv key={r.title} i={i}>
              <div
                className="card card-i"
                style={{ padding: 0, overflow: "hidden" }}
              >
                {r.frame && <Frame note={r.frame} ratio="16 / 9" />}
                <div
                  style={{
                    padding: 22,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div className="mono dim" style={{ marginBottom: 7 }}>
                    {r.kind}
                  </div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="small dim" style={{ marginTop: 9 }}>
                    {r.desc}
                  </p>
                  <div style={{ marginTop: 14, flex: 1 }}>
                    {r.meta.map((m) => (
                      <span key={m} className="chip">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    {r.pending ? (
                      <span className="pend">{r.pending}</span>
                    ) : (
                      <a
                        className="lnk mono"
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View repository →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </section>
    </div>
  );
}
