import React from "react";

export default function Lily({
  size = 150,
  blue = false,
  draw = false,
  className = "",
}: {
  size?: number;
  blue?: boolean;
  draw?: boolean;
  className?: string;
}) {
  const C = 100,
    tepals = 8;
  const P = (r: number, deg: number): [number, number] => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [C + r * Math.cos(a), C + r * Math.sin(a)];
  };
  const petals: string[] = [];
  const stamens: [number, number][][] = [];
  for (let i = 0; i < tepals; i++) {
    const a = (360 / tepals) * i;
    const c1 = P(36, a - 9),
      c2 = P(74, a - 6),
      tip = P(76, a + 15);
    petals.push(
      `M${C},${C} C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${tip[0].toFixed(1)},${tip[1].toFixed(1)}`
    );
    const s1 = P(50, a + 3),
      s2 = P(93, a + 6);
    stamens.push([s1, s2]);
  }
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className={`lily ${blue ? "blue" : ""} ${draw ? "draw" : ""} ${className}`}
    >
      {petals.map((d, i) => (
        <path key={`p${i}`} d={d} style={{ animationDelay: `${i * 55}ms` }} />
      ))}
      {stamens.map(([s, e], i) => (
        <line
          key={`s${i}`}
          x1={s[0]}
          y1={s[1]}
          x2={e[0]}
          y2={e[1]}
          strokeWidth="0.9"
          style={{ animationDelay: `${400 + i * 45}ms` }}
        />
      ))}
      {stamens.map(([, e], i) => (
        <circle key={`d${i}`} cx={e[0]} cy={e[1]} r="1.9" />
      ))}
      <circle cx={C} cy={C} r="3" />
    </svg>
  );
}
