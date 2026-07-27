"use client";

import React from "react";
import { useReveal, useInView, Rv, Jar, Frame } from "../../components/atoms";
import Lily from "../../components/Lily";

export default function Lab() {
  const ref = useReveal();
  const [missionRef, missionSeen] = useInView(0.4);

  const stations = [
    ["01", "Prep and sterilization", "Media formulation, decanting, and autoclaving. Everything that enters a jar passes through here first.", "TR250E 14 L autoclave"],
    ["02", "Laminar flow", "All transfers and subcultures. HEPA-filtered laminar airflow keeps the working field sterile.", "HEPA laminar flow hood"],
    ["03", "Incubation", "Temperature and photoperiod control for culture initiation and multiplication.", "VIVOHOME incubator"],
    ["04", "Grow-out", "Acclimatization from jar to soil — the stage where most micropropagation losses happen.", "Grow chamber, humidity-staged"],
  ];

  const equipment = [
    ["Autoclave", "TR250E, 14 L chamber", "Media and instrument sterilization"],
    ["Laminar flow hood", "HEPA-filtered, horizontal", "Sterile transfer field"],
    ["Incubator", "VIVOHOME, temperature controlled", "Initiation and multiplication"],
    ["Grow chamber", "Humidity-staged, LED photoperiod", "Acclimatization to soil"],
    ["Orbital shaker", "Variable speed", "Liquid culture and suspension work"],
  ];

  return (
    <div ref={ref}>
      <section className="wrap sec-tight" style={{ paddingTop: "clamp(48px,7vw,84px)" }}>
        <Rv><Jar a="Bio Lab" b="In operation" /></Rv>
        <Rv i={1}><h1 className="h1" style={{ fontSize: "clamp(34px,5.6vw,58px)" }}>A real lab, in a real building.</h1></Rv>
        <Rv i={2}>
          <p className="lede" style={{ marginTop: 18 }}>
            Four stations for plant tissue culture: sterilization, laminar flow, incubation, grow-out.
            We run micropropagation lines, work on engineered pigment, and photograph every jar.
          </p>
        </Rv>
      </section>

      <section className="wrap sec-tight">
        <Rv><Frame note="The lab — wide shot of all four stations — 21:9" ratio="21 / 9" /></Rv>
      </section>

      <section className="wrap sec">
        <Rv><Jar a="The stations" b="In sequence" /></Rv>
        <div className="grid g2">
          {stations.map(([n, t, d, spec], i) => (
            <Rv key={n} i={i}>
              <div className="card card-i" style={{ flexDirection: "row", gap: 18 }}>
                <div className="mono" style={{ color: "var(--amber)", flex: "0 0 auto", paddingTop: 3 }}>{n}</div>
                <div>
                  <h3 className="h3">{t}</h3>
                  <p className="small dim" style={{ marginTop: 8 }}>{d}</p>
                  <div className="mono" style={{ marginTop: 12, color: "var(--moss)" }}>{spec}</div>
                </div>
              </div>
            </Rv>
          ))}
        </div>
        <Rv i={2} style={{ marginTop: 18 }}>
          <div className="grid g3">
            <Frame note="Autoclave — real photo — 4:3" ratio="4 / 3" />
            <Frame note="Flow hood, working field — 4:3" ratio="4 / 3" />
            <Frame note="Jars in the incubator — 4:3" ratio="4 / 3" />
          </div>
        </Rv>
      </section>

      <section className="dark">
        <div className="wrap sec">
          <Rv><Jar a="Current research" b="Blue cotton" /></Rv>
          <div className="grid g2" style={{ gap: 38, alignItems: "start" }}>
            <Rv>
              <h2 className="h2">Cotton that grows its own blue.</h2>
              <p className="lede" style={{ marginTop: 16, color: "#C3D2C9" }}>
                Denim is dyed with synthetic indigo, and the dyeing is the dirtiest step in the
                supply chain. We are working on cotton that makes a blue pigment in the fibre
                itself — expressing the bacterial <em>bpsA</em> and <em>sfp</em> genes in the
                Coker 312 line, driven by fibre-specific promoters.
              </p>
              <p className="lede dim" style={{ marginTop: 14 }}>
                Validation runs in tobacco first, because it is fast and cheap to be wrong in.
                Freedom-to-operate has been reviewed and the relevant promoter patents appear to
                have expired.
              </p>
            </Rv>
            <Rv i={1}>
              <Frame note="Coker 312 explants in culture — 4:3" ratio="4 / 3" />
              <div style={{ marginTop: 18 }}>
                {["bpsA", "sfp", "Coker 312", "Fibre-specific promoter", "Tobacco validation"].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </Rv>
          </div>
        </div>
      </section>

      <section className="wrap sec" ref={missionRef as React.RefObject<HTMLDivElement>}>
        <div className="grid g2" style={{ gap: 40, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", order: 1 }}>
            <Lily size={280} blue={missionSeen} draw />
          </div>
          <div style={{ order: 2 }}>
            <Jar a="The mission" b="Higanbana" />
            <h2 className="h2">Blue cotton is the R&amp;D.<br />The blue spider lily is the mission.</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              <em>Lycoris radiata</em> — the higanbana — blooms scarlet along Japanese
              graveyards and rice-paddy borders at the autumn equinox, on a bare stem with no
              leaves. It has been a marker for the boundary between worlds for centuries.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              A blue one has never existed. The genus has no pathway to the pigment, so no amount
              of breeding will produce it. That is exactly why it is worth aiming at: it is a
              clear, honest, very hard target, and everything we learn getting there is useful
              somewhere else first.
            </p>
            <p className="small dim" style={{ marginTop: 16 }}>
              Built on higanbana folklore, which is public domain and considerably older than
              anything it has since appeared in.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap sec-tight">
        <Rv>
          <div className="card" style={{ padding: "clamp(24px,4vw,40px)" }}>
            <div className="grid g2" style={{ gap: 34, alignItems: "center" }}>
              <div>
                <Jar a="Open dataset" b="In collection" />
                <h2 className="h2" style={{ fontSize: "clamp(23px,2.6vw,31px)" }}>
                  A labeled image dataset for micropropagation.
                </h2>
                <p className="lede" style={{ marginTop: 14 }}>
                  Every jar is photographed on a fixed rig at every subculture and once a week
                  between, paired with a record of medium, growth regulators, contamination, and
                  outcome at transfer. Contamination detection and vigour scoring in tissue culture
                  are still done by eye. There is no public dataset for it. We are building one.
                </p>
                <div style={{ marginTop: 20 }}>
                  {["Fixed rig", "Weekly capture", "Contamination labels", "Vigour scoring", "Open release"].map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </div>
              <Frame note="Capture rig — jar on the copy stand — 4:3" ratio="4 / 3" />
            </div>
          </div>
        </Rv>
      </section>

      <section className="wrap sec-tight" style={{ paddingBottom: "clamp(56px,8vw,104px)" }}>
        <Rv><Jar a="Equipment" b="Specification" /></Rv>
        <Rv i={1}>
          <div className="card" style={{ padding: 0 }}>
            {equipment.map(([a, b, c], i) => (
              <div
                key={a}
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  padding: "15px 22px",
                  borderBottom: i === equipment.length - 1 ? "none" : "1px solid var(--line-soft)",
                }}
              >
                <div className="mono" style={{ flex: "1 1 150px", color: "var(--ink)" }}>{a}</div>
                <div className="small" style={{ flex: "1 1 210px" }}>{b}</div>
                <div className="small dim" style={{ flex: "1 1 210px" }}>{c}</div>
              </div>
            ))}
          </div>
        </Rv>
      </section>
    </div>
  );
}
