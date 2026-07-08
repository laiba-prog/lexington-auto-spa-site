const SPARKLES = [
  { top: "3%", left: "4%", size: 22, glow: true },
  { top: "8%", left: "12%", size: 12, glow: false },
  { top: "16%", left: "3%", size: 16, glow: false },
  { top: "5%", left: "36%", size: 14, glow: false },
  { top: "22%", left: "20%", size: 10, glow: false },
  { top: "38%", left: "8%", size: 18, glow: true },
  { top: "55%", left: "3%", size: 14, glow: false },
  { top: "70%", left: "14%", size: 20, glow: false },
  { top: "85%", left: "5%", size: 12, glow: false },
  { top: "6%", left: "52%", size: 10, glow: false },
  { top: "45%", left: "48%", size: 12, glow: false },
  { top: "9%", left: "68%", size: 24, glow: true },
  { top: "20%", left: "80%", size: 14, glow: false },
  { top: "4%", left: "92%", size: 16, glow: false },
  { top: "32%", left: "88%", size: 40, glow: true },
  { top: "50%", left: "94%", size: 12, glow: false },
  { top: "62%", left: "82%", size: 18, glow: false },
  { top: "78%", left: "92%", size: 14, glow: false },
  { top: "90%", left: "76%", size: 20, glow: false },
  { top: "94%", left: "60%", size: 10, glow: false },
];

const RAYS = [
  { top: "-20%", left: "-10%", width: "160%", height: "35%", rotate: 18, color: "#F7CE6B", opacity: 0.45, blur: 40 },
  { top: "10%", left: "-15%", width: "150%", height: "22%", rotate: 16, color: "#C9611E", opacity: 0.3, blur: 30 },
  { top: "35%", left: "-15%", width: "160%", height: "30%", rotate: 20, color: "#FCE3A3", opacity: 0.35, blur: 45 },
  { top: "58%", left: "-10%", width: "150%", height: "24%", rotate: 15, color: "#C9611E", opacity: 0.28, blur: 30 },
];

function FourPointStar({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
    </svg>
  );
}

function SixPointStar({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M12 0 L14 8.5 L20.8 3.2 L16.8 10.4 L24 12 L16.8 13.6 L20.8 20.8 L14 15.5 L12 24 L10 15.5 L3.2 20.8 L7.2 13.6 L0 12 L7.2 10.4 L3.2 3.2 L10 8.5 Z" />
    </svg>
  );
}

export default function ShimmerBackground({ fixed = false }: { fixed?: boolean }) {
  return (
    <div className={`${fixed ? "fixed" : "absolute"} inset-0 overflow-hidden pointer-events-none`} aria-hidden>
      {/* Base diagonal gradient — deep burnt orange in the corners, golden through the middle */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(52deg, #D9782E 0%, #E8973A 30%, #F0B93C 52%, #E8973A 74%, #D9782E 100%)" }}
      />

      {/* Diagonal light rays — soft-edged, varying widths, blurred so borders feather instead of cutting hard */}
      {RAYS.map((r, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: r.top,
            left: r.left,
            width: r.width,
            height: r.height,
            background: r.color,
            opacity: r.opacity,
            transform: `rotate(${r.rotate}deg)`,
            filter: `blur(${r.blur}px)`,
          }}
        />
      ))}

      {/* Fine pinstripe cluster — 5 thin parallel lines, clustered on the right rather than tiled everywhere */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          right: "6%",
          width: "30%",
          height: "120%",
          transform: "rotate(18deg)",
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 16px, rgba(150,60,10,0.4) 16px, rgba(150,60,10,0.4) 19px)",
          maskImage: "linear-gradient(90deg, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 30%, black 70%, transparent)",
        }}
      />

      {/* Sparkles — denser toward the edges, sparser in the center; a few glowing */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute opacity-90"
          style={{ top: s.top, left: s.left, filter: s.glow ? "blur(0.5px) drop-shadow(0 0 6px rgba(255,255,255,0.8))" : undefined }}
        >
          {i % 3 === 0 ? <SixPointStar size={s.size} /> : <FourPointStar size={s.size} />}
        </span>
      ))}
    </div>
  );
}
