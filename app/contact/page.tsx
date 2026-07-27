"use client";

import React, { useState } from "react";
import { useReveal, Rv, Jar, Btn } from "../../components/atoms";
import Lily from "../../components/Lily";
import { LINKS } from "../../components/routes";

export default function Contact() {
  const ref = useReveal();
  const [f, setF] = useState({ name: "", email: "", org: "", msg: "" });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });
  const ready = f.name.trim() && f.email.includes("@") && f.msg.trim();

  return (
    <div ref={ref}>
      <section className="wrap sec-tight" style={{ paddingTop: "clamp(48px,7vw,84px)" }}>
        <Rv><Jar a="Contact" b="Winston-Salem, NC" /></Rv>
        <Rv i={1}><h1 className="h1" style={{ fontSize: "clamp(34px,5.6vw,58px)" }}>Tell us what you need built.</h1></Rv>
      </section>

      <section className="wrap sec-tight" style={{ paddingBottom: "clamp(56px,8vw,104px)" }}>
        <div className="grid g2" style={{ gap: 40, alignItems: "start" }}>
          <Rv>
            <div className="card">
              {sent ? (
                <div style={{ padding: "26px 0", textAlign: "center" }}>
                  <Lily size={64} />
                  <h3 className="h3" style={{ marginTop: 14 }}>Message ready to send</h3>
                  <p className="small dim" style={{ marginTop: 8 }}>
                    This build has no backend wired yet. Connect the handler to Formspree or a
                    Vercel function and this becomes live.
                  </p>
                  <div style={{ marginTop: 18 }}>
                    <Btn kind="line" arrow={false} onClick={() => setSent(false)}>Edit message</Btn>
                  </div>
                </div>
              ) : (
                <div className="stack">
                  <div>
                    <label className="mono dim" htmlFor="c-name">Name</label>
                    <input id="c-name" className="inp" style={{ marginTop: 6 }} value={f.name}
                      onChange={set("name")} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mono dim" htmlFor="c-email">Email</label>
                    <input id="c-email" className="inp" style={{ marginTop: 6 }} type="email"
                      value={f.email} onChange={set("email")} placeholder="you@organization.com" />
                  </div>
                  <div>
                    <label className="mono dim" htmlFor="c-org">Organization</label>
                    <input id="c-org" className="inp" style={{ marginTop: 6 }} value={f.org}
                      onChange={set("org")} placeholder="Optional" />
                  </div>
                  <div>
                    <label className="mono dim" htmlFor="c-msg">What do you need</label>
                    <textarea id="c-msg" className="inp" style={{ marginTop: 6, minHeight: 130, resize: "vertical" }}
                      value={f.msg} onChange={set("msg")}
                      placeholder="A sentence or two is plenty. Timeline and budget help." />
                  </div>
                  <Btn onClick={() => setSent(true)} disabled={!ready}>Send message</Btn>
                </div>
              )}
            </div>
          </Rv>

          <Rv i={1}>
            <div className="stack">
              <div className="card">
                <div className="mono dim">Email</div>
                <a className="lnk h3" href="mailto:hello@moltstudios.app"
                  style={{ display: "inline-flex", alignItems: "center", minHeight: 42, marginTop: 4 }}>hello@moltstudios.app</a>
              </div>
              <div className="card">
                <div className="mono dim">Phone</div>
                <a className="lnk h3" href="tel:+18333665801"
                  style={{ display: "inline-flex", alignItems: "center", minHeight: 42, marginTop: 4 }}>1-833-366-5801</a>
                <div className="mono dim" style={{ marginTop: 8 }}>1-833-FIND-MOLT</div>
              </div>
              <div className="card">
                <div className="mono dim" style={{ marginBottom: 12 }}>Elsewhere</div>
                {LINKS.map(([l, h]) => (
                  <a key={h} className="small" href={h} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "12px 0", minHeight: 44, alignItems: "center",
                      borderTop: "1px solid var(--line-soft)", color: "var(--body)", textDecoration: "none" }}>
                    {l}<span style={{ color: "var(--moss)" }} aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </Rv>
        </div>
      </section>
    </div>
  );
}
