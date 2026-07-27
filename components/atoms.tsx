"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

/* ---------------------------------------------------------------- hooks */

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = root.querySelectorAll(".rv");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i || 0);
          setTimeout(() => e.target.classList.add("in"), i * 55);
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function useInView(threshold = 0.35) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/* ---------------------------------------------------------------- atoms */

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const Rv = ({ i = 0, children, ...p }: { i?: number } & DivProps) => (
  <div className="rv" data-i={i} {...p}>
    {children}
  </div>
);

export const Jar = ({ a, b }: { a: string; b?: string }) => (
  <div className="jar mono">
    <span>{a}</span>
    {b && <span>{b}</span>}
  </div>
);

type BtnProps = {
  kind?: "fill" | "line";
  as?: "button" | "a";
  arrow?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Btn = ({
  kind = "fill",
  as = "button",
  arrow = true,
  children,
  ...p
}: BtnProps) => {
  const cls = `btn btn-${kind}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <span className="arw" aria-hidden="true">
          →
        </span>
      )}
    </>
  );
  return as === "a" ? (
    <a className={cls} {...(p as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {inner}
    </a>
  ) : (
    <button
      type="button"
      className={cls}
      {...(p as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
};

export const Ticker = ({ items }: { items: string[] }) => (
  <div className="tkr">
    <div className="tkr-track">
      {items.map((s) => (
        <span className="tkr-item" key={s}>
          {s}
          <i aria-hidden="true" />
        </span>
      ))}
      {items.map((s) => (
        <span className="tkr-item dup" key={"d" + s} aria-hidden="true">
          {s}
          <i />
        </span>
      ))}
    </div>
  </div>
);

export const Frame = ({
  note,
  ratio = "16 / 10",
}: {
  note: string;
  ratio?: string;
}) => (
  <div className="frame" style={{ aspectRatio: ratio }}>
    <p>{note}</p>
  </div>
);

export function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const [ref, seen] = useInView(0.5);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let raf: number, t0: number;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / 1100, 1);
      setV(to * (1 - Math.pow(2, -10 * p)));
      if (p < 1) raf = requestAnimationFrame(step);
      else setV(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref} className="stat">
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------- hero backdrop (frond) */

const _hash = (n: number) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const _quint = (x: number) => x * x * x * (x * (x * 6 - 15) + 10);
function drift(tt: number, off: number, hold?: number) {
  const i = Math.floor(tt);
  let f = tt - i;
  if (hold) {
    f = (f - hold) / (1 - 2 * hold);
    f = f < 0 ? 0 : f > 1 ? 1 : f;
  }
  const a = _hash(i + off) * 2 - 1,
    b = _hash(i + 1 + off) * 2 - 1;
  return a + (b - a) * _quint(f);
}

export function FrondBackdrop() {
  const host = useRef<HTMLDivElement>(null),
    cvs = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = host.current,
      canvas = cvs.current;
    if (!box || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const TAU = Math.PI * 2;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const TRAIL = 1800;
    const tx_ = new Float32Array(TRAIL),
      ty_ = new Float32Array(TRAIL);
    const bx = new Float32Array(200),
      by = new Float32Array(200);
    const CAP = 14000,
      BK = 5;
    const ox = new Float32Array(CAP),
      oy = new Float32Array(CAP),
      ow = new Float32Array(CAP);
    const buf = Array.from({ length: BK }, () => new Float32Array(CAP * 2));
    const bn = new Int32Array(BK);
    const RAMP = ["18,74,52", "16,86,58", "13,92,63", "11,80,55", "9,64,44"];

    let W = 0,
      H = 0,
      S = 0,
      DENS = 6000,
      SEG = 96,
      PIN = 20,
      minFrame = 0;
    let w = 0,
      hx = 0,
      hy = 0,
      ang = 0,
      t = 0,
      raf = 0,
      vis = true,
      last = 0;

    const seed = () => {
      const R = Math.min(W, H) * 0.32;
      for (let k = 0; k < TRAIL; k++) {
        const a = -k / R;
        tx_[TRAIL - 1 - k] = W * 0.58 + Math.cos(a) * R;
        ty_[TRAIL - 1 - k] = H * 0.48 + Math.sin(a) * R;
      }
      w = 0;
      hx = W * 0.58 + R;
      hy = H * 0.48;
      ang = Math.PI / 2;
    };

    const fitLen = () => Math.min(S * 1.45, Math.hypot(W, H) * 0.52);

    const draw = (dt: number) => {
      if (!W) return;
      const d = Math.min(dt, 0.05);
      t += d * 0.62;

      let want = drift(t * 0.42, 300, 0.22) * Math.PI * 0.62 + t * 0.34;
      const bl = fitLen();
      const pad = bl * 0.3;
      const x0 = -pad,
        x1 = W + pad,
        y0 = -pad,
        y1 = H + pad;
      const mgx = Math.min(bl * 0.55, (x1 - x0) * 0.24);
      const mgy = Math.min(bl * 0.55, (y1 - y0) * 0.24);
      let ax = 0,
        ay = 0;
      if (hx < x0 + mgx) ax += (x0 + mgx - hx) / mgx;
      if (hx > x1 - mgx) ax -= (hx - (x1 - mgx)) / mgx;
      if (hy < y0 + mgy) ay += (y0 + mgy - hy) / mgy;
      if (hy > y1 - mgy) ay -= (hy - (y1 - mgy)) / mgy;
      const wall = Math.hypot(ax, ay);
      if (wall > 0.01) {
        const wa = Math.atan2(ay, ax),
          k = Math.min(1, wall * 2.2);
        want = Math.atan2(
          (1 - k) * Math.sin(want) + k * Math.sin(wa) * 2.4,
          (1 - k) * Math.cos(want) + k * Math.cos(wa) * 2.4
        );
      }
      let diff = want - ang;
      while (diff > Math.PI) diff -= TAU;
      while (diff < -Math.PI) diff += TAU;
      const mt = 1.55 * d;
      ang += diff < -mt ? -mt : diff > mt ? mt : diff;

      const surge =
        0.16 + 0.84 * Math.pow(Math.max(0, drift(t * 0.55, 350, 0.18)), 2);
      const adv = S * 0.58 * (0.11 + 0.8 * surge) * d;
      hx += Math.cos(ang) * adv;
      hy += Math.sin(ang) * adv;
      tx_[w] = hx;
      ty_[w] = hy;
      w = (w + 1) % TRAIL;

      const SP = bl / SEG;
      let bi = 1,
        need = SP,
        acc = 0;
      let cx = tx_[(w - 1 + TRAIL) % TRAIL],
        cy = ty_[(w - 1 + TRAIL) % TRAIL];
      bx[0] = cx;
      by[0] = cy;
      for (let k = 1; k < TRAIL && bi < SEG; k++) {
        const j = (w - 1 - k + TRAIL * 2) % TRAIL;
        const qx = tx_[j],
          qy = ty_[j],
          dd = Math.hypot(qx - cx, qy - cy);
        if (dd > 1e-6) {
          acc += dd;
          while (acc >= need && bi < SEG) {
            const f = 1 - (acc - need) / dd;
            bx[bi] = cx + (qx - cx) * f;
            by[bi] = cy + (qy - cy) * f;
            bi++;
            need += SP;
          }
        }
        cx = qx;
        cy = qy;
      }
      while (bi < SEG) {
        bx[bi] = bx[bi - 1];
        by[bi] = by[bi - 1];
        bi++;
      }

      let n = 0;
      const put = (x: number, y: number, l: number) => {
        if (n < DENS) {
          ox[n] = x;
          oy[n] = y;
          ow[n] = l;
          n++;
        }
      };
      const gust =
        0.3 + 0.7 * Math.pow(Math.max(0, drift(t * 0.5, 5, 0.2)), 2);
      const pinEvery = Math.max(1, Math.round((bl * 0.055) / Math.max(SP, 0.01)));

      for (let i = 0; i < SEG && n < DENS; i++) {
        const v = i / (SEG - 1);
        const j = i > 0 ? i - 1 : 0,
          k = i + 1 < SEG ? i + 1 : i;
        let ux = bx[j] - bx[k],
          uy = by[j] - by[k];
        const ul = Math.hypot(ux, uy) || 1;
        ux /= ul;
        uy /= ul;
        const nx = -uy,
          ny = ux,
          X = bx[i],
          Y = by[i];

        let bend = 0;
        if (i > 0 && i < SEG - 1)
          bend =
            ((bx[k] - 2 * X + bx[j]) * nx + (by[k] - 2 * Y + by[j]) * ny) /
            (S * 0.004);
        bend = bend < -1.3 ? -1.3 : bend > 1.3 ? 1.3 : bend;

        const fade = 0.46 + 0.54 * Math.sin(Math.PI * Math.pow(1 - v, 0.55));
        const len = bl * 0.115 * Math.sin(Math.PI * Math.pow(1 - v, 0.42));

        for (let m = -1; m <= 1; m++)
          put(X + nx * m * S * 0.006, Y + ny * m * S * 0.006, 0.96 * fade);

        if (i < 4) {
          const cr = S * 0.028;
          for (let q = 1; q <= 16 && n < DENS; q++) {
            const f = q / 16,
              a2 = f * 4.4 + t * 0.5;
            put(
              X + ux * cr * 0.4 + Math.cos(a2) * cr * (1 - f * 0.7),
              Y + uy * cr * 0.4 + Math.sin(a2) * cr * (1 - f * 0.7),
              1
            );
          }
        }
        if (i % pinEvery) continue;
        for (let side = -1; side <= 1; side += 2) {
          const lag = Math.sin(t * 4.6 - v * 8.0 + side * 0.8 + i * 0.12);
          const droop = 0.52 + lag * 0.17 * gust - bend * side * 0.3;
          const fore = 1 + bend * side * 0.26;
          for (let p2 = 1; p2 <= PIN && n < DENS; p2++) {
            const p = p2 / PIN,
              e = Math.pow(p, 0.78);
            const fl =
              Math.sin(t * 12 - v * 11 + p2 * 0.7 + side * 2.1) *
              0.08 *
              e *
              e *
              gust;
            const dd2 = droop + fl,
              ln = len * e * fore;
            put(
              X + (nx * side * (1 - dd2 * e) - ux * dd2 * e) * ln,
              Y + (ny * side * (1 - dd2 * e) - uy * dd2 * e) * ln,
              (0.9 - p * 0.32) * fade * (0.74 + 0.26 * Math.abs(fore))
            );
          }
        }
      }

      ctx.fillStyle = "rgba(242,244,240,.26)";
      ctx.fillRect(0, 0, W, H);
      bn.fill(0);
      for (let i = 0; i < n; i++) {
        const px = ox[i],
          py = oy[i];
        if (px < -6 || px > W + 6 || py < -6 || py > H + 6) continue;
        let l = ow[i];
        l = l < 0 ? 0 : l > 1 ? 1 : l;
        const b = Math.min(BK - 1, (l * BK) | 0);
        const q = bn[b] * 2;
        buf[b][q] = px;
        buf[b][q + 1] = py;
        bn[b]++;
      }
      const psz = Math.max(0.6, Math.min(1.1, S / 430));
      for (let i = 0; i < BK; i++) {
        if (!bn[i]) continue;
        ctx.fillStyle =
          "rgba(" + RAMP[i] + "," + (0.058 + i * 0.024).toFixed(3) + ")";
        const sz = (1 + i * 0.16) * psz,
          a = buf[i],
          m = bn[i];
        for (let p = 0; p < m; p++) ctx.fillRect(a[p * 2], a[p * 2 + 1], sz, sz);
      }
    };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = box.clientWidth;
      H = box.clientHeight;
      if (!W || !H) return;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S = Math.min(W, H);
      const lean = W < 700 || (navigator.hardwareConcurrency || 8) <= 4;
      DENS = lean ? 3000 : 6500;
      minFrame = lean ? 31 : 0;
      SEG = lean ? 70 : 104;
      PIN = lean ? 13 : 20;
      ctx.fillStyle = "#F2F4F0";
      ctx.fillRect(0, 0, W, H);
      seed();
      if (reduce) for (let i = 0; i < 30; i++) draw(1 / 30);
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis || !W) return;
      if (minFrame && last && now - last < minFrame) return;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
      last = now;
      draw(dt);
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    const io = new IntersectionObserver(
      ([e]) => {
        vis = e.isIntersecting;
        last = 0;
      },
      { threshold: 0.01 }
    );
    io.observe(box);
    if (!reduce) raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className="hero-bg" ref={host} aria-hidden="true">
      <canvas ref={cvs} />
    </div>
  );
}
